import * as z from "zod"
export const SignupVal = z.object({
    username: z.string().min(2,{message:'too short'}),
    name:z.string().min(2,{message:'Too short'}),
    email: z.string().email(),
    password: z.string().min(8,{message:"minimum 8 characters"})
  })
  