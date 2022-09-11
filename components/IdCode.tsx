import * as React from "react";
import Field from "./Field";
import {saveValue} from "../utils/utils";
import {useEffect, useState} from "react";

interface Props {
  isParent: boolean,
}

export default function IdCode(props: Props){

  const [hasCode, setHasCode] = useState(true);
  const mistakeMessage = 'Перевір, щоб були наявні тільки 10 цифр';
  const token = 'id_code';

  function checkValue(value): boolean {
    if (isNaN(parseInt(value))) return false;
    return value.length === 10;
  }

  return (
      <div className='block'>
        <label>
          <input type="checkbox" checked={!hasCode} className="checkbox"
                 onChange={() => {
                   setHasCode(!hasCode)
                   saveValue((props.isParent ? 'parent_' : '') + 'id_code', '')
                 }}/> Відмова від РНОКПП
        </label>
        {
            hasCode &&
            <Field
                label={'Ідентифікаційний код (РНОКПП)'}
                token={token}
                mistakeMessage={mistakeMessage}
                onChange={checkValue} isField={false}
                isParent={props.isParent}
            />
        }
      </div>
  );
}
