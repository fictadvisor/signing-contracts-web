import * as React from "react";
import {downloadDocx} from "../utils/utils";
import Password from "../components/Password";
import {useState} from "react";

export default function Footer() {

    const [isClicked, setIsClicked] = useState(false);

    async function handleClick(isRight){
        if (isRight) await downloadDocx()
        setIsClicked(false);
    }

    return (
        <div>
            <div className='block'>
                <button className='submit-button' onClick={() => {setIsClicked(true)}}>Надіслати</button>
            </div>
            <Password isVisible={isClicked} onClick={handleClick} />
        </div>
    );
}