import * as React from "react";
import Field from "./Field";
import {setValue} from "../utils/utils";


interface Props {
  isParent: boolean,
}

interface State {
  hasCode: boolean,
  mistakeMessage: string
}

class IdCode extends React.Component {
  props: Props;
  state: State;

  constructor(props) {
    super(props);
    this.state = {
      hasCode: true,
      mistakeMessage: 'Перевір, щоб були наявні тільки 10 цифр'
    }
  }

  static checkValue(value): boolean {
    if (isNaN(parseInt(value))) return false;
    return value.length === 10;
  }

  handleCheck = () => {
    this.setState({hasCode: !this.state.hasCode});
    setValue((this.props.isParent ? 'parent_' : '') + 'has_code', this.state.hasCode);
  }

  render() {
    return (
        <div>
          <label>
            <input type="checkbox" checked={!this.state.hasCode} className="checkbox" onChange={this.handleCheck}/> Відмова від РНОКПП
          </label>
          {
            this.state.hasCode &&
            <Field
              label={'Ідентифікаційний код (РНОКПП) ' + (this.props.isParent ? 'законного представника' : 'вступника')}
              token={(this.props.isParent ? 'parent_' : '') + 'id_code'}
              mistakeMessage={this.state.mistakeMessage}
              onChange={IdCode.checkValue}
            />
          }
        </div>
    );
  }
}

export default IdCode;