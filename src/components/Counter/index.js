import React from 'react';
import {CountBtn} from "../CountBtn";

import s from './Counter.module.css';


export const Counter = ({deleteCounter, reset, counter, updateCount}) => {

    return (
        <div className={s.counter}>
            <CountBtn value={-3} counter={counter} updateCount={updateCount} />
            <CountBtn value={-2} counter={counter} updateCount={updateCount}/>
            <CountBtn value={-1} counter={counter} updateCount={updateCount}/>
            <div className={s.count}>{counter.count}</div>
            <CountBtn value={1} counter={counter} updateCount={updateCount}/>
            <CountBtn value={2} counter={counter} updateCount={updateCount}/>
            <CountBtn value={3} counter={counter} updateCount={updateCount}/>
            <button className={s.reset} onClick={()=>reset(counter.id)}>RESET</button>
            <button className={s.reset} onClick={()=>deleteCounter(counter.id)}>DELETE</button>
        </div>
    )
}
