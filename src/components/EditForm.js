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
import axios from "axios"
import { toast } from "sonner"
import { Oval  } from 'react-loader-spinner'

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

export function EditForm({attendee}) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: attendee.firstName,
      lastName: attendee.lastName,
      email: attendee.email,
      phonenumber: attendee.phonenumber,
      course: attendee.course,
    },
  })
  
  const { reset } = form
  const { isDirty, isValid, isSubmitting, isSubmitSuccessful } = form.formState
 
  const onSubmit = async (values) => {
    try {
      await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/attendee/${attendee._id}`, values)
      toast('Details updated successfully')
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
        <Button className="tablet:col-span-2" type="submit" disabled={!isDirty || !isValid} >
            {isSubmitting 
            ? <div className="flex gap-3 items-center justify-center"><Oval visible={true} height="18" width="18" color="white" ariaLabel="oval-loading" /> <p>Saving...</p></div>
            : <div>Save changes</div>
            }
        </Button>
      </form>
    </Form>
  )
}