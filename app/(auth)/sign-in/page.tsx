import AuthForm from "@/app/components/AuthForm";
import React from "react";

const SignIn = ({email, password}:signInProps) => {


  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type='sign-in' />
    </section>
  );
};

export default SignIn;
