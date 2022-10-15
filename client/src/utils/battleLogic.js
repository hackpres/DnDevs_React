import { QUERY_CARDS } from './queries';
import { useQuery } from '@apollo/client';
import { useState } from 'react';
import CodeCard from '../components/Graphics/CodeCard';

export default function StartBattle() {
    const { loading, error, data } = useQuery(QUERY_CARDS);
    
    if (loading) return `Loading...`;
    if (error) return `Error! ${error.message}`;

    const [cardDeck, setCardDeck] = useState([]);

    function addCards() {
        data.me.savedCards.map((card) => (
            cardDeck.push(card)
        ))
    }
    addCards();
    console.log(cardDeck.sort(() => Math.random() - .5));
    return cardDeck;

    // function shuffleDeck() {
    //     cardDeck.sort(() => Math.random() - .5);
    // }
};

export function Draw3(array) {
    let sortedDeck = array.sort(() => Math.random() - .5);
    let drawn = sortedDeck.slice(0, 3);

    return (
        <>
            <CodeCard title={drawn[0].name} description={drawn[0].description} snippet={drawn[0].codeSnippet} shopDescription={drawn[0].shopDescription} />
            <CodeCard title={drawn[1].name} description={drawn[1].description} snippet={drawn[1].codeSnippet} shopDescription={drawn[1].shopDescription} />
            <CodeCard title={drawn[2].name} description={drawn[2].description} snippet={drawn[2].codeSnippet} shopDescription={drawn[2].shopDescription} />
        </>
    )
    console.log(drawn);
}
