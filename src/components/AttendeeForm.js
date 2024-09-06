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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useEffect } from "react"
import Image from "next/image"
import axios from "axios"
import { toast } from "sonner"

const formSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email({ message: "Invalid email address" }),
  phonenumber: z.preprocess(
    (value) => Number(value),
    z.number().min(7, {
      message: "phonenumber must be at least 7 digits",
    })
  ),
  course: z.string({ message: "Enter student course" })
})

export function AttendeeForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phonenumber: "",
      course: "",
    },
  })
  
  const { reset } = form
  const { isDirty, isValid, isSubmitting, isSubmitSuccessful } = form.formState
 
  const onSubmit = async (values) => {
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/attendee`, values)
      toast(`${res.data.newAttendee.firstName} ${res.data.newAttendee.lastName} registered successfully`)
    } catch (error) {
      toast("Registration failed")
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
        <div className="flex flex-col items-center space-y-3 mt-10 mb-10 tablet:mb-16">
          <Image src="/ibadanTExpo.png" className="w-auto h-auto" alt="ibadan tech expo logo" width={100} height={100}/>
          <h1 className="font-semibold text-xl tablet:text-2xl laptop:3xl">Register Attendee</h1>          
        </div>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 gap-x-8 gap-y-6 tablet:grid-cols-2 w-full px-5">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="bg-slate-100 rounded-md" placeholder="First Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="bg-slate-100 rounded-md" placeholder="Last Name" {...field} />
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
              <FormControl>
                <Input className="bg-slate-100 rounded-md" placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phonenumber"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="bg-slate-100 rounded-md mb-2" placeholder="Phone number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="course"
          render={({ field }) => (
            <FormItem className="tablet:col-span-2">
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-slate-100 rounded-md mb-2">
                      <SelectValue placeholder="Select Course" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-slate-100">
                    <SelectItem value="Cyber Security">Cyber Security</SelectItem>
                    <SelectItem value="Data Analysis">Data Analysis</SelectItem>
                    <SelectItem value="Frontend Development">Frontend Development</SelectItem>
                    <SelectItem value="Backend Development">Backend Development</SelectItem>
                    <SelectItem value="Mobile Development">Mobile Development</SelectItem>
                    <SelectItem value="UIUX Design">UIUX Design</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="bg-yellow-500 hover:bg-yellow-400 text-white rounded-lg tablet:col-span-2" type="submit" disabled={!isDirty || !isValid} >{isSubmitting ? "Loading..." : "Log in"}</Button>
      </form>
      </div>
    </Form>
  )
}