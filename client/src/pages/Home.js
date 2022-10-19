import React from "react";
import Heading from "../components/Headings/Heading";
import Navigation from "../components/Buttons/Navigation";
import Nav from "../components/Navigation/Nav";
import Modals from "../components/Modal/Modals";
import MainMenuModalContent from "../components/Modal/MainMenuModalContent";
import Avatar from "../components/Graphics/Avatar";
import Canvas from "../utils/Canvas";

import "../assets/css/Nav.css";
import "../assets/css/Home.css";

function Home() {
  return (
    <>
      <Canvas>
        <div id="home">
          <div id="top">
            <Modals modalContent={<MainMenuModalContent />} />
          </div>
          <Heading h="h2" title="Home" />
          <Avatar />
          <Navigation title="Battle!" destination="battle" />
          <div id="navbar">
            <Nav></Nav>
          </div>
        </div>
      </Canvas>
    </>
  );
}

export default Home;
