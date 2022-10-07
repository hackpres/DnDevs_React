import React from "react";
import Heading from "../components/Headings/Heading";
import MainMenuModalContent from "../components/Modal/MainMenuModalContent";
import Modals from "../components/Modal/Modals";
import Nav from "../components/Navigation/Nav";

function Shop() {
  return (
    <div>
      <Modals modalContent={<MainMenuModalContent />} />
      <Heading h="h2" title="Shop" />
      <Nav />
    </div>
  );
}

export default Shop;
