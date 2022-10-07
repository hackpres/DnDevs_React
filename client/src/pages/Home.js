import React from "react";
import Heading from "../components/Headings/Heading";
import Navigation from "../components/Buttons/Navigation";
import Nav from "../components/Navigation/Nav";
import Modals from "../components/Modal/Modals";
import MainMenuModalContent from "../components/Modal/MainMenuModalContent";

function Home() {
  return (
    <>
      <Modals modalContent={<MainMenuModalContent />} />
      <Heading h="h2" title="Home" />
      <Navigation title="Battle" destination="battle" />
      <Nav></Nav>
    </>
  );
}

export default Home;
