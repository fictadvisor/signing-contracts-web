import * as React from "react";
import Field from "./Field";
import {LETTERS} from "./FullName";

interface Props {
  isParent: boolean,
}

interface State {
  isOldFormat: boolean
}

class Passport extends React.Component {
  props: Props;
  state: State;

  constructor(props) {
    super(props);
    this.state = {
      isOldFormat: false
    }
  }

  handleCheck = () => {
    this.setState({isOldFormat: !this.state.isOldFormat});
  }

  static checkPassportNumberNew(value: string): boolean {
    if (!value) return true;
    if (value.length !== 9) return false;
    return value.match(/^[0-9]+$/) !== null;
  }

  static checkPassportNumberOld(value: string): boolean {
    if (!value) return true;
    if (value.length !== 6) return false;
    return value.match(/^[0-9]+$/) !== null;
  }

  static checkPassportInstituteOld(value: string): boolean {
    if (!value) return true;
    if (value.length < 10) return false;
    for (const char of value) {
      if (!LETTERS.some(letter => letter === char)) return false;
    }
    return true;
  }

  static checkPassportInstituteNew(value: string): boolean {
    if (!value) return true;
    if (value.length !== 4) return false;
    return value.match(/^[0-9]+$/) !== null;
  }

  static checkPassportDate(value: string): boolean{
    if (!value) return true;
    return value.match(/^[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/) != null;
  }

  static checkPassportSeries(value: string): boolean {
    if (!value) return true;
    return value.length === 2 &&
        LETTERS.some(letter => letter.toUpperCase() === value[0]) &&
        LETTERS.some(letter => letter.toUpperCase() === value[1]);
  }

  render(){
    return (
        <div>
          <div>
            <label>
              <input type="checkbox" checked={this.state.isOldFormat} className="checkbox" onChange={this.handleCheck}/> Паспорт старого зразка
            </label>
          </div>
          {
            this.state.isOldFormat ?
              <div>
                <Field
                  label={'Серія паспорту ' + (this.props.isParent ? 'законного представника' : 'вступника')}
                  token={(this.props.isParent ? 'parent_' : '') + 'passport_series'}
                  mistakeMessage="Перевір, щоб серія складалась з двох великих українських літер"
                  onChange={Passport.checkPassportSeries}
                />
                <Field
                  label={'Номер паспорту ' + (this.props.isParent ? 'законного представника' : 'вступника')}
                  token={(this.props.isParent ? 'parent_' : '') + 'passport_number'}
                  mistakeMessage="Перевір, щоб були наявні тільки 6 цифр"
                  onChange={Passport.checkPassportNumberOld}
                />
                <Field
                    label={'Ким виданий паспорт ' + (this.props.isParent ? 'законного представника' : 'вступника')}
                    token={(this.props.isParent ? 'parent_' : '') + 'passport_institute'}
                    mistakeMessage="Перевір, щоб було наявне повне ім'я органу, що видав"
                    onChange={Passport.checkPassportInstituteOld}
                />
                <Field
                    label={'Коли виданий паспорт ' + (this.props.isParent ? 'законного представника' : 'вступника') + " (дд.мм.рррр)"}
                    token={(this.props.isParent ? 'parent_' : '') + 'passport_date'}
                    mistakeMessage="Перевір, щоб формат дати мав вигляд дд.мм.рррр"
                    onChange={Passport.checkPassportDate}
                />
              </div>
              :
                <div>
                  <Field
                      label={'Номер паспорту ' + (this.props.isParent ? 'законного представника' : 'вступника')}
                      token={(this.props.isParent ? 'parent_' : '') + 'passport_number'}
                      mistakeMessage="Перевір, щоб були наявні тільки 9 цифр"
                      onChange={Passport.checkPassportNumberNew}
                  />
                  <Field
                      label={'Ким виданий паспорт ' + (this.props.isParent ? 'законного представника' : 'вступника')}
                      token={(this.props.isParent ? 'parent_' : '') + 'passport_institute'}
                      mistakeMessage="Перевір, щоб було наявне повне ім'я органу, що видав"
                      onChange={Passport.checkPassportInstituteNew}
                  />
                  <Field
                      label={'Коли виданий паспорт ' + (this.props.isParent ? 'законного представника' : 'вступника') + " (дд.мм.рррр)"}
                      token={(this.props.isParent ? 'parent_' : '') + 'passport_date'}
                      mistakeMessage="Перевір, щоб формат дати мав вигляд дд.мм.рррр"
                      onChange={Passport.checkPassportDate}
                  />
                </div>

          }

        </div>
    );
  }
}

export default Passport;