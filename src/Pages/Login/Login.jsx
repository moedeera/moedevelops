import { useContext, useEffect, useState } from "react";
import { LoginForm } from "../Content/LoginForm";
import { SiteContext } from "../../Context/Context";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const { user } = useContext(SiteContext);

  useEffect(() => {
    if (user) {
      navigate("/admin");
      // return;
    }
  }, [user, navigate]);

  return (
    <div className="page-container">
      <LoginForm redirectTo={"/admin"} />
    </div>
  );
};
