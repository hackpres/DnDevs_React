import React from 'react';
import Navigation from '../components/Buttons/Navigation';
import Modals from '../components/Modal/Modals';
import SupportModalContent from '../components/Modal/SupportModalContent';
import afterOpenModal from '../utils/openModal';
import '../assets/css/Landing.css';
import styled from 'styled-components';

const Canvas = styled.div`
  @media (min-width: 430px) {
    
  }
`;

function Landing() {
  return (
    <>
    <div id="landing">
    <div id="logo"></div>
      <div id="terminal">
        <Navigation title="login>" destination="login" />
        <Navigation title="signup>" destination="signup" />
        <Modals label="support>" afterOpen={afterOpenModal()} modalContent={<SupportModalContent />} id="support"/>
      </div>
    </div>
    </>
  )
}

export default Landing