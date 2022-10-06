import Heading from '../Headings/Heading';
import styled from 'styled-components';
import Modals from './Modals';

const ListItem = styled.li`

`;

const SupportModalContent = () => {
    return (
        <>
            <Heading h='h2' title='Support' />
            <ul>
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

export default SupportModalContent;