import React, { useRef, useEffect } from 'react';
import { default as TypedJs } from 'typed.js';
import { Item } from './styles';

interface Props {
    content: string[]
}

const Typed = (props: Props):React.ReactElement => {
    const { content } = props;
    const el = useRef<any>(null);
	const typed = useRef<any>(null);

    useEffect(() => {
        const options = {
            strings: content,
            typeSpeed: 80,
            backSpeed: 30,
            loop: true,
            startDelay: 2000,
            smartBackspace: false
        };
        
        typed.current = new TypedJs(el.current, options);
        
        return () => {
          typed.current.destroy();
        }
    }, [content]);

    return (
        <>
            <div className="type-wrap">
                <Item ref={el} />
            </div>
        </>
    )
};

export default Typed;