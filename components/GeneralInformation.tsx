import * as React from "react";

interface Props {
  isParent: boolean,
}


export default function GeneralInformation(props: Props) {

  return(
      <div>
        <label> Форма навчання (бюджет/контракт) </label>
        <div>
          <label>
            <input type="radio"/> Бюджет
          </label>

          <label>
            <input type="radio"/> Контракт
          </label>

        </div>
      </div>
  );


}