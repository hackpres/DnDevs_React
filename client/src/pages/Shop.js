import React from "react";
import Heading from "../components/Headings/Heading";
import MainMenuModalContent from "../components/Modal/MainMenuModalContent";
import Modals from "../components/Modal/Modals";
import Nav from "../components/Navigation/Nav";
import Action from "../components/Buttons/Action";
import '../assets/css/Shop.css';
import '../assets/css/Nav.css';

function Shop() {
  return (
    <div id="shop">
      <Modals modalContent={<MainMenuModalContent />} />
      <Heading h="h2" title="Shop" />
      <div id="navbar">
        <Nav />
      </div>
      <Action label="Select Card" />
      <Action label="Buy Card" />
    </div>
  );
}

export default Shop;
