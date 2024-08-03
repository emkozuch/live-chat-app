import * as yup from "yup";

export const loginFormSchema = yup.object({
  login: yup.string().required("forms.validation.requiredField"),
  password: yup.string().required("forms.validation.requiredField"),
});

export type LoginFormState = yup.InferType<typeof loginFormSchema>;
