import React, { useState } from "react";
import Home from "./Home";
import { redirect } from "react-router-dom";
import Heading from "../components/Headings/Heading";
import { useFormik } from 'formik';
import Modals from '../components/Modal/Modals';
import SupportModalContent from "../components/Modal/SupportModalContent";
import signupSchema from "../utils/signupSchema";
import { Link } from "react-router-dom";
import "../assets/css/Signup.css";

//imports needed for adding user to database
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const Signup = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    username: '',
    password: '',
  });

  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
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
      redirect('/home');
    } catch (e) {
      console.error(e);
    }

  };

  return (
    <>
      <div id='signup'>
        <div id='logo'></div>
        <div id='terminal'>
          <Heading id='styletitle' h="h1" title='signup' />
          {/* {
            isSubmitted ?
            redirect('/home')
            : */}
            <form onSubmit={handleSignUpSubmit}>
            <div>
              <input
                className="username form-input"
                placeholder="username"
                id='username'
                name='username'
                type='text'
                value={formState.username}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="password"
                id="password"
                className="password form-input"
                name="password"
                placeholder="*******"
                value={formState.password}
                onChange={handleChange}
              />
            </div>
            <button id='stylesubmit'
              type='submit'>submit</button>
          </form>
          {/* } */}
        </div>
      </div>
    </>
  )
}

export default Signup;