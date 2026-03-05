import { Request, Response } from "express";
import * as service from "../services/employee.service";

export async function getEmployees(req: Request, res: Response) {
  const { search, department } = req.query;

  const data = await service.getAllEmployees({
    search: search as string,
    department: department as string,
  });
  res.status(200).send({
    success: true,
    data: data,
  });
}

export async function getEmployee(req: Request, res: Response) {
  const { id } = req.params;
  const data = await service.getEmployeeById(Number(id));
  res.status(200).send({
    success: true,
    data: data,
  });
}

export async function createEmployee(req: Request, res: Response) {
  const data = await service.createEmployee(req.body);
  res.status(201).send({
    success: true,
    data: data,
  });
}

export async function updateEmployee(req: Request, res: Response) {
  const { id } = req.params;
  const data = await service.updateEmployee(Number(id), req.body);
  res.status(201).send({
    success: true,
    data: data,
  });
}

export async function deleteEmployee(req: Request, res: Response) {
  const { id } = req.params;
  await service.deleteEmployee(Number(id));
  res.status(201).send({
    message: "Success delete employee",
  });
}
