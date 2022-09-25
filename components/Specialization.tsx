import {useEffect, useState} from "react";
import {saveValue} from "../utils/utils";
import * as React from "react";

const programs121 = [
    'ОПП Інженерія програмного забезпечення інформаційних систем',
    `ОПП Інженерія програмного забезпечення комп'ютерних систем`,
    'ОНП Інженерія програмного забезпечення комп\'ютерних та інформаційних систем'];
const values121 = ['ОПП_ІПІ', 'ОПП_ОТ', 'ОНП'];

const programs123 = [
    'ОПП Комп\'ютерні системи та мережі',
    'ОНП Комп\'ютерні системи та мережі',
];
const values123 = ['ОПП', 'ОНП'];

const programs126 = [
    'ОПП Інтегровані інформаційні системи',
    'ОПП Інформаційні управляючі системи та технології',
    'ОПП Інформаційне забезпечення робототехнічних систем',
    'ОНП Інформаційні управляючі системи та технології'
];
const values126 = ['ОПП_ІС', 'ОПП_ІА', 'ОПП_ІК',  '_ОНП'];

const specializations = ['121', '123', '126'];

export default function Specialization(){

    const [specialization, setSpecialization] = useState('121');
    const [program, setProgram] = useState('');

    useEffect(() => {
        saveValue('specialization', specialization);
        saveValue('program', program);
    });

    function handleSpecializationChange(event){
        setSpecialization(event.target.value)
        setProgram('');
    }


    const radioButtons = specializations.map((elem) => {
        return(
            <span className='toggle-button'>
                <input type='radio' id={elem} name={'specialization'} value={elem} onChange={handleSpecializationChange}
                        checked={specialization === elem}/>
                <label htmlFor={elem}> {elem} </label>
            </span>
        );
    });

    const values = specialization === '121' ? values121 : specialization === '123' ? values123 : values126;
    const programs = specialization === '121' ? programs121 : specialization === '123' ? programs123 : programs126;

    const options = programs.map((value, index) => {
        return <option value={values[index]}>{value}</option>;
    })

    return (
        <div>
            <div className='field'>
                <p className='label'>  {'Спеціальність'} </p>
                <div className='toggle-buttons'>
                    {radioButtons}
                </div>
            </div>
            <div className='field'>
                <div className='field'>
                    <p className='label'>Освітня програма</p>
                    <select id={'specialization'} value={program} onChange={(event) => setProgram(event.target.value)}>
                        {options}
                        <option disabled hidden value='' >Оберіть програму</option>
                    </select>
                </div>
            </div>
        </div>
    );

}