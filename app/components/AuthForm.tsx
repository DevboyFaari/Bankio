"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import CustomInput from "./CustomInput";
import { Loader2 } from "lucide-react";
import { authFormSchema } from "@/lib/utils";
import SignIn from "../(auth)/sign-in/page";
import { useRouter } from "next/navigation";
import { getLoggedInUser, SignUp } from "@/lib/actions/user.actions";




const AuthForm = ({ type }: { type: string }) => {
  const router = useRouter();
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
   
    const formSchema = authFormSchema(type);
    // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password:''
    },
  })
  

  const onValid = async (data:z.infer<typeof formSchema>) => {
    setIsLoading(true);

      try {
        
        if (type === 'sign-up'){
          const newUser = await SignUp({ userData: data });
          setUser(newUser);
        }

        if(type === 'sign-in'){
          const response = await SignIn({
            email: data.email,
            password: data.password,
          })
          if (response) router.push('/')
        }
      } catch (error) {
        console.log(error)
      } finally{
        console.log("Valid data:", data);
        setIsLoading(false);

      }


  };
  
  
    
  return (
    <section className="auth-form">
        <header>

      <Link href="/" className="items-center flex cursor-pointer gap-1">
        <Image
          src="/icons/bank-logo.jpg"
          width={34}
          height={34}
          alt="bankio logo"
          className="size-[54px]  max-xl:size-14"
        />
        <h1 className="sidebar-logo flex">Bankio</h1>
      </Link>
      <div className="flex flex-col gap-1 md:gap-3">
        <h1 className="text-24 lg:text-36 font-semibold text-grey-900">
            {user? 'Link Account' : type === "sign-in"? "Sign-In" : "sign-up"}
            <p className="text-16 font-normal">
                {user? "Link your account to get started" : "Please enter your details"}
                
            </p>
        </h1>
      </div>

        </header>
        {user? (
            <div className="flex flex-col gap-8">
                {/*PlaiDlink*/}
            </div>
        ): (
            <>
           <Form {...form}>
           <form onSubmit ={form.handleSubmit(onValid)} className="space-y-8">
            {type === 'sign-up' && (
              <>
              <div className='flex gap-12'>

              <CustomInput form={form} name ="firstName" label="First Name" placeholder="Enter your First Name" />
              <CustomInput form={form} name ="lastName" label="Last Name" placeholder="Enter your Last  Name" />
              </div>
              <CustomInput form={form} name ="address1" label="address" placeholder="Enter your specific Address" />
              <CustomInput form={form} name ="city" label="city" placeholder="Eg: Bayarea" />
              <div className='flex gap-12'>
              <CustomInput form={form} name ="state" label="state" placeholder="Example : NY" />
              <CustomInput form={form} name ="postalCode" label="Postal Code" placeholder="Example : 11101" />

              </div>
              <div className='flex gap-12'>
              <CustomInput form={form} name ="dateOfBirth" label="Date Of Birth" placeholder="YYYY-MM-DD" />
              <CustomInput form={form} name ="ssn" label="SSN" placeholder="Example : 1234" />

              </div>
              
              </>
            )}

        {/* <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
           <div className='form-item'>
            <FormLabel className='form-label'>
              Email
            </FormLabel>
            <div className='flex flex-col w-full'>
              <FormControl>
                <Input placeholder='Enter your email' className='input-class' {...field}/>
                
              </FormControl>
              <FormMessage className='form-message mt-2'/>
            </div>
           </div>
          )}
        /> */}
       <CustomInput form={form} name='email' label='email' placeholder='Enter your email' />
       <CustomInput form={form} name="password" label='password' placeholder='Enter your password' />


       <div className="flex flex-col gap-4">

        <Button className='form-btn' disabled={isLoading} type="submit">
          {isLoading? (
            <>
            <Loader2 size={20} className='animate-spin'/>&nbsp; Loading...
            </>
          ): type ==='sign-in' ? 'Sign In' : 'Sign Up' }
        </Button>

       </div>
      </form>
    </Form>
            <footer className='flex justify-center gap-1'>
              <p className='text-14 font-normal text-gray-600'>
                {type === 'sign-in'? 'Dont have an account?' : 'Already have an account?'}
              </p>
              <Link href={type === 'sign-in' ? '/sign-up':'/sign-in' } className='form-link'>
              {type === 'sign-up'? 'Sign in' : 'Sign up' }
              </Link>
            </footer>
            </>
        )}
    </section>
  );
};

export default AuthForm;


