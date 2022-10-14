import React from 'react';
import CodeCard from './CodeCard';
import Text from '../Template/Text';

function BattleCard(props) {
  return (
    <>
      <CodeCard h='h3' title={props.name}>
        <Text content={props.content} />
      </CodeCard>
    </>
  )
}

export default BattleCard