import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Ul } from './styles';

const Menu = (): React.ReactElement => {
    const [prevTarget, setTarget] = useState<any>();
    let history = useHistory();

    const onClick = ({target}: any): void => {        
        prevTarget && prevTarget.classList.remove("active");
        setTarget(target);        
        target.classList.add("active");
        console.log(`/${target.dataset.label}`);
        history.push(`/${target.dataset.label}`);
    }

    return <>
        <Ul>
            <li onClick={onClick} data-label=''>Home</li>
            <li onClick={onClick} data-label='projects'>Projects</li>
            <li onClick={onClick} data-label='contact'>Contact</li>
        </Ul>
    </>;
};

export default Menu;