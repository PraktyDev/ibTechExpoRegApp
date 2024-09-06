"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useEffect } from "react"
import Image from "next/image"
import axios from "axios"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { Oval  } from 'react-loader-spinner'


const formSchema = z.object({
  username: z.string(),
  password: z.string().min(4, {
    message: "Password must be at least 4 characters.",
  }),
})

export function LoginForm() {
  const router = useRouter()
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  })
  
  const { reset } = form
  const { isDirty, isValid, isSubmitting, isSubmitSuccessful } = form.formState
 
  const onSubmit = async (values) => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/volunteer/login`, values);
      localStorage.setItem('accessToken', response.data);
      toast("Login success")
      router.push('/dashboard')
    } catch (error) {
      toast('Login failed, try again');
    }
  }

  useEffect(()=>{
    if(isSubmitSuccessful){
      reset()
    }
  },[isSubmitSuccessful, reset])

  return (
    <Form {...form}>
      <div className="flex flex-col m-auto w-full items-center justify-center">
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 px-10 w-full flex flex-col">
        <div className="mb-3 space-y-3">
          <Image src="/ibadanTExpo.png" priority={true} className="w-auto h-auto" alt="ibadan tech expo logo" width={100} height={100}/>
          <h1 className="font-semibold">Log in as volunteer</h1>          
        </div>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="bg-slate-100 rounded-md" placeholder="Username" {...field} />
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
              <FormControl>
                <Input className="bg-slate-100 rounded-md mb-2" placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="bg-yellow-500 hover:bg-yellow-400 text-white rounded-lg" type="submit" disabled={!isDirty || !isValid} >
          {isSubmitting 
            ? <div className="flex gap-3 items-center justify-center"><Oval visible={true} height="18" width="18" color="white" ariaLabel="oval-loading" /> <p>Loading...</p></div>
            : <div>Log in</div>
          }
        </Button>
      </form>
      </div>
    </Form>
  )
}