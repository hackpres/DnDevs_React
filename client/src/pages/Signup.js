import React from "react";
import { Formik, Form } from "formik";
import Input from "../components/Template/Input";
import Navigation from "../components/Buttons/Navigation";

function Signup() {
  const validateUsername = () => {};
  const validatePassword = () => {};
  return (
    <>
      <Formik
        initialValues={{
          password: "",
          username: "",
        }}
      >
        <Form>
          <Input title="username" validate={validateUsername}></Input>
          <Input title="password" validate={validatePassword}></Input>
        </Form>
      </Formik>

      <Navigation title="Submit" destination="creation" />
    </>
  );
}

export default Signup;
