import * as React from "react";
import ToggleButton from "./ToggleButton";
import Dropdown from "./Dropdown";
import Specialization from "./Specialization";

export default function GeneralInformation() {

  return(
      <div>
          {/*<ToggleButton options={['Бюджет', 'Контракт']} token='payment_type' label="Форма навчання (бюджет/контракт)"/>*/}

          <ToggleButton options={['Денна', 'Заочна']} token='learning_mode' label='Форма навчання (денна/заочна)'/>

          <Specialization/>

          <ToggleButton options={['Щосеместрово','Щоквартально']} token='payment_period' label='Оплата контракту'/>

      </div>
  );
}