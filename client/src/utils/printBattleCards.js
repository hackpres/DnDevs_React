import { QUERY_CARDS } from './queries';
import { useQuery } from '@apollo/client';
import BattleCard from '../components/Graphics/BattleCard';

export default function BattleCards() {
    const { loading, error, data } = useQuery(QUERY_CARDS);

    if (loading) return `Loading...`;
    if (error) return `Error! ${error.message}`;

    return (
        <>
            {data.me.savedCards.map((card) => (
                <BattleCard name={card.name} description={card.description} />
            ))}
            {console.log(data)}
        </>
    )
}