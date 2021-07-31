import React from 'react';
import Typed from '../../components/typed';
import { Container, IFrame, Title } from './styles';

const Home = (): React.ReactElement => {
    const typedContent = [
        '<strong>Loading ^200.^200.^200.</strong> ^1000\nWeb Applications ^1000\nGames ^1000 \n3D Graphics ^1000\nMobile Applications'
      ];

    return (
        <Container>
            <IFrame src='https://relaxed-mcclintock-ed1158.netlify.app/' frameBorder='0' />
            <Title>
                <h1>Adam Rais</h1>
                <Typed content={typedContent} />
            </Title>
        </Container>
    );
};

export default Home;