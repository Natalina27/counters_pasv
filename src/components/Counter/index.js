import React from 'react';
import { useCounter } from "./useCounter";

import s from './Counter.module.css';


export const Counter = ({x}) => {

const { count,  handleMinus, handlePlus, handleReset } = useCounter(x);
return (
        <div className={s.counter}>
            <button className={s.btn} onClick={handleMinus} >-{x}</button>
            <div className={s.count}>{count}</div>
            <button className={s.btn} onClick={handlePlus}>+{x}</button>
            <button className={s.reset} onClick={handleReset}>RESET</button>
        </div>
    );
};
