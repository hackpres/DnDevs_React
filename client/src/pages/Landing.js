import React from "react";
import Navigation from "../components/Buttons/Navigation";
import Modals from "../components/Modal/Modals";
import SupportModalContent from "../components/Modal/SupportModalContent";
import afterOpenModal from "../utils/openModal";
import "../assets/css/Landing.css";
import Canvas from "../utils/Canvas";

function Landing() {
  return (
    <>
      <Canvas>
        <div id="landing">
          <div id="logo"></div>
          <div id="terminal">
            <div id="links">
              <Navigation title="login>" destination="login" />
              <Navigation title="signup>" destination="signup" />
            </div>
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
