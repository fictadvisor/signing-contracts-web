import {useEffect, useState} from "react";
import {saveValue} from "../utils/utils";

interface Props{
    options: string[];
    token: string;
    label: string;
}

export default function ToggleButton(props: Props){

    const [value, setValue] = useState(props.options[0]);

    useEffect(() => {
        saveValue(props.token, value);
    });

    function handleChange(event){
        setValue(event.target.value)
    }

    const radioButtons = props.options.map((elem) => {
        return(
            <span className='toggle-button'>
                <input type='radio' id={elem} name={props.token} value={elem} onChange={handleChange} checked={value === elem}/>
                <label htmlFor={elem}> {elem} </label>
            </span>
        );
    });

    return (
        <div className='field'>
            <p className='label'>  {props.label} </p>
            <div className='toggle-buttons'>
                {radioButtons}
            </div>
        </div>
    );

}