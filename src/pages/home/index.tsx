import React from 'react';
import Typed from '../../components/typed';
import { Container, IFrame, Title } from './styles';

interface Props {
    refProp: any;
};

const Home = (props: Props): React.ReactElement => {
    const { refProp } = props;

    const typedContent = [
        '<strong>Web/Mobile Applications ^1000\nGames ^1000 \n3D Graphics ^1000\nIOT'
      ];

    return (
        <Container ref={refProp}>
            <IFrame src='https://relaxed-mcclintock-ed1158.netlify.app/' frameBorder='0' />
            <Title>
                <h1>Adam Rais</h1>
                <Typed content={typedContent} />
            </Title>
        </Container>
    );
};

export default Home;