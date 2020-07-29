import React from 'react';

import s from './styles.module.css';


export const CountBtn = ({value,updateCount, id}) => {

    const send = () => updateCount(value);

    return (
        <div className={s.btn}>
            <button className={s.btn} onClick={send} id={id}>{value}</button>
        </div>
    );
};
