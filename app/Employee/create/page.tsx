"use client";
import { Employeeform } from '@/components/employee-form'
import { Formwrapper } from '@/components/ui/form-wrapper'
import React from 'react'

 export const EmployeeCreatePage = () => {
  return (
    <div className='flex justify-center items-center mt-[80px]'>
    
      <Formwrapper title="Create a New Employee">
        <Employeeform />
      </Formwrapper>
      </div>
    
  )
}

export default EmployeeCreatePage

