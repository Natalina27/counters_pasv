import React, {useState} from 'react';

import s from './Counter.module.css';

export const Counter = ({x}) => {
    console.log('x',x);

    const [count, setCount] = useState(0);

    const handleMinus = () => {
        setCount(count - x);
    }

    const handlePlus = () => {
        setCount(count + x);
    }

    return (
        <div className={s.counter}>
            <button className={s.btn} onClick={handleMinus}>-{x}</button>
            <div className={s.count}>
                {count}
            </div>
            <button className={s.btn} onClick={handlePlus}>+{x}</button>
            <button className={s.reset} onClick={()=>setCount(0)}>RESET</button>
        </div>
    );
};
