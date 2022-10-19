import React from 'react';
import Heading from '../Headings/Heading';
import styled from 'styled-components';
import background from '../../assets/img/blankterminal.png';
import Text from '../Template/Text';

const CardsParent = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto auto .25rem auto;
  width: fit-content;
  height:fit-content;
`;
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  text-align: center;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 1.5rem;
  color: #999;
`;

function CodeCard(props) {
  return (
    <>
      <CardsParent {...props} style={props.parentStyle}>
        <CardContainer style={props.deckStyle}>
          <Heading h="h3" title={props.title} />
        <Text content={props.description} />
          {/* <Text content={props.snippet} />
        <Text content={props.shopDescription} /> */}
        </CardContainer>
      </CardsParent>
    </>

  )
}

export default CodeCard