import * as React from "react";
import {useState} from "react";
import Field from "./Field";
import Dropdown from "./Dropdown";
import {LETTERS, REGIONS} from "../utils/utils";


interface Props{
    isParent: boolean
}

export default function LivingState (props: Props) {

    const [isRegionalCenter, setIsRegionalCenter] = useState(false);

    function checkSettlement(value: string): boolean {
        if (!value) return true;
        for (const char of value) {
            if (!LETTERS.some(letter => letter === char)) return false;
        }
        return true;
    }

    function checkIndex(value: string): boolean {
        if (!value) return true;
        if (value.length !== 5) return false;
        return value.match(/^[0-9]+$/) !== null;
    }

    return (
        <div>
            <label>
                <input type="checkbox" checked={isRegionalCenter} className="checkbox"
                       onChange={() => setIsRegionalCenter(!isRegionalCenter)}/> Проживаю в Києві або обласному центрі
            </label>

            {!isRegionalCenter &&
                <Dropdown options={REGIONS}
                          label={'Область ' + (props.isParent ? 'законного представника' : 'вступника')}
                          token={(props.isParent ? 'parent_' : '') + 'region'}/>
            }
            <Field
                label={'Населений пункт ' + (props.isParent ? 'законного представника' : 'вступника')}
                token={(props.isParent ? 'parent_' : '') + 'settlement'}
                mistakeMessage='Перевір, щоб були наявні тільки українськи літери'
                onChange={checkSettlement} isBlock={true}
            />
            <Field
                label={'Вулиця, дім, квартира ' + (props.isParent ? 'законного представника' : 'вступника') + " (за наявністю)"}
                token={(props.isParent ? 'parent_' : '') + 'address'}
                mistakeMessage=''
                onChange={() => {return true}} isBlock={true}
            />
            <Field
                label={'Поштовий індекс ' + (props.isParent ? 'законного представника' : 'вступника')}
                token={(props.isParent ? 'parent_' : '') + 'index'}
                mistakeMessage= 'Перевір, щоб були наявні тільки 5 цифр'
                onChange={checkIndex} isBlock={true}
            />
        </div>
    );
}