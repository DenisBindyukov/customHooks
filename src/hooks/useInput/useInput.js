import React, {useState} from 'react';

export const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const onChange = (e) => {
        setValue( e.currentTarget.value)
    }

    return {
        value, onChange
    }
}


export const Input = () => {
    const value = useInput('');
    const password = useInput('');


    return (
        <div style={{display: ' flex'}}>
            <input {...value} type="text" placeholder={'userName'}/>
            <input {...password} type={'text'} placeholder={'password'}/>
            <button onClick={() => console.log(value, password)}>add</button>
        </div>
    );
}
