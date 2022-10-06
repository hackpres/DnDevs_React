import React from "react";
import Heading from "../components/Headings/Heading";
import { Formik, Form } from "formik";
import Input from "../components/Template/Input";
import Text from "../components/Template/Text";
import Navigation from "../components/Buttons/Navigation";

function CharacterCreation() {
  const validateName = () => {};
  return (
    <>
      <Heading title="charName" />
      <Formik>
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
      </Formik>

      <Heading title="Attributes" />
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
      </ul>
      <Navigation title="Create" destination="home" />
    </>
  );
}

export default CharacterCreation;
