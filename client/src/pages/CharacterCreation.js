import React, { useState } from "react";
import Heading from "../components/Headings/Heading";
import { Formik, Form } from "formik";
import Input from "../components/Template/Input";
import Text from "../components/Template/Text";
import Navigation from "../components/Buttons/Navigation";
import Modals from "../components/Modal/Modals";
import MainMenuModalContent from "../components/Modal/MainMenuModalContent";

//imports needed for updating character gender
import { useMutation, useQuery } from "@apollo/client";
import { ADD_GENDER } from "../utils/mutations";
import { QUERY_ME } from "../utils/queries";
import Auth from "../utils/auth";


function CharacterCreation() {
  const [gender, setGender] = useState("");

  const { loading, error, data } = useQuery(QUERY_ME);
  const [addGender] = useMutation(ADD_GENDER);
  const handleChange = (event) => {
    const { name, value } = event.target;

    setGender(value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      await addGender({
        variables: {
          gender: gender,
          userId: data.me._id,
        },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Modals modalContent={<MainMenuModalContent />} />
      <Heading title="charName" />

      <form onSubmit={handleSubmit}>
        <div>
          <input
            name="gender"
            type="radio"
            title="Male"
            value="male"
            onChange={handleChange}
          ></input>
          Male
          <input
            name="gender"
            type="radio"
            title="Female"
            value="female"
            onChange={handleChange}
          ></input>
          Female
        </div>
        <div></div>

        {/* <Formik>
        <Form>
          <Input title="character name" validate={validateName}></Input>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Input type="radio" title="Male"></Input>
              Male
            </label>
            <label>
              <Input type="radio" title="Female"></Input>
              Female
            </label>
          </div>
        </Form>
      </Formik> */}

        {/* <Heading title="Attributes" />
      <ul>
        <li>
          <Text content="Hiiiiiiiiii feed me now." />
        </li>
        <li>
          <Text content="Jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed fat baby cat best buddy little guy chew master's slippers." />
        </li>
        <li>
          <Text content="Nyaa nyaa reaches under door into adjacent room for stand in doorway, unwilling to chose whether to stay in or go out slap the dog because cats rule meow" />
        </li>
      </ul> */}
        {/* <Navigation title="Create" destination="home" /> */}
        <button type="submit">Create</button>
      </form>
    </>
  );
}

export default CharacterCreation;
