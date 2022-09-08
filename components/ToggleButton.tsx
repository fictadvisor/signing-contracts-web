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
            <span className='radio-button'>
                <input type='radio' id={elem} name={props.token} value={elem} onChange={handleChange} checked={value === elem}/>
                <label className='toggle-label' htmlFor={elem}> {elem} </label>
            </span>
        );
    });
    //TODO toggle buttons css
    return (
        <div className='field'>
            <p className='label'>  {props.label} </p>
            <div className='switch-toggle'>
                {radioButtons}
            </div>
        </div>
    );

}