import React from 'react';
import { Container, IFrame } from './styles';

const Home = (): React.ReactElement => {
    return (
        <Container>
            <IFrame src='https://relaxed-mcclintock-ed1158.netlify.app/' frameBorder='0' />
        </Container>
    );
};

export default Home;