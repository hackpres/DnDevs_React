import React, { useState } from 'react';
import Modal from 'react-modal';
import Menu from '../Buttons/Menu';
import CloseMenu from '../Buttons/CloseMenu';
import styled from 'styled-components';
import '../../assets/css/Modal.css'

export const ListItem = styled.li`
padding: 0.5em
`;

Modal.setAppElement('#root')

function Modals(props) {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  };
  function closeModal() {
    setIsOpen(false);
  };

  return (
    <>
      <Menu label={props.label} openModal={openModal} />
      <Modal
        className='modal'
        portalClassName='modalStyle'
        isOpen={modalIsOpen}
        afterOpen={props.afterOpen}
        onRequestClose={closeModal}
      >
        <div className='modalContentWrapper'>
          {props.modalContent}
          <CloseMenu label="exit" closeModal={closeModal} />
        </div>
      </Modal>
    </>
  )
}

export default Modals