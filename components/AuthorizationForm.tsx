'use client';

import Link from 'next/link'
import Image from "next/image"
import React, { useState } from 'react'
import CustomInput from './CustomInput';

// reference to REACT HOOK FORM doc from shadcn
import { z } from "zod"
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
import { authFormSchema } from '@/lib/utils';
import { Loader2 } from 'lucide-react';


const AuthorizationForm = ({ type }: {type: string }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  // 1. Define your form.
  const form = useForm<z.infer<typeof authFormSchema>>({
    resolver: zodResolver(authFormSchema),
    defaultValues: {
        email: "",
        password: ""
    },
  })
        
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof authFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setIsLoading(true)
    console.log(values)
    setIsLoading(false)
  }

  return (
    <section className='auth-form'>
      <header className='flex-col gap-5 md:gap-8'>
        <Link href="/" className="cursor-pointer flex items-center gap-1">
            <Image
              src="/icons/logo.svg"
              width={34}
              height={34}
              alt="Prestige logo"
            />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Prestige</h1>{/* show Prestige title next to logo after accessing 3 lines option*/}
          </Link>

          <div className='flex flex-col gap-1 md:gap-3'>
            <h1 className='text-24 lg:text-36 font-semibold text-gray-800 pt-8'>
                {user
                  ? 'Link Account' // if already have a user
                  : type === 'sign-in' // else check type
                    ? 'Sign In' // if type == sign-in: Sign In
                    : 'Sign Up' // else: Sign Up
                }
                <p className='text-16 font-normal text-gray-450 pt-1'>
                    {user
                      ? 'Link your account to get started!' // if already have a user
                      : 'Please enter your details' // else ask user to enter information
                    }
                </p>
            </h1>
          </div>
      </header>
      { user ? ( // if user already authenticated
        <div className='flex flex-col gap-4'>
            {/* PlaidLink  to link bank account*/}
        </div>
      ): ( // else:
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <CustomInput 
                    control={form.control} name='email' label='Email' placeholder='Enter your email'
                />
                <CustomInput 
                    control={form.control} name='password' label='Password' placeholder='Enter your password'
                />

                <div className='flex flex-col gap-4'>
                    <Button type="submit" disabled={isLoading} className='form-btn'>
                        {isLoading ? ( // if loading
                            <>
                                <Loader2 size={25} className='animate-spin' /> &nbsp;
                                Loading...
                            </>
                        ) : type == 'sign-in' // if type sign-in: Sign In, else: Sign Up
                        ? 'Sign In' : 'Sign Up'}
                    </Button>
                </div>
            </form>
          </Form>

          <footer className='flex justify-center gap-1'>
            <p className='text-14 font-normal text-gray-600'>
                {type === 'sign-in' 
                ? "Don't have an account?" // if type sign-in
                : "Already have an account?"}
            </p>
            <Link href={type === 'sign-in' ? '/sign-up' : 'sign-in'} className='form-link'>{/* goes to the correct href according to type*/}
                {type === 'sign-in' ? 'Sign Up' : 'Sign In'}
            </Link>
          </footer>
        </>
      )}
    </section>
  )
}

export default AuthorizationForm
