import Form from "../../../components/form";
import Input from "../../../components/input";
import Button from "../../../components/button";

import { useFormik } from "formik";
import { object, string, ref } from "yup";
import { useNavigate } from "react-router-dom";

const signUpSchema = object({
  email: string().email("Invalid email").required("Email is required"),
  password: string()
    .min(4, "Use at least 4 characters")
    .max(20, "Use at most 20 characters")
    .required("Pasword is required"),
  repeatPassword: string()
    .oneOf([ref("password"), null], "Passwords don't match")
    .required("Repeat password is required"),
});

function SignUp() {
  const navigate = useNavigate();
  const formik = useFormik({
    validationSchema: signUpSchema,
    validateOnChange: false,
    initialValues: {
      email: "",
      password: "",
      repeatPassword: "",
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
      <Input
        id="repeatPassword"
        title="Repeat password"
        value={formik.values.repeatPassword}
        onChange={formik.handleChange}
        errorMessage={formik?.errors?.repeatPassword}
      />
      <Button text="Sign Up" />
    </Form>
  );
}

export default SignUp;
