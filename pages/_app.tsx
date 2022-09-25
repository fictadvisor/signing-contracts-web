import * as React from "react";
import '../styles/styles.css'
import Form from "../components/Form";
import Footer from "../components/Footer";
import { useState} from "react";

export default function Home() {

    const [isClicked, setIsClicked] = useState(false);


    return (
        <div id='main'>
            { !isClicked &&
                <div id="cookiePopup">
                    <p>
                        Зверніть увагу, що внесені передаються на сервер для формування документів, але не зберігаються.
                        Збереження даних функціонально неможливе.
                    </p>
                    <button id="accept" onClick={() => {
                        setIsClicked(!isClicked);
                        document.body.style.overflow = 'auto';
                    }}>Підтвердити</button>
                </div>
            }

            <div  className={'wrapper' + (isClicked ? '' : ' hide')}>
                <h1 className='block'> Інформація для договору про навчання </h1>
                <Form/>
                <Footer/>
            </div>

        </div>
    );
}