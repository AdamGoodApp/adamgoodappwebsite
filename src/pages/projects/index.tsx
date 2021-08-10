import React from 'react';
import { Container, Project, ItemTop, ItemBottom, Video } from './styles';
import Golvideo from '../../assets/videos/gameoflife.webm';
import Sim from '../../assets/videos/tokyo.mp4';
import adzOS from '../../assets/images/adzOS.png';
import githubDark from '../../assets/images/github-dark.png';
import githubLight from '../../assets/images/github-light.png';
import Yomi from '../../assets/images/mobile.png';

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
                    <p style={{fontSize: 16, color:"rgb(64,200,224)"}}>#rust #webassembly #javascript</p>
                    <a href='https://github.com/AdamGoodApp/wasm-game-of-adam' target="_blank" rel="noreferrer"><img src={githubLight} alt='logo'/></a>
                </ItemTop>
                <ItemBottom>
                <Video playsInline autoPlay muted loop>
                    <source src={Golvideo} type="video/webm" />
                </Video>
                </ItemBottom>
            </Project>
            <Project style={{background: "#fbfbfd"}}>
                <ItemTop>
                    <h2>Adz OS</h2>
                    <p>Operating system written in Rust</p>
                    <p style={{fontSize: 16, color:"rgb(64,200,224)"}}>#rust</p>
                    <a href='https://github.com/AdamGoodApp/adzOS' target="_blank" rel="noreferrer"><img src={githubDark} alt='logo'/></a>
                </ItemTop>
                <ItemBottom>
                    <img src={adzOS} alt='adzOS logo' />
                </ItemBottom>
            </Project>
            <Project style={{background: "rgb(250, 52, 84)"}}>
                <ItemTop style={{color: '#FFFFFF'}}>
                    <h2>Flood Simulation</h2>
                    <p>Simulation of world wide flooding <br/>based on rising sea levels.</p>
                    <p style={{fontSize: 16, color:"rgb(64,200,224)"}}>#python #mapbox #DigitalElevationModel</p>
                    <a href='https://github.com/AdamGoodApp/Flood-sim' target="_blank" rel="noreferrer"><img src={githubLight} alt='logo'/></a>
                </ItemTop>
                <ItemBottom>
                    <Video playsInline autoPlay muted loop>
                        <source src={Sim} type="video/mp4" />
                    </Video>
                </ItemBottom>
            </Project>
            <Project style={{background: "#fbfbfd"}}>
                <ItemTop>
                    <h2>Yomi</h2>
                    <p>Manga reader app</p>
                    <p style={{fontSize: 16, color:"rgb(64,200,224)"}}>#javascript #typescript #ios #android</p>
                    <a href='https://yomireader.netlify.app' target="_blank" rel="noreferrer"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPAU25wof8Zbvp4FnwH0VrlGFP1lSki1vJ-Q&usqp=CAU" alt='logo'/></a>
                </ItemTop>
                <ItemBottom>
                    <img src={Yomi} alt='yomi logo' style={{width: "100%"}}/>
                </ItemBottom>
            </Project>
        </Container>
    )
};

export default Projects;