import * as React from "react";
import Field from "./Field";
import {LETTERS} from "../utils/utils";
import {useState} from "react";

interface Props {
  isParent: boolean,
}

export default function Passport (props: Props){

  const [isOldFormat, setIsOldFormat] = useState(false);

  function checkPassportNumberNew(value: string): boolean {
    if (!value) return true;
    if (value.length !== 9) return false;
    return value.match(/^[0-9]+$/) !== null;
  }

  function checkPassportNumberOld(value: string): boolean {
    if (!value) return true;
    if (value.length !== 6) return false;
    return value.match(/^[0-9]+$/) !== null;
  }

  function checkPassportInstituteOld(value: string): boolean {
    if (!value) return true;
    if (value.length < 10) return false;
    for (const char of value) {
      if (!LETTERS.some(letter => letter === char)) return false;
    }
    return true;
  }

  function checkPassportInstituteNew(value: string): boolean {
    if (!value) return true;
    if (value.length !== 4) return false;
    return value.match(/^[0-9]+$/) !== null;
  }

  function checkPassportDate(value: string): boolean{
    return !value || value.match(/^[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/) != null;
  }

  function checkPassportSeries(value: string): boolean {
    if (!value) return true;
    return value.length === 2 &&
        LETTERS.some(letter => letter.toUpperCase() === value[0]) &&
        LETTERS.some(letter => letter.toUpperCase() === value[1]);
  }

  return (
      <div>
        <div>
          <label>
            <input type="checkbox" checked={isOldFormat} className="checkbox"
                   onChange={() => setIsOldFormat(!isOldFormat)}/> Паспорт старого зразка
          </label>
        </div>
        {
          isOldFormat ?
              <div>
                <Field
                    label={'Серія паспорту ' + (props.isParent ? 'законного представника' : 'вступника')}
                    token={(props.isParent ? 'parent_' : '') + 'passport_series'}
                    mistakeMessage="Перевір, щоб серія складалась з двох великих українських літер"
                    onChange={checkPassportSeries}
                />
                <Field
                    label={'Номер паспорту ' + (props.isParent ? 'законного представника' : 'вступника')}
                    token={(props.isParent ? 'parent_' : '') + 'passport_number'}
                    mistakeMessage="Перевір, щоб були наявні тільки 6 цифр"
                    onChange={checkPassportNumberOld}
                />
                <Field
                    label={'Ким виданий паспорт ' + (props.isParent ? 'законного представника' : 'вступника')}
                    token={(props.isParent ? 'parent_' : '') + 'passport_institute'}
                    mistakeMessage="Перевір, щоб було наявне повне ім'я органу, що видав"
                    onChange={checkPassportInstituteOld}
                />
                <Field
                    label={'Коли виданий паспорт ' + (props.isParent ? 'законного представника' : 'вступника') + " (дд.мм.рррр)"}
                    token={(props.isParent ? 'parent_' : '') + 'passport_date'}
                    mistakeMessage="Перевір, щоб формат дати мав вигляд дд.мм.рррр"
                    onChange={checkPassportDate}
                />
              </div>
              :
              <div>
                <Field
                    label={'Номер паспорту ' + (props.isParent ? 'законного представника' : 'вступника')}
                    token={(props.isParent ? 'parent_' : '') + 'passport_number'}
                    mistakeMessage="Перевір, щоб були наявні тільки 9 цифр"
                    onChange={checkPassportNumberNew}
                />
                <Field
                    label={'Ким виданий паспорт ' + (props.isParent ? 'законного представника' : 'вступника')}
                    token={(props.isParent ? 'parent_' : '') + 'passport_institute'}
                    mistakeMessage="Перевір, щоб було наявне повне ім'я органу, що видав"
                    onChange={checkPassportInstituteNew}
                />
                <Field
                    label={'Коли виданий паспорт ' + (props.isParent ? 'законного представника' : 'вступника') + " (дд.мм.рррр)"}
                    token={(props.isParent ? 'parent_' : '') + 'passport_date'}
                    mistakeMessage="Перевір, щоб формат дати мав вигляд дд.мм.рррр"
                    onChange={checkPassportDate}
                />
              </div>

        }

      </div>
  );
}
