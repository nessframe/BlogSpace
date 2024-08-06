import React, {useState} from "react";
//  Реализовано отображения текста в h1, написанное в инпуте

const Text = () => {
//  управление состоянием
    const [text, setText] = useState('type something in input');
    return(
        <div>
            <h1>{text}</h1>
            <div>
                <input type="text" 
                //  в setText (useState) передаем value из инпута 
                onChange={event => setText(event.target.value)}>
                </input>
            </div>
        </div>
    )
}

export default Text;