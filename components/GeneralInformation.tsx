import * as React from "react";
import ToggleButton from "./ToggleButton";
import {useEffect, useState} from "react";
import {fillFields, saveValue} from "../utils/utils";
import axios from "axios";
import {string} from "prop-types";


export default function GeneralInformation() {

    const [value, setValue] = useState('');
    const [mistake, setMistake] = useState('');

    function handleChange(event){
        setValue(event.target.value);
    }

    function handleClick(){
        let data;
        axios.get(`http://localhost:5000/data?surname=${value}`, {}).then(r => {
            data = r.data;
            if (data.length === 0)
            {
                setMistake('Вступника не знайдено');
                return;
            }
            else if (data.length > 1) setMistake('Знайдено більше одного вступника. Спробуйте вказати повний ПІБ');
            else setMistake('');
            console.log(data);
            fillFields(data[0]);
        });
    }

    const isMistake = mistake !== '';

  return(
      <div>

          <div>
              <p className="label">Автозаповнення</p>
              <input type='text' value={value} onChange={handleChange}/>
          </div>

          {isMistake && <p className="mistake-message">{'⚠️ ' + mistake}</p>}

          <button id='find-button' onClick={handleClick}>Знайти</button>

          {/*<ToggleButton options={['Бюджет', 'Контракт']} token='payment_type' label="Форма навчання (бюджет/контракт)"/>*/}

          <ToggleButton options={['Денна', 'Заочна']} token='learning_mode' label='Форма навчання (денна/заочна)'/>

          <ToggleButton options={['121','123', '126']} token='specialization' label='Спеціальність'/>

          <ToggleButton options={['Щосеместрово','Щоквартально']} token='payment_period' label='Оплата контракту'/>

      </div>
  );
}