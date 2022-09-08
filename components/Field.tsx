import * as React from "react";
import {saveValue} from "../utils/utils";
import {useEffect, useState} from "react";

interface Props {
  label: string,
  token: string,
  mistakeMessage: string,
  onChange: Function,
  isBlock: boolean
}

export default function Field (props: Props) {

  const [value, setValue] = useState('');
  const [isWrong, setIsWrong] = useState(false);

  function handleChange(event){
    setValue(event.target.value);
    setIsWrong(!props.onChange(event.target.value));
  }

  useEffect(() => {
    saveValue(props.token, value);
  });


  return (
      <div className={ props.isBlock ? 'field' : ''}>
        <p className="label">{props.label}</p>
        <input type='text' value={value} onChange={handleChange}/>
        {isWrong && <p className="mistake-message">{props.mistakeMessage}</p>}
      </div>
  )

}