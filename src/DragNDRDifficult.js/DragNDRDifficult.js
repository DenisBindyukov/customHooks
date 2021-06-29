import React, {useState} from 'react';
import style from './DragNDRDifficult.module.css';


export const DragNDRDifficult = () => {

    const [boards, setBoards] = useState([{
        id: 1, title: 'done',
        item: [{id: 1, title: 'Go to the shop'}, {id: 2, title: 'Go to the home'}, {id: 3, title: 'Go to the slead'}]
    },
        {
            id: 2, title: 'find',
            item: [{id: 1, title: 'bread'}, {id: 2, title: 'a bog'}, {id: 3, title: 'paste'}]
        },
        {
            id: 3, title: 'ready',
            item: [{id: 1, title: 'I was in school'}, {id: 2, title: 'I visited my brother'}, {
                id: 3,
                title: 'I was in the party'
            }]
        }])


    function dragLeaveHandler(e) {
        e.target.style.boxShadow = 'none'
    }

    function dragStartHandler(e) {

    }

    function dragEndHandler(e) {
        e.target.style.boxShadow = 'none'
    }

    function dragOverHandler(e, board, item) {
        e.preventDefault();
        if (e.target.className == stylItem) {
            e.target.style.boxShadow = '0 4px 3px gray'
        }

    }

    function dropHandler(e) {
        e.preventDefault()
        e.target.style.boxShadow = 'none'
    }

    const stylItem = style.item;

    return (
        <>
            {boards.map(board =>
                <div className={style.board} key={board.id}>
                    <div className={style.title}>{board.title}</div>
                    {board.item.map(item =>
                        <div className={style.item} key={item.id}
                             onDragStart={(e) => dragStartHandler(e)}
                             onDragLeave={(e) => dragLeaveHandler(e)}
                             onDragEnd={(e) => dragEndHandler(e)}
                             onDragOver={(e) => dragOverHandler(e, board, item)}
                             onDrop={(e) => dropHandler(e, board, item)}
                             draggable={true}>{item.title}</div>)}
                </div>)}

        </>
    );
}


{/*{boards.map( board =>*/
}
{/*<div className={'board'} key={board.id}>*/
}
{/*    <div className={'board__title'}>{board.title}</div>*/
}
{/*    {board.item.map(item =>*/
}
{/*    <div className={'item'} key={item.id}>{item.title}</div>)}*/
}
{/*</div>)}*/
}


// КАРУСЕЛь
// const images = [
//     {
//         original: 'https://picsum.photos/id/1018/1000/600/',
//         thumbnail: 'https://picsum.photos/id/1018/250/150/',
//     },
//     {
//         original: 'https://picsum.photos/id/1015/1000/600/',
//         thumbnail: 'https://picsum.photos/id/1015/250/150/',
//     },
//     {
//         original: 'https://picsum.photos/id/1019/1000/600/',
//         thumbnail: 'https://picsum.photos/id/1019/250/150/',
//     },
// ];
//
// class MyGallery extends React.Component {
//     render() {
//         return <ImageGallery items={images} />;
//     }
// }
