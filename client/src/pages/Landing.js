import React from 'react';
import Navigation from '../components/Buttons/Navigation';
import Modals from '../components/Modal/Modals';
import SupportModalContent from '../components/Modal/SupportModalContent';
import afterOpenModal from '../utils/openModal';
import '../assets/css/Landing.css';

function Landing() {
  return (
    <>
        <div id="terminal">
          <Navigation title="login" destination="login" />
          <Navigation title="signup" destination="signup" />
          <Modals label="support" afterOpen={afterOpenModal()} modalContent={<SupportModalContent />} />
        </div>
    </>
  )
}

export default Landing