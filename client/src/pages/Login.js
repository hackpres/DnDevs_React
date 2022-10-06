import React from "react";
import Heading from "../components/Headings/Heading";
import { Formik, Form } from "formik";
import Input from "../components/Template/Input";
import Navigation from "../components/Buttons/Navigation";

function Login() {
  const validateUsername = () => {};
  const validatePassword = () => {};

  return (
    <>
      <Heading h="h2" title="Login" />
      <Formik>
        <Form>
          <Input title="username" validate={validateUsername}></Input>
          <Input title="password" validate={validatePassword}></Input>
        </Form>
      </Formik>
      <Navigation title="Submit" destination="home" />
    </>
  );
}

export default Login;
