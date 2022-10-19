import React from "react";
import Heading from "../components/Headings/Heading";
import Navigation from "../components/Buttons/Navigation";
import Nav from "../components/Navigation/Nav";
import Modals from "../components/Modal/Modals";
import MainMenuModalContent from "../components/Modal/MainMenuModalContent";
import Avatar from "../components/Graphics/Avatar";
import Canvas from "../utils/Canvas";
import styled from "styled-components";

import "../assets/css/Nav.css";
import "../assets/css/Home.css";
import { Link } from "react-router-dom";

const BattleButtonContainer = styled.div`
border: solid 2px rgba(255, 255, 255, 0.603);
border-radius: 2px;
align-content: middle;
color: white;
`
const BattleButton = styled.div`
color: white;
background-color: rgba(54, 48, 83, 0.822);
padding: 7px;
`

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
          
          <BattleButtonContainer>
            <Link to="/battle">
              <BattleButton>Battle!</BattleButton>
            </Link>
          {/* <Navigation title="Battle!" destination="battle" /> */}
          </BattleButtonContainer>
          
          <div id="navbar">
            <Nav></Nav>
          </div>
        </div>
      </Canvas>
    </>
  );
}

export default Home;
