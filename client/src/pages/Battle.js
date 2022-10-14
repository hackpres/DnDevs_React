import Action from '../components/Buttons/Action';
import Modals from '../components/Modal/Modals';
import MainMenuModalContent from '../components/Modal/MainMenuModalContent';
import '../assets/css/Battle.css';
import styled from 'styled-components';
import background from '../assets/img/blankterminal.png';
import Avatar from '../components/Graphics/Avatar';
import Healthbar from '../components/Graphics/Healthbar';

const BattleLog = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  background-image: url(${background});
  background-size: contain;
  background-repeat: no-repeat;
  width: 60vw;
  height: 25vw;
  margin: 20vw .5rem auto auto;
  padding: 1.5rem;
  color: #999;
  opacity: .8;
`;

function Battle() {

  return (
      <div id="battle">
        <div>
          <Modals modalContent={<MainMenuModalContent />} />
          <BattleLog>
            {/* {function to print log text} */}
          </BattleLog>
          <Avatar />
          <Avatar />
          <Healthbar />
          <Healthbar />
          <Action label="Select Card" />
          <Action label="Play Card" />
        </div>
      </div>
  )
}

export default Battle