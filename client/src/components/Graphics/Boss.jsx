import React from 'react'
import '../../assets/css/Boss.css'
import styled from 'styled-components';
import { useState } from 'react';
import bossImg from '../../assets/sprites/bosses/demonidle.png';
import { printIntrospectionSchema } from 'graphql';

function Boss(props) {
    return (
      <div id="bossContainer">
        
        <img id="boss" src={props.img} />
      </div>
    )
  }
  
  
  export default Boss