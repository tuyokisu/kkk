import {z} from "zod"

export const formSchema=z.object({
  name:z.string().min(1),
  email:z.string().email(),
  body:z.string().min(1),
  subject:z.string().min(1),
})

export type FormDataTypes=z.infer<typeof formSchema>