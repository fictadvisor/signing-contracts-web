import * as React from "react";
import Field from "./Field";

export const LETTERS: Array<string> = [
    'А', 'Б', 'В', 'Г', 'Ґ', 'Д', 'Е', 'Є', 'Ж', 'З', 'И', 'І', 'Ї', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ю', 'Я',
    'а', 'б', 'в', 'г', 'ґ', 'д', 'е', 'є', 'ж', 'з', 'и', 'і', 'ї', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ю', 'я',
    '\'',
]

interface Props {
  isParent: boolean,
}

interface State {
  hasFathername: boolean,
  mistakeMessage: string
}

class FullName extends React.Component {
  props: Props;
  state: State;

  constructor(props) {
    super(props);
    this.state = {
      hasFathername: true,
      mistakeMessage: 'Перевір, щоб були наявні тільки українськи літери та велика літера на початку'
    }
  }

  static checkValue(value: string): boolean {
    if (!value) return true;
    if (value[0] !== value[0].toUpperCase()) return false;
    for (const char of value) {
      if (!LETTERS.some(letter => letter == char)) return false;
    }

    return true;
  }

  handleCheck = () => {
    this.setState({hasFathername: !this.state.hasFathername});
  }

  render() {
    return (
      <div>
        <label>
          <input type="checkbox" checked={!this.state.hasFathername} className="checkbox" onChange={this.handleCheck}/> Немає по-батькові
        </label>
        <Field
            label={'Прізвище ' + (this.props.isParent ? 'законного представника' : 'вступника')}
            token={(this.props.isParent ? 'parent_' : '') + 'last_name'}
            mistakeMessage={this.state.mistakeMessage}
            onChange={FullName.checkValue}
        />
        <Field
            label={'Ім\'я ' + (this.props.isParent ? 'законного представника' : 'вступника')}
            token={(this.props.isParent ? 'parent_' : '') + 'first_name'}
            mistakeMessage={this.state.mistakeMessage}
            onChange={FullName.checkValue}
        />
        {
          this.state.hasFathername &&
          <Field
            label={'По-батькові ' + (this.props.isParent ? 'законного представника' : 'вступника')}
            token={(this.props.isParent ? 'parent_' : '') + 'father_name'}
            mistakeMessage={this.state.mistakeMessage}
            onChange={FullName.checkValue}
          />
        }
      </div>
    )
  }
}

export default FullName;