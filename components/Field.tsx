import * as React from "react";
import {setValue} from "../utils/utils";

interface Props {
  label: string,
  token: string,
  mistakeMessage: string,
  onChange: Function,
}

interface State {
  mutable: boolean,
  isWrong: boolean,
  value: string,
}

class Field extends React.Component {
  props: Props;
  state: State;

  constructor(props) {
    super(props);
    this.state = {
      mutable: true,
      isWrong: false,
      value: '',
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
      isWrong: !this.props.onChange(event.target.value),
    });
    setValue(this.props.token, event.target.value);
  }

  render() {
    return (
        <div className="field">
          <p className="label">{this.props.label}</p>
          <input value={this.state.value} onChange={this.handleChange} />
          {this.state.isWrong && <p className="mistake-message">{this.props.mistakeMessage}</p>}
        </div>
    )
  }
}

export default Field;