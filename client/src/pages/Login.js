import React, {useState} from "react";
import Heading from "../components/Headings/Heading";
import { Formik, Field, Form } from "formik";
// import Input from "../components/Template/Input";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import Navigation from "../components/Buttons/Navigation";
import Modals from "../components/Modal/Modals";
import SupportModalContent from "../components/Modal/SupportModalContent";

import { Link } from "react-router-dom";
import "../assets/css/Login.css";

const Login = (props) => {
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // login form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
      document.location.replace("/home");
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      username: '',
      password: '',
    });
  };


  return (
    <>
        <div id= 'login'>
            <div id='logo'></div>
            <div id='terminal'>
                <Heading id='styletitle' title='login'/>
                <form onSubmit={handleFormSubmit}>
                    <div>
                    <input 
                    className = "username form-input"
                    placeholder="username"
                    id='username'
                    name='username'
                    type='text'
                    value = {formState.username}
                    onChange = {handleChange}
                    />
                    </div>
                    <div>    
                    <input
                    type="password"
                    id="password"
                    className="password form-input"
                    name="password"
                    placeholder="*******"
                    value = {formState.password}
                    onChange = {handleChange}
                    />
                    </div>
                    
                        <button id='stylesubmit'
                        type='submit'>submit></button>

                    
                </form>





            </div>
        </div>
    
    
    
    </>
  )
}
export default Login;
