import React from 'react';
import { Container } from './styles';

interface Props {
    refProp: any;
};

const Contact = (props: Props): React.ReactElement => {
    const { refProp } = props;
    return (
        <Container ref={refProp}>
            <form name="contact" data-netlify='true'>
                <p>
                    <label>Name <input type="text" name="name" /></label>
                </p>
                <p>
                    <label>Email <input type="email" name="email" /></label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
        </Container>
    )
};

export default Contact;