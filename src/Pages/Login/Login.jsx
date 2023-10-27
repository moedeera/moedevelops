import { LoginForm } from "../Content/LoginForm";

export const Login = () => {
  return (
    <div className="page-container">
      <LoginForm redirectTo={"/admin"} />
    </div>
  );
};
