import React from 'react';
import { Container, Project, ItemTop, ItemBottom, Video } from './styles';
import Golvideo from '../../assets/videos/gameoflife.webm';

interface Props {
    refProp: any;
};

const Projects = (props: Props): React.ReactElement => {
    const { refProp } = props;
    return (
        <Container ref={refProp}>
            <Project style={{background: "#000000"}}>
                <ItemTop style={{color: '#FFFFFF'}}>
                    <h2>Game Of Adam</h2>
                    <p>A Rust and WebAssembly <br/> implementation of Game of life.</p>
                    <p>Go to</p>
                </ItemTop>
                <ItemBottom>
                <Video playsInline autoPlay muted loop>
                    <source src={Golvideo} type="video/webm" />
                </Video>
                </ItemBottom>
            </Project>
            <Project style={{background: "#fbfbfd"}}>
                <ItemTop>
                    <h2>Title</h2>
                    <p>This project does this and that, its very good</p>
                    <p>Go to</p>
                </ItemTop>
                <ItemBottom>
                </ItemBottom>
            </Project>
            <Project style={{background: "rgb(102, 212, 207)"}}>
                <ItemTop style={{color: '#FFFFFF'}}>
                    <h2>Title</h2>
                    <p>This project does this and that, its very good</p>
                    <p>Go to</p>
                </ItemTop>
                <ItemBottom>
                </ItemBottom>
            </Project>
            <Project style={{background: "#fbfbfd"}}>
                <ItemTop>
                    <h2>Title</h2>
                    <p>This project does this and that, its very good</p>
                    <p>Go to</p>
                </ItemTop>
                <ItemBottom>
                </ItemBottom>
            </Project>
        </Container>
    )
};

export default Projects;