import React from "react";
import Heading from "../components/Headings/Heading";
import MainMenuModalContent from "../components/Modal/MainMenuModalContent";
import Modals from "../components/Modal/Modals";
import Nav from "../components/Navigation/Nav";

function Profile() {
  return (
    <div>
      <Modals modalContent={<MainMenuModalContent />} />
      <Heading h="h2" title="Profile" />
      <Nav />
    </div>
  );
}

export default Profile;
