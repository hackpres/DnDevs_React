import React from "react";
import Heading from "../components/Headings/Heading";
import MainMenuModalContent from "../components/Modal/MainMenuModalContent";
import Modals from "../components/Modal/Modals";
import Nav from "../components/Navigation/Nav";
import printCodeCards from '../utils/printCodeCards';

function Code() {
  return (
    <div>
      <Modals modalContent={<MainMenuModalContent />} />
      <Heading h="h2" title="Code Snippets" />
      {printCodeCards()}
      <Nav />
    </div>
  );
}

export default Code;
