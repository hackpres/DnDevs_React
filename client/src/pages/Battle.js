import Action from "../components/Buttons/Action";
import Modals from "../components/Modal/Modals";
import MainMenuModalContent from "../components/Modal/MainMenuModalContent";
import "../assets/css/Battle.css";
import styled, { keyframes } from "styled-components";
import background from "../assets/img/blankterminal.png";
import Avatar from "../components/Graphics/Avatar";
import Healthbar from "../components/Graphics/Healthbar";
import { useEffect, useState } from "react";
import { QUERY_BATTLE } from "../utils/queries";
import { useQuery, useMutation } from "@apollo/client";
import {ADD_WIN} from "../utils/mutations"
import randNum from "../utils/randomNum";
import RenderCard from "../utils/RenderCard";
import BattleCard from "../components/Graphics/BattleCard";
import playCard from "../utils/playCard";
import Text from "../components/Template/Text";
import Typewriter from "typewriter-effect";

import PlayerSprite from "../assets/sprites/user/warrioridle.png";
import PlayerDeath from "../assets/sprites/user/warriordeath.png";
import BossSprite from "../assets/sprites/bosses/demonidle.png";
import BossDeath from "../assets/sprites/bosses/demondeath.png";
const Animation = keyframes`
100% {background-position: -1000px}
`;
const AnimationBoss = keyframes`
100% {background-position: -1728px}
`
const AnimationBossDeath = keyframes `
100%{background-position: -6336px}
`;

const Player = styled.div`
  height: 200px;
  width: 200px;
  background: url('${PlayerSprite}') left center;
  background-repeat: no-repeat;
  background-size: cover;
  animation: ${Animation} 0.6s steps(5) infinite;
  
`;

const PlayerDead = styled.div`
  height: 200px;
  width: 200px;
  background: url(${PlayerDeath}) left center;
  background-repeat: no-repeat;
  background-size: cover;
  animation: ${Animation} 1s steps(5) forwards;
`;

const Boss = styled.div`
  height: 160px;
  width: 288px;
  background: url(${BossSprite})left center;
  background-repeat: no-repeat;
  background-size: cover;
  animation: ${AnimationBoss} 0.9s steps(6) infinite;
`;

const BossDead = styled.div`
height: 160px;
width: 288px;
  background: url(${BossDeath}) left center;
  background-repeat: no-repeat;
  background-size: cover;
  animation: ${AnimationBossDeath} 1s steps(22) forwards;
`;
const BattleLog = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  font-size: 8pt;
  text-align: center;
  background-image: url(${background});
  background-size: contain;
  background-repeat: no-repeat;
  width: 60vw;
  height: 25vw;
  margin: 20vw 0.5rem auto auto;
  padding: 1.5rem;
  color: #999;
  opacity: 0.8;
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
  padding: 0.5rem 1.25rem;
  border-radius: 0.25rem;
`;
const battleCardStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const LogTitle = styled.div`
  font-size: 1.1rem;

  text-align: center;
`;
function Battle() {
  const [playerHP, setPlayerHP] = useState(100);
  const [bossHP, setBossHP] = useState(100);
  const [log, setLog] = useState([]);
  const [cardIndex, setCardIndex] = useState();
  const [cards, setCards] = useState([]);
  const { data } = useQuery(QUERY_BATTLE);
  
  const [addWin] = useMutation(ADD_WIN);
  useEffect(() => {
    console.log(data);
   
    if (!cards.length && data) {
      let cardIndexes = [];
      for (let index = 0; index < 3; index++) {
        cardIndexes.push(randNum(data.me.savedCards.length, cardIndexes));
      }
      setCards(cardIndexes);
      console.log(cards);
    }
    console.log(cardIndex);
  }, [data, cardIndex]);

  //Health tracking useEffect
  useEffect(() => {
    if (bossHP < 0) {
      setBossHP(0);
      // addWin({
      //   variables:{
      //     userId: data.me._id,
      //     wins: data.me.wins + 1
      //   }
      // })
    }
    if (playerHP < 0) {
      setPlayerHP(0);
    }
    if (bossHP > 100) {
      setBossHP(100);
    }
    if (playerHP > 100) {
      setPlayerHP(100);
    }
  });
  const redrawCards = () => {
    let cardIndexes = [];
    for (let index = 0; index < 3; index++) {
      cardIndexes.push(randNum(data.me.savedCards.length, cardIndexes));
    }
    setCards(cardIndexes);
  };
  return (
    <div id="battle">
      <div>
        <Modals modalContent={<MainMenuModalContent />} />
        <BattleLog>
          <LogTitle>
            <Typewriter
              onInit={(title) => {
                title
                  .typeString("Prepare for battle!")
                  .pauseFor(2000)
                  .deleteAll(10)
                  .typeString("Choose your cards wisely")
                  .pauseFor(2000)
                  .deleteAll(10)
                  .typeString("Battle Log")
                  .start();
              }}
            />
          </LogTitle>
          {log.length >= 5
            ? log
                .shift()
                .map((text, key) => <Text content={text} key={key}></Text>)
            : ""}
          {log.length > 0 && log.length < 5
            ? log.map((text, key) => <Text content={text} key={key}></Text>)
            : ""}
        </BattleLog>
        <Row>
          <Col>{playerHP <= 0 ? <PlayerDead /> : <Player />}</Col>
          <Col>
            {bossHP <= 0 ? <BossDead/> : <Boss />}
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

        <BattleCard>
          {cards.length && data
            ? cards.map((index, key) => {
                return (
                  <RenderCard
                    key={key}
                    selected={index === cardIndex ? true : false}
                    onClick={() => setCardIndex(index)}
                    deck={data.me.savedCards}
                    index={index}
                  />
                );
              })
            : null}
          {cardIndex >= 0 ? (
            <div style={battleCardStyle}>
              <Play
                onClick={() => {
                  let cardEffects = playCard(
                    data.me.savedCards[cardIndex],
                    bossHP,
                    playerHP
                  );
                  setBossHP(cardEffects.bossHealth);
                  setPlayerHP(cardEffects.playerHealth);
                  setLog([...log, cardEffects.logContent]);
                  redrawCards();
                  console.log(log);
                }}
              >
                Commit Code
              </Play>
            </div>
          ) : null}
        </BattleCard>
      </div>
    </div>
  );
}

export default Battle;
