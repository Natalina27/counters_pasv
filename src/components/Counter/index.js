import React, {useState} from 'react';
import {CountBtn} from "../CountBtn";

import s from './Counter.module.css';


export const Counter = ({deleteCounter, id, counter}) => {

    const [count, setCount] = useState(counter);

    const updateCount = (n) => setCount(count + n);

    const reset = () => setCount(0);

    return (
        <div className={s.counter}>
            <CountBtn value={-3} count={count} updateCount={updateCount}/>
            <CountBtn value={-2} count={count} updateCount={updateCount}/>
            <CountBtn value={-1} count={count} updateCount={updateCount}/>
            <div className={s.count}>{count}</div>
            <CountBtn value={1} count={count} updateCount={updateCount}/>
            <CountBtn value={2} count={count} updateCount={updateCount}/>
            <CountBtn value={3} count={count} updateCount={updateCount}/>
            <button className={s.reset} onClick={reset}>RESET</button>
            <button className={s.reset} onClick={()=>deleteCounter(id)}>DELETE</button>
        </div>
    )
}
