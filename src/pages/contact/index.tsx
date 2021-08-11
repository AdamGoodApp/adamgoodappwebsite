import React from 'react';
import { Container } from './styles';
import Feeler from '../../assets/videos/feeler-high.webm';
import githubLight from '../../assets/images/github-light.png';
import email from '../../assets/images/email.png';
import linked from '../../assets/images/in.png';

interface Props {
    refProp: any;
};

const Contact = (props: Props): React.ReactElement => {
    const { refProp } = props;
    return (
        <Container ref={refProp} >
           <video playsInline autoPlay muted loop id="bgvid">
                <source src={Feeler} type="video/webm" />
            </video>

            <div>
                <a href='https://github.com/AdamGoodApp' target="_blank" rel="noreferrer">
                    <img src={githubLight} alt='logo'/>
                </a>
                <a href='https://www.linkedin.com/in/adamrais/' target="_blank" rel="noreferrer">
                    <img src={linked} alt='logo'/>
                </a>
                <a href = "mailto:adam@adamgoodapp.com?subject=👋">
                    <img src={email} alt='logo'/>
                </a>
            </div>
        </Container>
    )
};

export default Contact;