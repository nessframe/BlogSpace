import React from "react";
import classes from './MyInput.module.css'

const MyInput = (props) => {


    return( 
    /*  в пропсах мы можем писать свой для нашего input
        и эти пропсы(свойства) мы передаем в этот input */  
        <input {...props} className={classes.MyInput}/>
    )
}

export default MyInput;