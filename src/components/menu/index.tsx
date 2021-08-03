import React, { useState } from 'react';
import scrollToComponent from 'react-scroll-to-component';
import { Ul } from './styles';

interface Props {
    homeRef: any;
    projectsRef: any;
    contactRef: any;
}

const Menu = (props: Props): React.ReactElement => {
    const { homeRef, projectsRef, contactRef } = props;
    const [prevTarget, setTarget] = useState<any>();

    const onClick = ({target}: any): void => {        
        prevTarget && prevTarget.classList.remove("active");
        setTarget(target);        
        target.classList.add("active");

        switch (target.dataset.label) {
            case 'home':
                scrollToComponent(homeRef.current);
                break;
            case 'projects':
                scrollToComponent(projectsRef.current);
                break;
            case 'contact':
                scrollToComponent(contactRef.current);
                break;
        };
    };

    return <>
        <Ul>
            <li onClick={onClick} data-label='home'>Home</li>
            <li onClick={onClick} data-label='projects'>Projects</li>
            <li onClick={onClick} data-label='contact'>Contact</li>
        </Ul>
    </>;
};

export default Menu;