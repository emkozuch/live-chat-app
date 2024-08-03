import { useFormik } from "formik";
import { loginFormSchema, LoginFormState } from "./schemes";

export const useLoginForm = (onSubmit: () => void) => {
  const formik = useFormik<LoginFormState>({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema: loginFormSchema,
    onSubmit,
  });

  return { formik };
};
