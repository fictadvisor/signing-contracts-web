import {useEffect, useState} from "react";
import {saveValue} from "../utils/utils";

interface Props{
    options: string[],
    token: string,
    label: string
}

export default function Dropdown(props: Props){

    const [value, setValue] = useState('');

    const options = props.options.map((value) => {
        return <option value={value}>{value}</option>;
    })

    useEffect(() => {
        saveValue(props.token, value);
    });

    return (
        <div className='field'>
            <p className='label'>{props.label}</p>
            <select onChange={(event) => setValue(event.target.value)}>
                <option disabled selected hidden>Оберіть область</option>
                {options}
            </select>
        </div>
    );
}