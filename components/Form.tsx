import * as React from "react";
import FullName from "./FullName";
import Passport from "./Passport";
import Field from "./Field";
import IdCode from "./IdCode";
import {useState} from "react";

export default function Form(){

    const[isAdult, setIsAdult] = useState(false);

    return (
        <div>
            <input type="checkbox" className="checkbox" onChange={() => setIsAdult(!isAdult)}/> Є 18 років
            <FullName isParent={false} />
            <Passport isParent={false} />
            <IdCode isParent={false} />
            <Field label="Електронна пошта вступника" token="email" mistakeMessage="Перевір наявність @"
                   onChange={(value) => {return !value && value.includes("@")} }/>
            { !isAdult &&
                <div>
                    <FullName isParent={true}/>
                    <Passport isParent={true} />
                    <IdCode isParent={true} />
                </div>
            }
        </div>
    )
}
