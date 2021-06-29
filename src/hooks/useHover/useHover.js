import React, {useEffect, useRef, useState} from "react";
import {useInput} from "../useInput/useInput";

export const useHover = (ref) => {
const [isHovering, setHovering] = useState(false);

const on = () => setHovering(true);
const off = () => setHovering(false);


useEffect(() => {
    if (!ref.current) {
        return
    }

const node = ref.current;

    node.addEventListener('mouseenter', on)
    node.addEventListener('mousemove' , on)
    node.addEventListener('mouseleave', off)

    return () => {
        node.removeEventListener('mouseenter', on)
        node.removeEventListener('mousemove', on)
        node.removeEventListener('mouseleave', off)
    }
}, []);

    return isHovering;
}

export const Hover = () => {
    const ref = useRef();
    const isHovering = useHover(ref);

    console.log(isHovering)


    return (
        <div ref={ref} style={{textAlign: 'center', width: 300, height: 300, background: isHovering ? 'red' : 'green'}  }>
            {isHovering ? <h2>Hello Denis</h2> :  <h2>Bye Denis</h2> }
        </div>
    );
}
