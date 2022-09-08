import '../styles/styles.css'
import * as React from "react";
import Form from "../components/Form";
import {downloadDocx} from "../utils/utils";

export default class Home extends React.Component {
  static dataObject: object = {};

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="wrapper">
          <h1> Інформація для договору про навчання </h1>
          <Form></Form>
          <button onClick={() => downloadDocx}>Надіслати</button>
        </div>
    );
  }
}