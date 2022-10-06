import React from "react";
import Heading from "../components/Headings/Heading";
import Navigation from "../components/Buttons/Navigation";
import Nav from "../components/Navigation/Nav";

function Home() {
  return (
    <>
      <Heading h="h2" title="Home" />
      <Navigation title="Battle" destination="battle" />
      <Nav></Nav>
    </>
  );
}

export default Home;
