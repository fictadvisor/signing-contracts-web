import Field from "./Field";
import * as React from "react";
import {useEffect, useRef, useState} from "react";
import {downloadDocx} from "../utils/utils";

interface Props{
    isVisible: boolean
    onClick: any
}

export default function Password(props: Props){

    const [value, setValue] = useState('');
    const [isRight, setIsRight] = useState(undefined);

    const passwordRef = useRef<HTMLInputElement>(null);

    function handleChange(event){
        setValue(event.target.value);
    }

    function handleClick(){
        const temp = value === '123';
        setIsRight(temp);
        if (!temp) setTimeout( () => {resetState()}, 3000);
        setTimeout( () => {props.onClick(temp)}, 3000);
    }

    function resetState(){
        setValue('');
        setIsRight(undefined);
    }

    useEffect(() => {
        if (passwordRef.current) {
            passwordRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    });

    let className: string;
    let label: string;

    switch (isRight){
        case undefined:
            className = 'label';
            label = 'Попросіть оператора ввести пароль';
            break;
        case true:
            className = 'label right-password';
            label = 'Успіх! Файл завантажується';
            break;
        case false:
            className = 'label wrong-password';
            label = 'Неправильний пароль!';
            break;

    }

    return props.isVisible ? (
        <div ref={passwordRef} className='password block'>
            <p className={className}>{label}</p>
            <input type='password' value={value} onChange={handleChange}/>
            <button className='password-button' onClick={handleClick} >Підтвердити</button>
        </div>
    ) : null ;
}