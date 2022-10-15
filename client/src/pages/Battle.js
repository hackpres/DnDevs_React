import Action from '../components/Buttons/Action';
import Modals from '../components/Modal/Modals';
import MainMenuModalContent from '../components/Modal/MainMenuModalContent';
import '../assets/css/Battle.css';
import styled from 'styled-components';
import background from '../assets/img/blankterminal.png';
import Avatar from '../components/Graphics/Avatar';
import Healthbar from '../components/Graphics/Healthbar';
import { useEffect, useState } from 'react';
import { QUERY_CARDS } from '../utils/queries';
import { useQuery } from '@apollo/client';

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
const Row = styled.div`
  display: flex;
`;
const Col = styled.div`
  flex: 1;
`;
let cardsFromDB = [];
function Battle() {
  const [cardDeck, setCardDeck] = useState([]);
  const [playerHP, setPlayerHP] = useState(100);
  const [bossHP, setBossHP] = useState(100);

  function QueryCards() {
    const { loading, error, data } = useQuery(QUERY_CARDS);
    
    if (loading) return `Loading...`;
    if (error) return `Error! ${error.message}`;
    
    data.me.savedCards.map((card) => (
        cardsFromDB.push(card)
    ));
  }
  useEffect(() => {
      setCardDeck(cardsFromDB)
  }, []);
  QueryCards();
  console.log(cardDeck)

  return (
      <div id="battle">
        <div>
          <Modals modalContent={<MainMenuModalContent />} />
          <BattleLog>
            {/* {function to print log text} */}
            <p>Player hit Boss for 5 damage</p>
          </BattleLog>
          <Row>
            <Col>
              <Avatar />
            </Col>
            <Col>
              <Avatar />
            </Col>
          </Row>
          <Row>
            <Col>
              <Healthbar health={playerHP} />
            </Col>
            <Col>
              <Healthbar health={bossHP} />
            </Col>
          </Row>
          <Action label="Select Card" />
          <Action label="Play Card" />
        </div>
      </div>
  )
}

export default Battle