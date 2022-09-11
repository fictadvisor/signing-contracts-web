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
  const token = (props.isParent ? 'parent_' : '') + 'id_code';

  function checkValue(value): boolean {
    if (isNaN(parseInt(value))) return false;
    return value.length === 10;
  }

  useEffect(() => {
    saveValue(token, hasCode);
  });

  return (
      <div className='block'>
        <label>
          <input type="checkbox" checked={!hasCode} className="checkbox"
                 onChange={() => setHasCode(!hasCode)}/> Відмова від РНОКПП
        </label>
        {
            hasCode &&
            <Field
                label={'Ідентифікаційний код (РНОКПП) ' + (props.isParent ? 'законного представника' : 'вступника')}
                token={token}
                mistakeMessage={mistakeMessage}
                onChange={checkValue} isField={false}
            />
        }
      </div>
  );
}
