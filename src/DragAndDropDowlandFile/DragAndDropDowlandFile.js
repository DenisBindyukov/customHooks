import React, {useState} from "react";
import style from './stylesForDNR.module.css'

export const DragAndDropDowlandFile = (props) => {
    const [drag, setDrag] = useState(false);

    function dragStartHandler(e) {
        e.preventDefault()
        setDrag(true)
    }

    function dragLeaveHandler(e) {
        e.preventDefault()
        setDrag(false)
    }

    function onDropHandler(e) {
        e.preventDefault();
        debugger
        const files = [...e.dataTransfer.files];
        console.log(files)
        setDrag(false)
    }

    return (
        <>
            {drag
                ? <div
                    onDragStart={ e => dragStartHandler(e)}
                    onDragLeave={e => dragLeaveHandler(e)}
                    onDragOver={e => dragStartHandler(e)}
                    onDrop={e => onDropHandler(e)}
                     className={style.wrap}>Отпустите файл, что бы загрузить их</div>
                : <div
                    onDragStart={ e => dragStartHandler(e)}
                    onDragLeave={e => dragLeaveHandler(e)}
                    onDragOver={e => dragStartHandler(e)}
                    >Перетащить файл, что бы загрузить их</div>}
        </>
    );

}