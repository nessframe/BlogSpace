import React from "react";
/*  Достаем css стили как объект. 
    К классам которым мы обращаться как в объекте */
import classes from './MyButton.module.css'

const MyButton = ({children, ...props}) => {


    return( 
        //  props'ы передаем в свойство button
        <button {...props} className={classes.MyButton}>
            {
        //  берем содержимое вызываемого компонента   
            children
            }
        </button>
    )
}

export default MyButton;