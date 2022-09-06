import * as React from "react";

interface Props {
  isParent: boolean,
}

interface State {
  hasFathername: boolean,
  mistakeMessage: string
}


export default class Form extends React.Component {

  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);

  }

  handleCheck = () =>{

  }

  render(){
    return(
        <div>
          <label>

          </label>
        </div>
    );
  }


}