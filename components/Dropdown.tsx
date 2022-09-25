import React, {useEffect, useState} from "react";
import {checkValue, saveValue} from "../utils/utils";

interface Props{
    options: string[],
    values: string[],
    token: string,
    label: string,
    default: string,
}

export default function Dropdown(props: Props){

    const [value, setValue] = useState('');

    const options = props.options.map((value, index) => {
        return <option value={props.values[index]}>{value}</option>;
    })

    useEffect(() => {
        saveValue(props.token, value);
    });


    return (
        <div className='field'>
            <p className='label'>{props.label}</p>
            <select id={props.token} onChange={(event) => setValue(event.target.value)}>
                {options}
                <option disabled hidden value='default' >{props.default}</option>
            </select>
        </div>
    );
}