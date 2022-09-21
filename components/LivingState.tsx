import * as React from "react";
import {useState} from "react";
import Field from "./Field";
import Dropdown from "./Dropdown";
import {LETTERS, REGIONS, saveValue} from "../utils/utils";


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
        <div className='block'>
            <label>
                <input id={props.isParent ? '' : 'is_regional_center'} type="checkbox" checked={isRegionalCenter} className="checkbox"
                       onChange={() => {
                         setIsRegionalCenter(!isRegionalCenter);
                         saveValue((props.isParent ? 'parent_' : '') + 'region', '')
                       }}/> Проживаю в Києві або обласному центрі
            </label>

            {!isRegionalCenter &&
                <Dropdown options={REGIONS}
                          label={'Область ' + (props.isParent ? 'законного представника' : 'вступника')}
                          token={(props.isParent ? 'parent_' : '') + 'region'}/>
            }
            <Field
                label={'Населений пункт'}
                token={'settlement'}
                mistakeMessage='Перевір, щоб були наявні тільки українськи літери'
                onChange={checkSettlement} isField={true}
                isParent={props.isParent}
            />
            <Field
                label={'Вулиця, дім, квартира'}
                token={'address'}
                mistakeMessage=''
                onChange={() => {return true}} isField={true}
                isParent={props.isParent}
            />
            <Field
                label={'Поштовий індекс'}
                token={'index'}
                mistakeMessage= 'Перевір, щоб були наявні тільки 5 цифр'
                onChange={checkIndex} isField={false}
                isParent={props.isParent}
            />
        </div>
    );
}