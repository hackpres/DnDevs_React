import React, { useState } from 'react';
import Modal from 'react-modal';
import Menu from '../Buttons/Menu';
import CloseMenu from '../Buttons/CloseMenu';
import styled from 'styled-components';

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
        isOpen={modalIsOpen}
        onAfterOpen={props.afterOpen}
        onRequestClose={closeModal}
      >
        {props.modalContent}
        <CloseMenu label="exit" closeModal={closeModal} />
      </Modal>
    </>
  )
}

export default Modals