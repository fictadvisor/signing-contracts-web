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
    //TODO toggle buttons css
    return (
        <div className='field'>
            <p className='label'>  {props.label} </p>
            {radioButtons}
        </div>
    );

}