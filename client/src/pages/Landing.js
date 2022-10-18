import React from "react";
import Navigation from "../components/Buttons/Navigation";
import Modals from "../components/Modal/Modals";
import SupportModalContent from "../components/Modal/SupportModalContent";
import afterOpenModal from "../utils/openModal";
import "../assets/css/Landing.css";
import styled from "styled-components";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

const Canvas = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.mobileS} {
    width: 100vw;
  }
  @media ${device.mobileM} {
    width: 100vw;
  }
  @media ${device.mobileL} {
    width: 100vw;
  }
  @media ${device.tablet} {
    width: 500px;
    padding-top: 10%;
    padding-bottom: 10%;
    margin: auto;
  }
  @media ${device.laptop} {
    width: 500px;
  }
  @media ${device.laptopL} {
    width: 500px;
  }
  @media ${device.desktop} {
    width: 500px;
  }
  @media ${device.desktopL} {
    width: 500px;
  }
`;

function Landing() {
  return (
    <>
      <Canvas>
        <div id="landing">
          <div id="logo"></div>
          <div id="terminal">
            <Navigation title="login>" destination="login" />
            <Navigation title="signup>" destination="signup" />
            <Modals
              label="support>"
              afterOpen={afterOpenModal()}
              modalContent={<SupportModalContent />}
              id="support"
            />
          </div>
        </div>
      </Canvas>
    </>
  );
}

export default Landing;
