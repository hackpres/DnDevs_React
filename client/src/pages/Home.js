import React from "react";
import Heading from "../components/Headings/Heading";
import Navigation from "../components/Buttons/Navigation";
import Nav from "../components/Navigation/Nav";
import Modals from "../components/Modal/Modals";
import MainMenuModalContent from "../components/Modal/MainMenuModalContent";
import Avatar from "../components/Graphics/Avatar";
import '../assets/css/Home.css';
import '../assets/css/Nav.css';

function Home() {
  return (
    <>
      <div id="home">
        <div id="top">
          <Modals modalContent={<MainMenuModalContent />} />
          <Heading h="h2" title="Home" />
        </div>
        <Avatar />
        <Navigation title="Battle" destination="battle" />
        <div id="navbar">
          <Nav></Nav>
        </div>
      </div>
    </>
  );
}

export default Home;
