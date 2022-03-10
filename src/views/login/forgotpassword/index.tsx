import Form from "../../../components/form";
import Input from "../../../components/input";
import Button from "../../../components/button";

import { useFormik } from "formik";
import { object, string } from "yup";

const forgotPasswordSchema = object({
  email: string().email("Invalid email").required("Email is required"),
});

function ForgotPassword() {
  const formik = useFormik({
    validationSchema: forgotPasswordSchema,
    validateOnChange: false,
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Input
        id="email"
        title="Enter your email address"
        value={formik.values.email}
        onChange={formik.handleChange}
        errorMessage={formik?.errors?.email}
      />
      <Button text="Send password reset email" />
    </Form>
  );
}

export default ForgotPassword;
