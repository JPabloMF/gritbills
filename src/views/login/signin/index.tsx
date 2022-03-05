import Form from "../../../components/form";
import Input from "../../../components/input";
import Button from "../../../components/button";

function SignIn() {
  return (
    <Form onSubmit={() => {}}>
      <Input id="email" title="Email" onChange={() => {}} />
      <Input id="password" title="Password" onChange={() => {}} />
      <Button text="Sign In" />
    </Form>
  );
}

export default SignIn;
