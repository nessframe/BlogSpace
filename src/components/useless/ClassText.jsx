//  Классовые компоненты
//  не понятно. в будущем как нибудь разберусь
import React from "react";

class ClassText extends React.Component {
    constructor() {

    }

    return() {
        return(
            <div>
                <h1>{text}</h1>
                <div>
                    <input type="text" onChange={event => setText(event.target.value)}></input>
                </div>
            </div>
        )
    }
}