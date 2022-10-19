import React from 'react';
import CodeCard from './CodeCard';
import Text from '../Template/Text';

function BattleCard({ style, children }) {
  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default BattleCard