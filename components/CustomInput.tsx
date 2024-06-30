import React from 'react'
import { FormLabel, FormControl, FormField, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { FieldPath } from 'react-hook-form'

import { Control } from 'react-hook-form'
import { z } from 'zod'
import { authFormSchema } from '@/lib/utils'

interface CustomInput {
    control: Control<z.infer<typeof authFormSchema>>,
    name: FieldPath<z.infer<typeof authFormSchema>>, // looks at authFormScheme to check if property in function
    label: string,
    placeholder: string
}

// input structure for authentication (email and password)
const CustomInput = ({ control, name, label, placeholder }: CustomInput) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className='form-item'>
            <FormLabel className='form-label'>
                {label}
            </FormLabel>
            <div className='flex w-full flex-col'>
                <FormControl>
                    <Input 
                        placeholder={placeholder} 
                        className='input-class'
                        type={name === 'password' ? 'password' : 'text'}
                        {...field}
                    />
                </FormControl>
                <FormMessage className='form-message mt-2'/>
            </div>
        </div>
      )}
    />
  )
}

export default CustomInput
