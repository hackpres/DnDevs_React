import React, { useState } from 'react';
import CodeCard from '../components/Graphics/CodeCard';
import Action from '../components/Buttons/Action';

export default function RenderCard({ deck, index, onClick, selected }) {

    const applyStyle = {
        border: "solid 3px red"
      }
    return (
        <>
            <CodeCard 
                style={selected ? applyStyle : null}
                onClick={onClick}
                title={deck[index].name} 
                description={deck[index].shopDescription}  
            />
        </>
    )
};
// snippet={props.deck[index].codeSnippet} shopDescription={props.deck[index].shopDescription}