import * as React from "react";
import Field from "./Field";
import {LETTERS, saveValue} from "../utils/utils";
import {useState} from "react";

interface Props {
  isParent: boolean,
}

export default function FullName(props: Props) {

    const[hasFathername, setHasFathername] = useState(true);
    const mistakeMessage = 'Перевір, щоб були наявні тільки українськи літери та велика літера на початку';

    function checkValue(value: string): boolean {
        if (!value) return true;
        if (value[0] !== value[0].toUpperCase()) return false;
        for (const char of value) {
            if (!LETTERS.some(letter => letter == char)) return false;
        }
        return true;
    }

    return (
        <div className='block'>
            <Field
                label={'Прізвище'}
                token={'last_name'}
                mistakeMessage={mistakeMessage}
                onChange={checkValue} isField={true}
                isParent={props.isParent}
            />
            <Field
                label={'Ім\'я '}
                token={'first_name'}
                mistakeMessage={mistakeMessage}
                onChange={checkValue} isField={true}
                isParent={props.isParent}
            />
            <div>
                <label>
                    <input type="checkbox" checked={!hasFathername} className="checkbox"
                        onChange={() => {
                          setHasFathername(!hasFathername)
                          saveValue((props.isParent ? 'parent_' : '') + 'father_name', '')
                        }}/> Немає по-батькові
                </label>
                {
                hasFathername &&
                <Field
                    label={'По-батькові'}
                    token={'father_name'}
                    mistakeMessage={mistakeMessage}
                    onChange={checkValue}
                    isField={false}
                    isParent={props.isParent}
                />
                }
            </div>
        </div>
    );
}