import * as React from "react";
import FullName from "./FullName";
import Passport from "./Passport";
import Field from "./Field";
import IdCode from "./IdCode";
import {useEffect, useState} from "react";
import LivingState from "./LivingState";
import PhoneNumber from "./PhoneNumber";
import GeneralInformation from "./GeneralInformation";
import {clearParent, saveValue} from "../utils/utils";

export default function Form(){

    const[isAdult, setIsAdult] = useState(false);

    useEffect(() => {
      saveValue('is_adult', isAdult);
      if (isAdult) clearParent();
    })

    return (
        <main className='form'>
            <legend className='block-heading'><span className="number">1</span> Загальна інформація </legend>

            <div className='block'>
                <GeneralInformation/>
                <div className='field'>
                    <input type="checkbox" className="checkbox block" onChange={() => setIsAdult(!isAdult)}/> Є 18 років
                </div>
            </div>

            <legend className='block-heading'><span className="number">2</span> Дані про вступника </legend>

            <FullName isParent={false} />
            <Passport isParent={false} />
            <LivingState isParent={false}/>
            <IdCode isParent={false} />
            <PhoneNumber isParent={false}/>

            <div className='block'>
                <Field label="Електронна пошта" token="email" mistakeMessage="Перевір наявність @"
                       onChange={(value) => {return !value || value.includes("@")} } isField={false}
                       isParent={false}/>
            </div>
            { !isAdult &&
                <div>
                    <legend className='block-heading'><span className="number">3</span> Дані про законного представника </legend>
                    <FullName isParent={true}/>
                    <Passport isParent={true} />
                    <LivingState isParent={true}/>
                    <IdCode isParent={true} />
                    <PhoneNumber isParent={true}/>
                    <div className='block'>
                        <Field label="Електронна пошта" token="email" mistakeMessage="Перевір наявність @"
                               onChange={(value) => {return !value || value.includes("@")}} isField={false}
                               isParent={true}/>
                    </div>
                </div>
            }
        </main>
    )
}
