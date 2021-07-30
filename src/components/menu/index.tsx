import React, { useState } from 'react';
import { Ul } from './styles';

const Menu = (): React.ReactElement => {
    const [prevTarget, setTarget] = useState<any>();

    const onClick = ({target}: any): void => {
        prevTarget && prevTarget.classList.remove("active");
        setTarget(target);        
        target.classList.add("active");
    }

    return <>
        <Ul>
            <li onClick={onClick}>Home</li>
            <li onClick={onClick}>Projects</li>
            <li onClick={onClick}>Contact</li>
        </Ul>
    </>;
};

export default Menu;