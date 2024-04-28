import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

 export const Employeepage = () => {
  return (
    <div className='flex flex-col gap-6 mt-[300px] w-auto h-screen'>
        <h1 className='text-4xl font-bold text-center '>
            CRUD Operations Using Next JS 14, Prisma & PostgreSQL
        </h1>

        <Button asChild className='w-[150px] flex items-center justify-center ml-[670px]'>
            <Link href={'/Employee/create'}>Create</Link>
            
            </Button>
    </div>
  )
}

export default Employeepage
