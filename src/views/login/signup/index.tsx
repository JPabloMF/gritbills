import Form from "../../../components/form";
import Input from "../../../components/input";
import Button from "../../../components/button";

function SignUp() {
  return (
    <Form onSubmit={() => {}}>
      <Input id="email" title="Email" onChange={() => {}} />
      <Input id="password" title="Password" onChange={() => {}} />
      <Input id="repeatPassword" title="Repeat password" onChange={() => {}} />
      <Button text="Sign Up" />
    </Form>
  );
}

export default SignUp;
