import * as React from "react";
import FullName from "./FullName";
import Passport from "./Passport";
import Field from "./Field";
import IdCode from "./IdCode";

interface State{
  isAdult: boolean;
}

export default class Form extends React.Component {

  state: State;

  constructor(props) {
    super(props);
    this.state = {
      isAdult: false
    }
  }

  handleCheck = () => {
    this.setState({
      isAdult: !this.state.isAdult
    });
  }


  render() {
    return (
      <div>
        <input type="checkbox" className="checkbox" onChange={this.handleCheck}/> Є 18 років
        <FullName isParent={false} />
        <Passport isParent={false} />
        <IdCode isParent={false} />
        <Field label="Електронна пошта вступника" token="email" mistakeMessage="Перевір наявність @"
               onChange={(value) => {
                 if (!value) return true;
                 return value.includes("@");
               }}/>
        { !this.state.isAdult &&
            <div>
              <FullName isParent={true}/>
              <Passport isParent={true} />
              <IdCode isParent={true} />
            </div>
        }
      </div>
    )
  }
}
