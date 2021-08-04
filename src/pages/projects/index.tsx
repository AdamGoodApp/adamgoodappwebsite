import React from 'react';
import { Container, Project, ItemTop } from './styles';

interface Props {
    refProp: any;
};

const Projects = (props: Props): React.ReactElement => {
    const { refProp } = props;
    return (
        <Container ref={refProp}>
            <Project style={{background: "#000000"}}>
                <ItemTop style={{color: '#FFFFFF'}}>
                    <h2>Title</h2>
                    <p>This project does this and that, its very good</p>
                    <p>Go to</p>
                </ItemTop>
            </Project>
            <Project style={{background: "#fbfbfd"}}>
                <ItemTop>
                    <h2>Title</h2>
                    <p>This project does this and that, its very good</p>
                    <p>Go to</p>
                </ItemTop>
            </Project>
            <Project style={{background: "rgb(102, 212, 207)"}}>
                <ItemTop style={{color: '#FFFFFF'}}>
                    <h2>Title</h2>
                    <p>This project does this and that, its very good</p>
                    <p>Go to</p>
                </ItemTop>
            </Project>
            <Project style={{background: "#fbfbfd"}}>
                <ItemTop>
                    <h2>Title</h2>
                    <p>This project does this and that, its very good</p>
                    <p>Go to</p>
                </ItemTop>
            </Project>
        </Container>
    )
};

export default Projects;