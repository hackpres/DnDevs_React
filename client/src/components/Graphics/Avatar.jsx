import React from 'react'
import '../../assets/css/Avatar.css'
import styled from 'styled-components';
import { useState } from 'react';
import avatarImg from '../../assets/sprites/user/warrioridle.png';

// const AvatarTile = styled.div`
//   height: 100px;
//   width: 100px;
//   border: solid 2px rgb(255, 0, 0);
//   transform-origin: top-left;
      
//   .styledAvatar {
//     scale: 2.5;
//     margin-left: 170%;
//     margin-top: 20%;
//     transform: translate(-45px)
//   }
// `;

function Avatar() {
  return (
    <div id="avatarContainer">
      <img id="avatar" src={avatarImg} />
    </div>
  )
}


export default Avatar