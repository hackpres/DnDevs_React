import Heading from '../Headings/Heading';
import Modals, { ListItem } from './Modals';
import { useState } from 'react';
import styled from 'styled-components';
import randNum from '../../utils/randomNum';

const DevName = styled.h4`
    font-family: sans-serif;
    font-size: 4vw;
    margin: 5vw auto 0 6vw;
    color: white;
`;
const DevQuip = styled.p`
    font-family: sans-serif;
    font-size: 3vw;
    margin: 2vw auto 0 8vw;
    color: #999;
`;
const QuipNote = styled.p`
    font-family: sans-serif;
    font-size: 3vw;
    margin: 2vw auto 0 8vw;
    color: #e39;
`;
const nextStyle = {
    fontSize: '2vw',
    margin: '3vw auto',
    backgroundColor: '#777',
    padding: '.5rem 1.5rem',
    borderRadius: '1vw',
}
const developers = [
    "Taylor",
    "Hacker",
    "Sophia",
    "Josh",
    "Mace"
]

const jokes = [
    {
        joke: `What do you call a web Developer that likes English?`,
        answer: `A pro grammar`
    },
    {
        joke: `What do white girls and web developers have in common?`,
        answer: `nobody ever compliments our back end`
    },
    {
        joke: `How many software developers does it take to screw in a light bulb?`,
        answer: `Zero, thats a hardware issue.`
    },
    {
        joke: `If the Government was like web development how would you describe its issues?`,
        answer: `Too much middleware and a major lack of API functionality.`
    },
    {
        joke: `Some people are like a software update`,
        answer: `When I see them I think ” Not now "`
    },
    {
        joke: `What is the shortest joke a developer can tell?`,
        answer: `I'll be ready soon.`
    }
];
const SupportModalContent = () => {
    const [titleIndex, setTitleIndex] = useState();
    const [contentIndex, setJokeIndex] = useState();
    const devIndex = randNum(developers.length, [])
    const jokeIndex = randNum(jokes.length, [])

    function changeState(state) {
        const indexPos = randNum(developers.length, []);
        if (state === indexPos) {
            changeState()
        }
        return indexPos;
    };
    return (
        <>
            <Heading h='h2' title='Support' />
            <ul>
                <ListItem>
                    <Modals 
                        label="Devs Got Jokes" 
                        modalContent={
                            <>
                                <Heading title='HAHA' />
                                <DevName>{developers[randNum(devIndex, [])]}</DevName>
                                <DevQuip>{jokes[jokeIndex].joke}</DevQuip>
                                <QuipNote>{jokes[jokeIndex].answer}</QuipNote>
                                <button
                                    style={nextStyle}
                                    onClick={() => {
                                        setTitleIndex(changeState([titleIndex]))
                                        setJokeIndex(changeState([contentIndex]))
                                    }}
                                >
                                    Next
                                </button>
                            </>
                            
                        } 
                    />
                </ListItem>
                <ListItem>
                    <Modals label="Report A Bug" modalContent={<Heading title='Bug Form' />} />
                </ListItem>
            </ul>
        </>

    )
}

export default SupportModalContent;