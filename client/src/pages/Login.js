import React from "react";
import Heading from "../components/Headings/Heading";
import { Formik, Field, Form } from "formik";
// import Input from "../components/Template/Input";
import Navigation from "../components/Buttons/Navigation";
import Modals from "../components/Modal/Modals";
import SupportModalContent from "../components/Modal/SupportModalContent";
import signupSchema from "../utils/signupSchema";
import { Link } from "react-router-dom";
import "../assets/css/Login.css";

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
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(values);
              }}
            >
              <div>
                <Field
                  type="text"
                  id="username"
                  className="username formField"
                  name="username"
                  placeholder="username"
                />
                {errors.username && touched.username
                  ? console.log(errors.username)
                  : null}
              </div>
              <div>
                <Field
                  type="password"
                  id="password"
                  className="password formField"
                  name="password"
                  placeholder="password"
                />
                {errors.password && touched.password
                  ? console.log(errors.password)
                  : null}
              </div>
              <Link to="/home">
                <button id="stylesubmit" type="submit">
                  submit
                </button>
              </Link>
            </Form>
          )}
        </Formik>
        <Modals label="support" modalContent={<SupportModalContent />} />
      </div>
    </div>
  );
}

export default Login;
