import React, {useRef} from "react";

export const Focus = () => {

    const inputEl = useRef(null);
    const inputElTwo = useRef(null);
    const inputElThree = useRef(null);
    const inputElFour = useRef(null);


    const onButtonClick = () => {
        // `current` указывает на смонтированный элемент `input`
        inputEl.current.focus();
    };

    const onKeyPressHandler = (e, ref) => {
        if (e.charCode === 13) {
            ref.current.focus();
        }
    };


    return (
        <>
            <input ref={inputEl} type="text" onKeyPress={(e) => onKeyPressHandler(e, inputElTwo)}/>
            <input ref={inputElTwo} type="text" onKeyPress={(e) => onKeyPressHandler(e, inputElThree)}/>
            <input ref={inputElThree} type="text" onKeyPress={(e) => onKeyPressHandler(e, inputElFour)}/>
            <input ref={inputElFour} type="text" onKeyPress={(e) => onKeyPressHandler(e, inputEl)}/>
            <button onClick={onButtonClick}>Установить фокус на поле ввода</button>
        </>
    );
}
