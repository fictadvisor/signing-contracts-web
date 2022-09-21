import '../styles/styles.css'
import * as React from "react";
import Form from "../components/Form";
import Footer from "../components/Footer";

export default function Home() {

  return (
    <div className="wrapper">
      <h1 className='block'> Інформація для договору про навчання </h1>
      <Form/>
      <Footer/>
    </div>
);
}