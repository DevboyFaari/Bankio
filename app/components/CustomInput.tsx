import { Form, FormControl, FormField, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import React from 'react'



interface CustomInput {
   form : typeof Form,
   name : string,
   label : string,
   placeholder : string
}



const CustomInput = ({form, name, label, placeholder} : CustomInput) => {

  
  
  return (
    <FormField
          control={form.control}
          name={name}
          render={({ field }:any) => (
           <div className='form-item'>
            <FormLabel className='form-label'>
             {label}
            </FormLabel>
            <div className='flex flex-col w-full'>
              <FormControl>
                <Input type={name === 'password' ? 'password' : 'text'} placeholder={placeholder} className='input-class' {...field}/>
                
              </FormControl>
              <FormMessage className='form-message mt-2'/>
            </div>
           </div>
          )}
        />
  )
}

export default CustomInput