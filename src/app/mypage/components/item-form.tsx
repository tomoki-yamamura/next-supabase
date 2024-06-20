"use client";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
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
import { createItem } from '@/actions/item';
import { useToast } from '@/components/ui/use-toast';


const formSchema = z.object({
  amount: z.coerce.number().min(1),
  name: z.string().min(1).max(255)
})

type FormData = z.infer<typeof formSchema>

export default function ItemForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      amount: 0
    },
  })


  const { toast } = useToast()
  
  const onSubmit: SubmitHandler<FormData> =async (data) => {
    createItem(data).then(() => {
      toast({
        title: "Succesfully added!",
        description: "Check your items",
      })
      form.reset();
    }).catch((error) => {
      toast({
        variant: "destructive",
        title: "error occures",
        description: error.message
      })
    })
  }
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit, () => {
          alert("error")
        })} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Item" {...field} />
                </FormControl>
                <FormDescription>
                  Max 255 Min 1 characters
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit, () => {
          alert("error")
        })} className="space-y-8">
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Amount</FormLabel>
                <FormControl>
                  <Input type='number' placeholder="100" {...field} />
                </FormControl>
                <FormDescription>
                  more than 0
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Add</Button>
        </form>
      </Form>
    </>
  )
}
