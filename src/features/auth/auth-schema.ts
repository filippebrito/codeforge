import { z } from "zod";

export const loginSchema = z.object({
  email: z.email({ error: "Digite um e-mail válido." }),
  password: z
    .string()
    .min(6, { error: "A senha precisa ter de 6 a 10 caracteres." })
    .max(10, { error: "A senha precisa ter de 6 a 10 caracteres." }),
});

export const signupSchema = z.object({
  name: z.string().min(2, { error: "O nome precisa ter pelo menos 2 caracteres." }).max(100, { error: "O nome precisa ter no máximo 100 caracteres." }),
  email: z.email({ error: "Digite um e-mail válido." }),
  password: z
    .string()
    .min(6, { error: "A senha precisa ter de 6 a 10 caracteres." })
    .max(10, { error: "A senha precisa ter de 6 a 10 caracteres." }),
  confirmPassword: z.string().min(6, { error: "A senha precisa ter de 6 a 10 caracteres." }).max(10, { error: "A senha precisa ter de 6 a 10 caracteres." }),
}).refine((data) => data.password === data.confirmPassword, {
  error: "As senhas não coincidem.",
  path: ["confirmPassword"],
});