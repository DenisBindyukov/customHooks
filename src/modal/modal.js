import React, {useState} from 'react';
import style from './modal.module.css'

export const Wrap = () => {
    const [modalActive, setModalActive] = useState(false);

    return (
        <div className={'app'}>
            <main>
                <button className={'open-btn'} onClick={() => setModalActive(true)}>Open modal window</button>
                <p>Here you can find activities to practise your reading skills. Reading will help you to improve
                    your </p>
                <p>Here you can find activities to practise your reading skills. Reading will help you to improve
                    your </p>
                <p>Here you can find activities to practise your reading skills. Reading will help you to improve
                    your </p>
                <p>Here you can find activities to practise your reading skills. Reading will help you to improve
                    your </p>
                <p>Here you can find activities to practise your reading skills. Reading will help you to improve
                    your </p>
                <p>Here you can find activities to practise your reading skills. Reading will help you to improve
                    your </p>
                <p>Here you can find activities to practise your reading skills. Reading will help you to improve
                    your </p>
                <p>Here you can find activities to practise your reading skills. Reading will help you to improve
                    your </p>
                <p>Here you can find activities to practise your reading skills. Reading will help you to improve
                    your </p>
            </main>
            {/*{modalActive && <Modal active={modalActive} setActive={setModalActive}>*/}
            {/*    Психи́ческое расстро́йство (мента́льное расстро́йство, психи́ческое заболева́ние; в некоторых*/}
            {/*    авторитетных источниках, в частности в МКБ-10, утверждается, что это не вполне синонимы[2][3]) — в*/}
            {/*    широком смысле состояние психики, отличное от нормального, здорового. Есть более частное значение этого*/}
            {/*    термина в таких областях, как юриспруденция, психиатрия и психология[⇨].*/}
            {/*</Modal>}*/}

            {modalActive && <Modal active={modalActive} setActive={setModalActive}>
                <form>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <button>send</button>
                </form>
            </Modal>}
        </div>
    );
}


 const Modal = ({active, setActive, children}) => {

    return (
            <div className={active ? `${style.modal} ${style.active}` : `${style.active}`} onClick={() => setActive(false)}>
            <div className={style.modal__content} onClick={ e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}


