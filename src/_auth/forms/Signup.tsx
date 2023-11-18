import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'
import { createUserAccount } from '@/lib/appwrite/api'



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
import {z} from 'zod';
import Loader from '@/components/Shared/Loader'
 
import { SignupVal } from '@/lib/validation'
function Signup() {
  const isLoading=false;
  
  const form = useForm<z.infer<typeof SignupVal>>({
    resolver: zodResolver(SignupVal),
    defaultValues: {
      name:"",
      username: "",
      email:"",
      password:"",
    },
  })
 
  // 2. Define a submit handler.
 async function  onSubmit(values: z.infer<typeof SignupVal>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const newUser=await createUserAccount(values)
    console.log(newUser);
  }
  return (
   
         <Form {...form}>
          <div className='sm:w-420 flex-center flex-col'>
            <img src="/public/assets/images/logo.svg" alt="" />

            <h2 className='h3-bold md:h2-bold pt-5 pb-2 sm:pt-12 pb-2'>Create new account</h2>
             <p className='text-light-3 small-medium md:base-regular mt-2'>To use snapgram please enter your details first</p>

        
      <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col mt-4 gap-5 w-full'>
      <FormField
  control={form.control}
  name="name"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Name</FormLabel>
      <FormControl>
        <Input type='text' className='shad-input' placeholder='name' {...field} />
      </FormControl>
     
      <FormMessage />
    </FormItem>
  )}
/>
<FormField
  control={form.control}
  name="username"
  render={({ field }) => (
    <FormItem>
      <FormLabel>UserName</FormLabel>
      <FormControl>
        <Input type='text' className='shad-input' placeholder='username' {...field} />
      </FormControl>
     
      <FormMessage />
    </FormItem>
  )}
/>
<FormField
  control={form.control}
  name="email"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Email</FormLabel>
      <FormControl>
        <Input type='email' className='shad-input' placeholder='email' {...field} />
      </FormControl>
     
      <FormMessage />
    </FormItem>
  )}
/>
<FormField
  control={form.control}
  name="password"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Password</FormLabel>
      <FormControl>
        <Input type='password' className='shad-input' placeholder='at least 8 character' {...field} />
      </FormControl>
     
      <FormMessage />
    </FormItem>
  )}
/>

        <Button type="submit" className='shad-button_primary'>

          {isLoading?(
            <div className='flex-center gap-2'>
              <Loader/>
              Loading...</div>

          ):
          <div>Signup</div>
          }
        </Button>
        <p className='text-small-regular text-light-2 text-center mt-2'>
          Already have an account?
            <Link to="/sign-in" className='text-small-semibold ml-1 text-primary-500'>Login
            </Link>
        </p>
      </form>
      </div>
    </Form>
    
  )
}

export default Signup