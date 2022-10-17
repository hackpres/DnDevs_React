import BattleCard from '../components/Graphics/BattleCard';

export default function BattleCards(props) {

    return (
        <>
            <BattleCard title={props[index].name} description={props[index].description} snippet={props[index].codeSnippet} shopDescription={props[index].shopDescription} />
        </>
    )
}