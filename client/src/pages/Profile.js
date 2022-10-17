import React from "react";
import Heading from "../components/Headings/Heading";
import MainMenuModalContent from "../components/Modal/MainMenuModalContent";
import Modals from "../components/Modal/Modals";
import Nav from "../components/Navigation/Nav";
import '../assets/css/Nav.css';
import '../assets/css/Profile.css';

function Profile() {
  return (
    <div id="profile">
      <Modals modalContent={<MainMenuModalContent />} />
      <Heading h="h3" title="Profile" />
      <div id="navbar">
        <Nav />
      </div>
    </div>
  );
}

export default Profile;
