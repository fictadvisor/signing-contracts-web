import * as React from "react";
import FullName from "./FullName";
import Passport from "./Passport";
import Field from "./Field";
import IdCode from "./IdCode";
import {useState} from "react";
import LivingState from "./LivingState";
import PhoneNumber from "./PhoneNumber";
import GeneralInformation from "./GeneralInformation";

export default function Form(){

    const[isAdult, setIsAdult] = useState(false);

    return (
        <div>
            <GeneralInformation isParent={false}/>
            <hr/>
            <input type="checkbox" className="checkbox block" onChange={() => setIsAdult(!isAdult)}/> Є 18 років
            <FullName isParent={false} />
            <Passport isParent={false} />
            <LivingState isParent={false}/>
            <IdCode isParent={false} />
            <PhoneNumber isParent={false}/>
            <Field label="Електронна пошта вступника" token="email" mistakeMessage="Перевір наявність @"
                   onChange={(value) => {return !value || value.includes("@")} }/>
            { !isAdult &&
                <div>
                    <FullName isParent={true}/>
                    <Passport isParent={true} />
                    <LivingState isParent={true}/>
                    <IdCode isParent={true} />
                    <PhoneNumber isParent={true}/>
                    <Field label="Електронна пошта законого представника" token="parent_email" mistakeMessage="Перевір наявність @"
                           onChange={(value) => {return !value || value.includes("@")} }/>
                </div>
            }

        </div>
    )
}
