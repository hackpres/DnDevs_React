import { QUERY_CARDS } from './queries';
import { useQuery } from '@apollo/client';
import CodeCard from '../components/Graphics/CodeCard';

export default function CodeCards() {
    const { loading, error, data } = useQuery(QUERY_CARDS);
    
    if (loading) return `Loading...`;
    if (error) return `Error! ${error.message}`;

    return (
        <>
            {data.users[0].savedCards.map((card) => (
                <CodeCard title={card.name} />
            ))}
            {console.log(data)}
        </>
    )
};