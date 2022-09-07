import * as React from "react";
import ToggleButton from "./ToggleButton";

export default function GeneralInformation() {

  return(
      <div>
          <ToggleButton options={['Бюджет', 'Конракт']} token='payment-type' label="Форма навчання (бюджет/контракт)"/>

          <ToggleButton options={['Денна', 'Заочна']} token='learning-mode' label='Форма навчання (денна/заочна)'/>

          <ToggleButton options={['121','123', '126']} token='specialization' label='Спеціальність'/>

      </div>
  );


}