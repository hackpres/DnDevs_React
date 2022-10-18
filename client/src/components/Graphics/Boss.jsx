import React from 'react'
import '../../assets/css/Boss.css'
import styled from 'styled-components';
import { useState } from 'react';
import bossImg from '../../assets/sprites/bosses/demonidle.png';

function Boss() {
    return (
      <div id="bossContainer">
        <img id="boss" src={bossImg} />
      </div>
    )
  }
  
  
  export default Boss