import React from "react";
import Heading from "../components/Headings/Heading";
import MainMenuModalContent from "../components/Modal/MainMenuModalContent";
import Modals from "../components/Modal/Modals";
import Nav from "../components/Navigation/Nav";
import Avatar from "../components/Graphics/Avatar";
import '../assets/css/Profile.css';
import '../assets/css/Nav.css';


function Profile() {
  return (
    <div id="profile">
      <div id="top">
        <Modals modalContent={<MainMenuModalContent />} />
        <Heading h="h2" title="Profile" />
      </div>
      <Avatar />
      <div id="navbar">
        <Nav />
      </div>
    </div>
  );
}

export default Profile;
