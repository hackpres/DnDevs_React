import React from 'react';
import Navigation from '../components/Buttons/Navigation';
import Modals from '../components/Modal/Modals';
import SupportModalContent from '../components/Modal/SupportModalContent';
import afterOpenModal from '../utils/openModal';

function Landing() {
  return (
    <>
      <Navigation title="Login" destination="login" />
      <Navigation title="Signup" destination="signup" />
      <Modals label="Support" afterOpen={afterOpenModal()} modalContent={<SupportModalContent />} />
    </>
  )
}

export default Landing