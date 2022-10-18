import Action from '../components/Buttons/Action';
import Modals from '../components/Modal/Modals';
import MainMenuModalContent from '../components/Modal/MainMenuModalContent';
import '../assets/css/Battle.css';
import styled from 'styled-components';
import background from '../assets/img/blankterminal.png';
import Avatar from '../components/Graphics/Avatar';
import Boss from '../components/Graphics/Boss';
import Healthbar from '../components/Graphics/Healthbar';
import { useEffect, useState } from 'react';
import { QUERY_CARDS } from '../utils/queries';
import { useQuery } from '@apollo/client';
import randNum from '../utils/randomNum';
import RenderCard from '../utils/RenderCard';
import BattleCard from '../components/Graphics/BattleCard';
import playCard from '../utils/playCard';

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
const Play = styled.button`
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: black;
  font-size: 1.25rem;
  color: white;
  padding: .5rem 1.25rem;
  border-radius: .25rem;
`;
const battleCardStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

function Battle() {
  const [playerHP, setPlayerHP] = useState(100);
  const [bossHP, setBossHP] = useState(100);
  const [cardIndex, setCardIndex] = useState();
  const [cards, setCards] = useState([]);
  const { data } = useQuery(QUERY_CARDS);

  useEffect(() => {
    console.log(data);
    if (!cards.length && data) {
      let cardIndexes = [];
      for (let index = 0; index < 3; index++) {
        cardIndexes.push(randNum(data.me.savedCards.length, cardIndexes));
      }
      setCards(cardIndexes);
      console.log(cards)
    }
    console.log(cardIndex);
  }, [data, cardIndex]);

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
            <Boss />
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

        <BattleCard >
          {
            cards.length && data ?
              cards.map((index, key) => {
                return <RenderCard
                  key={key}
                  selected={index === cardIndex ? true : false}
                  onClick={() => setCardIndex(index)}
                  deck={data.me.savedCards}
                  index={index} />
              }) :
              null
          }
          {cardIndex >= 0 ?
            <div style={battleCardStyle}>
              <Play
                onClick={() => {
                  let cardEffects = (playCard(data.me.savedCards[cardIndex], bossHP, playerHP));
                  setBossHP(cardEffects.bossHealth);
                  setPlayerHP(cardEffects.playerHealth);
                }}>
                Commit Code
              </Play>
            </div> : null
          }

        </BattleCard>
      </div>
    </div>
  )
}

export default Battle