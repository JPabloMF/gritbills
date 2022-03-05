import Tab from "../../components/tab";

import ForgotPassword from "./forgotpassword";
import SignIn from "./signin";
import SignUp from "./signup";

const tabs = [
  { name: "Sign in", component: <SignIn /> },
  { name: "Sign up", component: <SignUp /> },
  { name: "Forgot password?", component: <ForgotPassword /> },
];

function Login() {
  return <Tab tabs={tabs} />;
}

export default Login;
