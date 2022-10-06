import React from "react";
import Navigation from "../components/Buttons/Navigation";
import Nav from "../components/Navigation/Nav";

function Home() {
  return (
    <>
      <Navigation title="Battle" destination="battle" />
      <Nav></Nav>
    </>
  );
}

export default Home;
