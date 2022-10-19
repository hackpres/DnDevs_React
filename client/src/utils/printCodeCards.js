import { QUERY_CARDS } from './queries';
import { useQuery } from '@apollo/client';
import CodeCard from '../components/Graphics/CodeCard';
import '../assets/css/Snippets.css';

const deckContainer = {
    position: 'relative',
    overflow: 'scroll',
    display: 'flex',
    justifyContent: 'center',
    width: '90%',
    height: '80vh',
};
export default function CodeCards() {
    const { loading, error, data } = useQuery(QUERY_CARDS);

    if (loading) return `Loading...`;
    if (error) return `Error! ${error.message}`;
    const cardStyle = {
        display: 'block',
    };
    return (
        <>
            <div style={deckContainer}>
                <div id="terminal">
                    {data.me.savedCards.map((card, key) => (
                        <CodeCard key={key} style={cardStyle} title={card.name} description={card.description} snippet={card.codeSnippet} shopDescription={card.shopDescription} />
                    ))}
                    {console.log(data)}
                </div>
            </div>
            
        </>
    )
};