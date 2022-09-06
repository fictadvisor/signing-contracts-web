import {useEffect, useState} from "react";
import {saveValue} from "../utils/utils";

interface Props{
    options: string[],
    token: string,
    label: string
}

export default function Dropdown(props: Props){

    const [value, setValue] = useState('');

    const options = props.options.map((value, number) => {
        return <option value={value}>{value}</option>;
    })

    useEffect(() => {
        saveValue(props.token, value);
    });

    return (
        <div>
            <label>{props.label}</label>
            <select onChange={(event) => setValue(event.target.value)}>
                {options}
            </select>
        </div>
    );
}