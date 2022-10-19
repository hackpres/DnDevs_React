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
import { ADD_WIN, ADD_LOSS } from "../utils/mutations";
import randNum from "../utils/randomNum";
import RenderCard from "../utils/RenderCard";
import BattleCard from "../components/Graphics/BattleCard";
import playCard from "../utils/playCard";
import Text from "../components/Template/Text";
import Typewriter from "typewriter-effect";
import playBoss from "../utils/playBoss";
import bossModifier from "../utils/bossModifier";
import cardBackground from "../assets/img/backgrounds/cardBackground.png";

import PlayerSprite from "../assets/sprites/user/warrioridle.png";
import PlayerDeath from "../assets/sprites/user/warriordeath.png";
import DemonSprite from "../assets/sprites/bosses/demon_idle.png";
import DemonDeath from "../assets/sprites/bosses/demon_death.png";
import FrostSprite from "../assets/sprites/bosses/frost_idle.png";
import FrostDeath from "../assets/sprites/bosses/frost_death.png";
import CyclopsSprite from "../assets/sprites/bosses/cyclops_idle.png";
import CyclopsDeath from "../assets/sprites/bosses/cyclops_death.png";

const AnimationPlayer = keyframes`
100% {background-position: -800px}
`;
const AnimationPlayerDeath = keyframes`
100% {background-position: -1600px }
`
const AnimationBoss = keyframes`
100% {background-position: -3240px}
`;
const AnimationBossDeath = keyframes`
100%{background-position: -8640px}
`;
const LogText = styled(Text)`
  padding: 0;
  margin: 0;
`;
const Player = styled.div`
  height: 200px;
  width: 200px;
  background: url("${PlayerSprite}") left center;
  background-repeat: no-repeat;
  background-size: cover;
  animation: ${AnimationPlayer} 0.6s steps(4) infinite;
`;
const PlayerDead = styled.div`
  height: 200px;
  width: 200px;
  background: url(${PlayerDeath}) left center;
  background-repeat: no-repeat;
  background-size: cover;
  animation: ${AnimationPlayerDeath} 1s steps(8) forwards;
`;
const Boss = styled.div`
  height: 300px;
  width: 540px;
  background: url(${DemonSprite}) left center;
  background-repeat: no-repeat;
  background-size: cover;
  animation: ${AnimationBoss} 0.9s steps(6) infinite;
`;
const BossDead = styled.div`
  height: 300px;
  width: 540px;
  background: url(${DemonDeath}) left center;
  background-repeat: no-repeat;
  background-size: cover;
  animation: ${AnimationBossDeath} 1s steps(16) forwards;
`;
const BattleLog = styled.div`
  display: flex;
  flex-direcion: column;
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
  line-height: 0.45rem;
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
  margin-bottom: 0.75rem;
`;
const cardHolder = {
  display: 'flex',
  justifyContent: 'space-around',
  overflow: 'hidden',
};
const deckCardStyle = {
  display: 'inline-flex',
  backgroundImage: `url(${cardBackground})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  margin: 0,
  overflow: 'hidden',
  width: '30vw',
  height: '47.85vw',
  margin: 'auto',
};
const cardTitle = {
  fontSize: '3.75vw',
  color: '#999',
  display: 'flex',
  justifyContent: 'center',
  marginTop: '2rem',
  width: '30vw',
  overflow: 'hidden',
};
const cardContent = {
  fontSize: '3.5vw',
  color: '#999',
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  margin: '3rem auto',
  width: '25vw',
  overflow: 'hidden',
};
const cardWrapper = {
  display: 'block',
  overflow: 'hidden',
};
const cardWrapperSelected = {
  display: 'block',
  overflow: 'hidden',
  border: 'solid 3px red',
  borderRadius: '1vw',
}
function Battle() {
  const [playerHP, setPlayerHP] = useState(100);
  const [bossHP, setBossHP] = useState(100);
  const [log, setLog] = useState([]);
  const [cardIndex, setCardIndex] = useState();
  const [cards, setCards] = useState([]);
  const { data } = useQuery(QUERY_BATTLE);
  const [addWin] = useMutation(ADD_WIN);
  const [addLoss] = useMutation(ADD_LOSS);
  const [bossIdle, setBossIdle] = useState(DemonSprite);
  const [bossDeath, setBossDeath] = useState(DemonDeath);
  const [level, setLevel] = useState(0);
  //add win to user profile
  const win = async () => {
    console.log(level)

    try {
      await addWin({
        variables: {
          wins: data.me.wins + 1,
          userId: data.me._id,
        },
      });
    } catch (e) {
      console.error(e);
    }
    //Final boss function
    switch (level) {
      case 0:
        //2nd Boss function
        
          setTimeout(() => {
          setBossHP(100);
          setBossIdle(FrostSprite);
          setBossDeath(FrostDeath);
          setLevel(1);
        }, 3000);
      break;
      case 1:
        setTimeout(() => {
          setBossHP(100);
          setBossIdle(CyclopsSprite);
          setBossDeath(CyclopsDeath);
          setLevel(2);
        }, 3000);
        break;
      default:
        break;
    }
  };
  //adds loss to user profile
  const loss = async () => {
    // console.log(data)
    setLevel(0);
    try {
      await addLoss({
        variables: {
          losses: data.me.losses + 1,
          userId: data.me._id,
        },
      });
    } catch (e) {
      console.error(e);
    }
  };

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
    if (bossHP <= 0) {
      setBossHP(0);
      win();
    }
    if (playerHP <= 0) {
      setPlayerHP(0);
      loss();
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

  const bossTurn = (bossData, playerLog, bossHealth, playerHealth) => {
    setTimeout(() => {
      let modifier = bossModifier();
      console.log(modifier);
      console.log(bossData);
      let bossEffect = playBoss(bossData, modifier, bossHealth, playerHealth);
      setBossHP(bossEffect.bossHealth);
      setPlayerHP(bossEffect.playerHealth);
      setLog([...log, playerLog, bossEffect.logContent]);
    }, 1500);
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
          {log.length >= 5 ? setLog(log.slice(1)) : ""}
          {log.length > 0 && log.length < 5
            ? log.map((text, key) => <LogText content={text} key={key} />)
            : ""}
        </BattleLog>
        <Row>
          <Col>{playerHP <= 0 ? <PlayerDead /> : <Player />}</Col>
          <Col>
            {bossHP <= 0 ? (
              <BossDead style={{ backgroundImage: `url(${bossDeath})` }} />
            ) : (
              <Boss style={{ backgroundImage: `url(${bossIdle})` }} />
            )}
          </Col>
          <button onClick = {()=> setBossHP(0)}>Kill Boss</button>
          <button onClick= {()=> setPlayerHP(0)}>Kill Player</button>
        </Row>
        <Row>
          <Col>
            <Healthbar health={playerHP} />
          </Col>
          <Col>
            <Healthbar health={bossHP} />
          </Col>
        </Row>

        <BattleCard style={cardHolder}>
          {cards.length && data
            ? cards.map((index, key) => {
                return (
                  <BattleCard
                  style={cardHolder}
                  key={key}
                >
                  <div 
                    style={deckCardStyle}
                    onClick={() => setCardIndex(index)}
                  >
                    <div 
                      style={index === cardIndex ? cardWrapperSelected : cardWrapper}
                    >
                      <h3 style={cardTitle}>
                        {data.me.savedCards[index].name}
                      </h3>
                      <p style={cardContent}>
                        {data.me.savedCards[index].shopDescription}
                      </p>
                    </div>
                  </div>
                </BattleCard>
                );
              })
            : null}
        </BattleCard>
        <BattleCard>
          {cardIndex >= 0 ? (
            <div style={battleCardStyle}>
              <Play
                style={{display: 'block'}}
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
                  bossTurn(data.bosses[level], cardEffects.logContent, cardEffects.bossHealth, cardEffects.playerHealth);
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
