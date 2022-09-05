import '../styles/styles.css'
import '../styles/Field.module.css'
import * as React from "react";
import Form from "../components/Form";

export default class Home extends React.Component {
  static dataObject: object = {};

  constructor(props) {
    super(props);
  }

  static setValue(name: string, value: string) {
    console.log('1213');
  }

  static downloadDocx() {

  }

  render() {
    return (
        <div>
            <Form></Form>
        </div>
    );
  }
}