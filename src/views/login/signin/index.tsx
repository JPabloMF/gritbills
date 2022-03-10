import Form from "../../../components/form";
import Input from "../../../components/input";
import Button from "../../../components/button";

import { useFormik } from "formik";
import { object, string } from "yup";
import { useNavigate } from "react-router-dom";

const signInSchema = object({
  email: string().email("Invalid email").required("Email is required"),
  password: string()
    .min(4, "Use at least 4 characters")
    .max(20, "Use at most 20 characters")
    .required("Pasword is required"),
});

function SignIn() {
  const navigate = useNavigate();
  const formik = useFormik({
    validationSchema: signInSchema,
    validateOnChange: false,
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: () => {
      navigate("/dashboard");
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Input
        id="email"
        title="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        errorMessage={formik?.errors?.email}
      />
      <Input
        id="password"
        title="Password"
        value={formik.values.password}
        onChange={formik.handleChange}
        errorMessage={formik?.errors?.password}
      />
      <Button text="Sign in" />
    </Form>
  );
}

export default SignIn;
