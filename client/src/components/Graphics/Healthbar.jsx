import React from 'react';
import styled from 'styled-components';

const HealthbarContainer = styled.div`
  width: 40vw;
  height: 8vw;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: auto;
  background: black;
`;
const HPBar = styled.div`
  width: 38vw;
  height: 6vw;
  background: rebeccapurple;
`;
const HPCurrent = styled.div`
  height: 100%;
  background: red;
`;
const HPValue = styled.p`
  display: flex;
  align-items: center;
  text-align: left;
  height: 100%;
  margin: 0 auto 0 .25rem;
`;

function Healthbar(props) {

  return (
    <HealthbarContainer>
      <HPBar>
        <HPCurrent style={{ width: `${props.health}%` }}>
          <HPValue>
            {`${props.health}%`}
          </HPValue>
        </HPCurrent>
      </HPBar>
    </HealthbarContainer>
  )
}

export default Healthbar