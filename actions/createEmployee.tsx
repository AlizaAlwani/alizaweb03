"use server";

import { db } from "@/lib/db";
import { EmployeeSchema } from "@/schemas";
import { z } from "zod";

export const createEmployee = async (values: z.infer<typeof EmployeeSchema>) => {
    console.log(values);

    const employee = await db.employee.create({
        data: {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            phoneNumber: values.phoneNumber,

        }
    })
    console.log(employee);
}