import React from 'react';
import Modals, { ListItem } from './Modals';
import Heading from '../Headings/Heading';

function MainMenuModalContent() {
  return (
    <>
        <Heading h='h2' title='Settings' />
        <ul>
            <ListItem>
                <Modals label="Settings" modalContent={<Heading title='Settings Options' />} />
            </ListItem>
            <ListItem>
                <Modals label="Meet The Devs" modalContent={<Heading title='DevsInfo' />} />
            </ListItem>
            <ListItem>
                <Modals label="Report A Bug" modalContent={<Heading title='Bug Form' />} />
            </ListItem>
        </ul>
    </>
  )
}

export default MainMenuModalContent