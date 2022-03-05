import Form from '../../../components/form';
import Input from '../../../components/input';
import Button from '../../../components/button';

function ForgotPassword() {
  return (
    <Form onSubmit={() => {}}>
      <Input id="email" title="Enter your email address" onChange={() => {}} />
      <Button text="Send password reset email" />
    </Form>
  );
}

export default ForgotPassword