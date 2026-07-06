import { AuthLayout } from "../components/AuthLayout";
import { LoginForm } from "../components/LoginForm";

const LoginPage = () => {
  return (
    <AuthLayout
      title="Welcome back"
      description="Sign in to continue to Life OS."
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;