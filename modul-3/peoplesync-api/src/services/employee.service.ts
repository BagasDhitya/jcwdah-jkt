import { pool } from "../config/pool";

interface EmployeeQuery {
  search?: string;
  department?: string;
}

export async function getAllEmployees(query: EmployeeQuery) {
  const { search, department } = query;
  let baseQuery = `SELECT e.*, d.department_name
          FROM hr.employees e
          JOIN hr.departments d ON
          e.department_id = d.id
          WHERE e.deleted_at IS NULL
         `;

  const values: any[] = [];
  let index = 1;

  // search (berdasarkan name atau email)
  if (search) {
    baseQuery += ` AND (LOWER(e.name) LIKE LOWER($${index})) 
    OR 
    LOWER(e.email) LIKE LOWER($${index})
    `;
    values.push(`%${search}%`);
    index++;
  }

  baseQuery += ` ORDER BY e.id`;

  const result = await pool.query(baseQuery, values);
  return result.rows;
}

export async function getEmployeeById(id: number) {
  const result = await pool.query(
    `SELECT * FROM hr.employees
        WHERE id = $1
        AND deleted_at IS NULL
        `,
    [id],
  );

  return result.rows[0];
}

export async function createEmployee(data: any) {
  const { name, email, phone, salary, hire_date, department_id } = data;

  const result = await pool.query(
    `
    INSERT INTO hr.employees
    (name, email, phone, salary, hire_date, department_id)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *
    `,
    [name, email, phone, salary, hire_date, department_id],
  );

  return result.rows[0];
}

export async function updateEmployee(id: number, data: any) {
  const result = await pool.query(
    `
            UPDATE hr.employees
            SET name = $1, email = $2, phone = $3,
                salary = $4, department_id = $5, updated_at = NOW()
            WHERE id = $6
            RETURNING *
        `,
    [data.name, data.email, data.phone, data.salary, data.department_id, id],
  );

  return result.rows[0];
}

export async function deleteEmployee(id: number) {
  await pool.query(
    `
            UPDATE hr.employees
            SET deleted_at = NOW()
            WHERE id = $1
        `,
    [id],
  );
}
