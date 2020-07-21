import React from 'react';
import {Counter} from "../Counter";

import s from './App.module.css';


export function App() {
    return (
        <div className={s.wrap}>
            <Counter x={1}/>
            <Counter x={10}/>
            <Counter x={+(Math.random() * 10).toFixed()}/>
        </div>
    );
}

