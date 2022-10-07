import React from "react";
import { Formik, Form } from "formik";
import Input from "../components/Template/Input";
import Navigation from "../components/Buttons/Navigation";
import Modals from "../components/Modal/Modals";
import SupportModalContent from "../components/Modal/SupportModalContent";

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
      <Modals label="Support" modalContent={<SupportModalContent />} />
    </>
  );
}

export default Signup;
