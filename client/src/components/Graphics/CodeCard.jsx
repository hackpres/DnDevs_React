import React from 'react';
import Heading from '../Headings/Heading';
import styled from 'styled-components';
import background from '../../assets/img/blankterminal.png'

const CardsParent = styled.div`
  display: grid;
  margin: auto auto .25rem auto;
  width: 60%;
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 1.5rem;
  color: #999;
`;

function CodeCard(props) {
  return (
    <CardsParent>
      <CardContainer>
        <Heading h="h3" title={props.title} />
      </CardContainer>
    </CardsParent>
  )
}

export default CodeCard