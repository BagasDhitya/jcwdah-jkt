export interface Department {
  id: number;
  department_name: string;
  role: string;
  created_at: Date;
}

export interface Employee {
  id: number;
  name: string;
  email: string;
  phone: string;
  salary: number;
  hire_date: Date;
  is_active: boolean;
  created_at: Date;
  updated_at: Date | null;
  deleted_at: Date | null;
  department_id: number;
}
