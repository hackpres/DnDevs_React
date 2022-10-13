import React from "react";
import Heading from "../components/Headings/Heading";
import { Formik, Form } from "formik";
import Input from "../components/Template/Input";
import Navigation from "../components/Buttons/Navigation";
import Modals from "../components/Modal/Modals";
import SupportModalContent from "../components/Modal/SupportModalContent";
import signupSchema from "../utils/signupSchema";
import { Link } from "react-router-dom";
import '../assets/css/Login.css';

function Login() {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <>
    <div id="login">
    <div id="logo"></div>
      <div id="terminal">
      <Heading id="styletitle" title="login" />
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validationSchema={signupSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched }) => (
            <Form>
              <Input title="username" value={values.username}></Input>
              {errors.username && touched.username
                ? console.log(errors.username)
                : null}
              <Input
                title="password"
                type="password"
                value={values.password}
              ></Input>
              {errors.password && touched.password
                ? console.log(errors.password)
                : null}
              <Link to="/home">
                <button id="stylesubmit" type="submit">submit</button>
              </Link>
            </Form>
          )}
        </Formik>
        <Modals label="support" modalContent={<SupportModalContent />} />
      </div>
    </div>
      

    </>
  );
}

export default Login;
