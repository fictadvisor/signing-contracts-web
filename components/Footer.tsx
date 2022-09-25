import * as React from "react";
import {downloadDocx} from "../utils/utils";

export default function Footer() {
    return (
        <div className='block'>
            <button className='submit-button' onClick={() => downloadDocx()}>Надіслати</button>
        </div>
    );
}

