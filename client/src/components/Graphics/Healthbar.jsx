import React from 'react';
import styled from 'styled-components';

function Healthbar(props) {
  const HealthbarContainer = styled.div`
  width: 40vw;
  height: 8vw;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
`;
const HPBar = styled.div`
  width: 38vw;
  height: 6vw;
  background: rebeccapurple;
`;
const HPCurrent= styled.div`
  width: ${props.health};
  height: 100%;
  background: red;
`;
  return (
    <HealthbarContainer>
      <HPBar>
        <HPCurrent />
      </HPBar>
    </HealthbarContainer>
  )
}

export default Healthbar