import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email inválido"
    }),
    password: z.string().min(10, {
        message: "Senha inválida"
    })
})

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Email inválido"
    }),
    password: z.string().min(10, {
        message: "O mínimo requirido são 10 caracteres"
    }),
    name: z.string().min(2, {
        message: "O nome é obrigatório"
    })
})