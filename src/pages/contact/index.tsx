import React from 'react';
import { Container } from './styles';

interface Props {
    refProp: any;
};

const Contact = (props: Props): React.ReactElement => {
    const { refProp } = props;
    return <Container ref={refProp}>Contact</Container>;
};

export default Contact;