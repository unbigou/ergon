import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string({
      invalid_type_error: "O email precisa ser um texto.",
      required_error: "O email não pode ser vazio.",
    })
    .email({
      message: "O email precisa ser válido.",
    }),
  password: z
    .string({
      invalid_type_error: "A senha precisa ser um texto.",
      required_error: "A senha não pode ser vazia.",
    })
    .min(3, {
      message: "A senha precisa ter no mínimo 3 caracteres.",
    })
    .max(255, {
      message: "A senha precisa ter no máximo 255 caracteres.",
    }),
});

export const registerSchema = z.object({
  email: z
    .string({
      invalid_type_error: "O email precisa ser um texto.",
      required_error: "O email não pode ser vazio.",
    })
    .email({
      message: "O email precisa ser válido.",
    }),
  confirmEmail: z
    .string({
      invalid_type_error: "A confirmação de email precisa ser um texto.",
      required_error: "A confirmação de email não pode ser vazia.",
    })
    .email({
      message: "A confirmação de email precisa ser válida.",
    }),

  password: z
    .string({
      invalid_type_error: "A senha precisa ser um texto.",
      required_error: "A senha não pode ser vazia.",
    })
    .min(3, {
      message: "A senha precisa ter no mínimo 3 caracteres.",
    })
    .max(255, {
      message: "A senha precisa ter no máximo 255 caracteres.",
    }),
  confirmPassword: z
    .string({
      invalid_type_error: "A confirmação de senha precisa ser um texto.",
      required_error: "A confirmação de senha não pode ser vazia.",
    })
    .min(3, {
      message: "A confirmação de senha precisa ter no mínimo 3 caracteres.",
    })
    .max(255, {
      message: "A confirmação de senha precisa ter no máximo 255 caracteres.",
    }),
});

export const productSchema = z.object({
  name: z
    .string({
      invalid_type_error: "O nome não pode ser vazio.",
      required_error: "O nome não pode ser vazio.",
    })
    .min(3, {
      message: "O nome precisa ter no mínimo 3 caracteres.",
    })
    .max(255, {
      message: "O nome precisa ter no máximo 255 caracteres.",
    }),
  price: z
    .number({
      invalid_type_error: "O preço precisa ser um número.",
      required_error: "O preço não pode ser vazio.",
    })
    .positive({
      message: "O preço precisa ser positivo.",
    })
    .refine((val) => val > 0, {
      message: "O preço precisa ser positivo.",
    }),
  type: z
    .string({
      invalid_type_error: "O tipo não pode ser vazio.",
      required_error: "O tipo não pode ser vazio.",
    })
    .min(3, {
      message: "O tipo precisa ter no mínimo 3 caracteres.",
    })
    .max(255, {
      message: "O tipo precisa ter no máximo 255 caracteres.",
    }),
  file: z.union([
    z.string({
      invalid_type_error: "A imagem não pode ser vazia.",
      required_error: "A imagem não pode ser vazia.",
    }),
    z.array(
      z.string({
        invalid_type_error: "A imagem não pode ser vazia.",
        required_error: "A imagem não pode ser vazia.",
      })
    ),
    z.custom<File>(),
    z.array(z.custom<File>()),
  ]),

  formulation: z.string({
    invalid_type_error: "A formulação não pode ser vazia.",
    required_error: "A formulação não pode ser vazia.",
  }),
  cultures: z.array(
    z.string({
      invalid_type_error: "A cultura não pode ser vazia.",
      required_error: "A cultura não pode ser vazia.",
    })
  ),
  application: z.string({
    invalid_type_error: "A aplicação não pode ser vazia.",
    required_error: "A aplicação não pode ser vazia.",
  }),
  sellerId: z.string({
    invalid_type_error: "O vendedor não pode ser vazio.",
    required_error: "O vendedor não pode ser vazio.",
  }),
});
