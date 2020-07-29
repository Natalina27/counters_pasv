import React from 'react';

import s from './styles.module.css';


export const CountBtn = ({updateCount,counter, value}) => {

    const send = (value, id) => updateCount(value, id);


    return (
        <div className={s.btn}>
            <button className={s.btn} onClick={()=>send(value, counter.id)} >{value}</button>
        </div>
    );
};
