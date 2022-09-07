import {useEffect, useState} from "react";
import {saveValue} from "../utils/utils";

interface Props{
    options: string[];
    token: string;
    label: string;
}

export default function ToggleButton(props: Props){

    const [value, setValue] = useState('');

    useEffect(() => {
        saveValue(props.token, value);
    });

    function handleChange(event){
        setValue(event.target.value)
    }

    const radioButtons = props.options.map((elem) => {
        return(
            <label>
                <input type='radio' name={props.token} value={elem} onChange={handleChange}/> {elem}
            </label>
        );
    });

    return (
        <div>
            <p>  {props.label} </p>
            {radioButtons}
        </div>
    );

}