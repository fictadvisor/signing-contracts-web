import * as React from "react";
import Field from "./Field";
import {LETTERS} from "../utils/utils";
import {useState} from "react";

interface Props {
  isParent: boolean,
}

export default function Passport (props: Props){

  const [isOldFormat, setIsOldFormat] = useState(false);
  const [isInternational, setIsInternational] = useState(false);

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

  function checkPassportSeriesInt(value: string): boolean {
    if (!value) return true;
    return value.length === 2 &&
        value[0].match(/^[A-Z]$/) !== null &&
        value[1].match(/^[A-Z]$/) !== null;
  }

  function checkPassportInstituteInt(value: string): boolean {
    if (!value) return true;
    if (value.length !== 4) return false;
    return value.match(/^[0-9]+$/) !== null || value.toLowerCase().match(/^[a-z]+$/) !== null;
  }

  return (
      <div className='block'>
        <div>
          <label>
            <input type="checkbox" checked={isOldFormat} className="checkbox" disabled={isInternational}
                   onChange={() => setIsOldFormat(!isOldFormat)}/> Паспорт старого зразка
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" checked={isInternational} className="checkbox" disabled={isOldFormat}
                   onChange={() => setIsInternational(!isInternational)}/> Закордонний паспорт
          </label>
        </div>
        {
          isOldFormat ?
              <div>
                <Field
                    label={'Серія паспорту'}
                    token={'passport_series'}
                    mistakeMessage="Перевір, щоб серія складалась з двох великих українських літер"
                    onChange={checkPassportSeries} isField={true}
                    isParent={props.isParent}
                />
                <Field
                    label={'Номер паспорту'}
                    token={'passport_number'}
                    mistakeMessage="Перевір, щоб були наявні тільки 6 цифр"
                    onChange={checkPassportNumberOld} isField={true}
                    isParent={props.isParent}
                />
                <Field
                    label={'Орган видачі паспорту'}
                    token={'passport_institute'}
                    mistakeMessage="Перевір, щоб було наявне повне ім'я органу, що видав"
                    onChange={checkPassportInstituteOld} isField={true}
                    isParent={props.isParent}
                />
                <Field
                    label={'Дата видачі паспорту (дд.мм.рррр)'}
                    token={'passport_date'}
                    mistakeMessage="Перевір, щоб формат дати мав вигляд дд.мм.рррр"
                    onChange={checkPassportDate} isField={false}
                    isParent={props.isParent}
                />
              </div>
              : isInternational ?
                  <div>
                    <Field
                        label={'Серія закордонного паспорту'}
                        token={'passport_series'}
                        mistakeMessage="Перевір, щоб серія складалась з двох великих англійських літер"
                        onChange={checkPassportSeriesInt} isField={true}
                        isParent={props.isParent}
                    />
                    <Field
                        label={'Номер закордонного паспорту'}
                        token={'passport_number'}
                        mistakeMessage="Перевір, щоб були наявні тільки 6 цифр"
                        onChange={checkPassportNumberOld} isField={true}
                        isParent={props.isParent}
                    />
                    <Field
                        label={'Орган видачі закордонного паспорту'}
                        token={'passport_institute'}
                        mistakeMessage="Перевір, щоб було наявні тільки 4 цифри або англійські букви"
                        onChange={checkPassportInstituteInt} isField={true}
                        isParent={props.isParent}
                    />
                    <Field
                        label={'Дата видачі паспорт (дд.мм.рррр)'}
                        token={'passport_date'}
                        mistakeMessage="Перевір, щоб формат дати мав вигляд дд.мм.рррр"
                        onChange={checkPassportDate} isField={false}
                        isParent={props.isParent}
                    />
                  </div>
                    :
              <div>
                <Field
                    label={'Номер паспорту'}
                    token={'passport_number'}
                    mistakeMessage="Перевір, щоб були наявні тільки 9 цифр"
                    onChange={checkPassportNumberNew} isField={true}
                    isParent={props.isParent}
                />
                <Field
                    label={'Орган видачі паспорту'}
                    token={'passport_institute'}
                    mistakeMessage="Перевір, щоб було наявні тільки 4 цифри"
                    onChange={checkPassportInstituteNew} isField={true}
                    isParent={props.isParent}
                />
                <Field
                    label={'Дата видачі паспорту (дд.мм.рррр)'}
                    token={'passport_date'}
                    mistakeMessage="Перевір, щоб формат дати мав вигляд дд.мм.рррр"
                    onChange={checkPassportDate} isField={false}
                    isParent={props.isParent}
                />
              </div>

        }

      </div>
  );
}
