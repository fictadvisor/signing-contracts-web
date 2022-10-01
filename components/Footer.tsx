import * as React from "react";
import {downloadDocx1, downloadDocx2} from "../utils/utils";

export default function Footer() {

    return (
        <div className='block'>
            <button className='download-button' onClick={downloadDocx1}>Завантажити договір про навчання</button>
            <button className='download-button' onClick={downloadDocx2}>Завантажити договір про надання платних освітніх послуг </button>
        </div>
    );
}

