import { type } from "os";
import { z } from "zod";

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
    z.array(z.custom<File>())
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
});
