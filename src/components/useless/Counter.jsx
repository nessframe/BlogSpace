import React, {useState} from "react";
//  здесь реализован компонент счетчика 

const Counter = () => {
    const [int, changeInt] = useState(8);

    function increment() {
        changeInt(int + 1)
    };
    function decrement() {
        changeInt(int - 1)
    };

    return (
        <div>
            <h2>{int}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}
export default Counter;