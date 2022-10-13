import React from "react";
import Heading from "../components/Headings/Heading";
import Navigation from "../components/Buttons/Navigation";
import Nav from "../components/Navigation/Nav";
import Modals from "../components/Modal/Modals";
import MainMenuModalContent from "../components/Modal/MainMenuModalContent";
import '../assets/css/Home.css';

function Home() {
  return (
    <>
      <div id="home">
        <Modals modalContent={<MainMenuModalContent />} />
        <Heading h="h2" title="Home" />
        <Navigation title="Battle" destination="battle" />
        <Nav></Nav>
      </div>
    </>
  );
}

export default Home;
