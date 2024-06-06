import React from 'react';
import style from './index.module.css';

const Button=({buttonName})=>{

    return(
        <div >
            <button className={style.buttonStyle}>{buttonName}</button>

        </div>
    )

};

export default Button;

