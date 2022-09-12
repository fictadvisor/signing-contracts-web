import '../styles/styles.css'
import * as React from "react";
import Form from "../components/Form";
import {downloadDocx} from "../utils/utils";
import Password from "../components/Password";
import {useEffect, useState} from "react";

export default function Home() {

    const [isClicked, setIsClicked] = useState(false);

    async function handleClick(isRight){
        if (isRight) await downloadDocx()
        setIsClicked(false);
    }

  return (
    <div className="wrapper">
      <h1 className='block'> Інформація для договору про навчання </h1>
      <Form/>
      <div className='block'>
          <button className='submit-button' onClick={() => {setIsClicked(true)}}>Надіслати</button>
      </div>
      <Password isVisible={isClicked} onClick={handleClick} />
    </div>
);
}