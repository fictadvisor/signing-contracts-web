import {useEffect, useState} from "react";
import {saveValue} from "../utils/utils";
import * as React from "react";

interface Props{
    isParent: boolean
}

export default function PhoneNumber (props: Props) {

    const [isForeign, setIsForeign] = useState(false);
    const [countryCode, setCountryCode] = useState('+380');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isWrong, setIsWrong] = useState(false);

    function handleCheck(){
        setCountryCode(isForeign ? '+380' : '');
        setIsForeign(!isForeign);
    }

    function checkValue(code: string, number: string): boolean{
        if (!number) return true;
        if (code[0] !== '+') return false;
        if (code.length < 2 || code.length > 4) return false;
        if (number.length !== 9) return false;
        if (code.slice(1).match(/^[0-9]+$/) === null) return false;
        return  number.match(/^[0-9]+$/) !== null;
    }

    function handleCodeChange(event){
        setCountryCode(event.target.value);
        setIsWrong(!checkValue(event.target.value, phoneNumber));
    }

    function handleNumberChange(event){
        setPhoneNumber(event.target.value);
        setIsWrong(!checkValue(countryCode, event.target.value));
    }


    useEffect(() => {
        saveValue("phone_number", countryCode+phoneNumber)
    });

    //TODO add isParent

    return (
        <div>
            <label>
                <input type="checkbox" checked={isForeign} className="checkbox"
                       onChange={handleCheck}/> Закордонний номер
            </label>

            <p className='label' > {'Номер телефону ' + (props.isParent ? 'законного представника' : 'вступника')}</p>

            <div>
                <input className="country-code" value={countryCode} disabled={!isForeign}
                        onChange={handleCodeChange}/>
                <input value={phoneNumber} className="phone-number"
                        onChange={handleNumberChange}/>
            </div>
            {isWrong && <p className="mistake-message"> Перевір чи правильно вказаний код країни і номер телефону!</p>}
        </div>
    );
}