import React from "react";
import Heading from "../components/Headings/Heading";
import MainMenuModalContent from "../components/Modal/MainMenuModalContent";
import Modals from "../components/Modal/Modals";
import Nav from "../components/Navigation/Nav";
import Avatar from "../components/Graphics/Avatar";
import "../assets/css/Profile.css";
import { useQuery, useMutation } from "@apollo/client";
import styled, { keyframes } from "styled-components";
import { QUERY_PROFILE } from "../utils/queries";
import PlayerSprite from "../assets/sprites/user/warrioridle.png";
// import "../assets/css/Nav.css";
import Canvas from "../utils/Canvas";
const AnimationPlayer = keyframes`
100% {background-position: -800px}
`;
const Player = styled.div`
  height: 200px;
  width: 200px;
  background: url("${PlayerSprite}") left center;
  background-repeat: no-repeat;
  background-size: cover;
  animation: ${AnimationPlayer} 0.6s steps(4) infinite;
`;
function Profile() {
  const { data } = useQuery(QUERY_PROFILE);

  console.log(data);
  return (
    <>
      <Canvas>
        <div id="profile">
          <div id="top">
            <Modals modalContent={<MainMenuModalContent />} />
          </div>
          <Heading h="h2" title="Profile" />
          <h2>{data.me.username}</h2>
          <h2>Wins: {data.me.wins}</h2>
          <h2>Losses: {data.me.losses}</h2>
          <Player />
          <br></br>
          <Nav />
        </div>
      </Canvas>
    </>
  );
}

export default Profile;
