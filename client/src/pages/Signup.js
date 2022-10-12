import React, { useState } from "react";
import Heading from "../components/Headings/Heading";
import { Formik, Form } from "formik";
import Input from "../components/Template/Input";
import Navigation from "../components/Buttons/Navigation";
import Modals from "../components/Modal/Modals";
import SupportModalContent from "../components/Modal/SupportModalContent";
import signupSchema from "../utils/signupSchema";
import { Link } from "react-router-dom";
import '../assets/css/Signup.css';

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

function Signup() {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });

  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { username, value } = event.target;

    setFormState({
      ...formState,
      [username]: value,
    });
  };

  const handleSignUpSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  // const handleSubmit = (values) => {
  //   console.log(values);
  // };

  return (
    <>
      <div id="logo"></div>
      <div id="terminal">
        <Heading id="styletitle" title="Signup" />
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validationSchema={signupSchema}
          onSubmit={handleSignUpSubmit}
        >
          {({ values, errors, touched }) => (
            <Form>
              <Input
                title="username"
                type="text"
                value={formState.username}
                placeholder="Your Username"
                onChange={handleChange}
              ></Input>
              {errors.username && touched.username
                ? console.log(errors.username)
                : null}
              <Input
                title="password"
                type="password"
                placeholder="******"
                value={formState.password}
                onChange={handleChange}
              ></Input>
              {errors.password && touched.password
                ? console.log(errors.password)
                : null}
              <Link to="/creation">
                <button id="stylesubmit" type="submit">submit</button>
              </Link>
            </Form>
          )}
        </Formik>
        {/* <Navigation title="Submit" destination="creation" /> */}

        <Modals label="support" modalContent={<SupportModalContent />} />
      </div>

    </>
  );
}

export default Signup;
