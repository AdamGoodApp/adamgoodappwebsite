import React from 'react';
import { Container } from './styles';

interface Props {
    refProp: any;
};

const Projects = (props: Props): React.ReactElement => {
    const { refProp } = props;
    return <Container ref={refProp}>Projects</Container>;
};

export default Projects;