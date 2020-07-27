import React, {useState} from 'react';
import {Counter} from "../Counter";
import { v4 as uuid } from 'uuid';
import {CustomCounter} from "../CustomCounter";

import s from './App.module.css';


export function App() {

    const initialState = [{id: 1, count: 1},{id:2, count: 2}];
    const rand = +((Math.random()*10).toFixed());

    const [counterList, setCounterList] = useState(initialState);
    const [custom, setCustom]= useState(false);


    const addCounter = () => {
        const newList = [...counterList, {id:uuid(), count:rand}];
        setCounterList(newList);
    }
    const deleteCounter = (id) => {
        const itemIndex = counterList.findIndex((el) => el.id === id);

        const newList = [
            ...counterList.slice(0, itemIndex),
            ...counterList.slice(itemIndex + 1),
        ];
        setCounterList(newList);
    }
    const resetAll = () =>{
        const newList = [...counterList];
        newList.map(el => el.count = 0);
        setCounterList(newList);
    }
    const addCustomCounter = () => {setCustom(!custom)}

    const counterJSX = () => counterList.map((el,i )=>(
        <Counter
            key={el.id}
            id={el.id}
            counter={el.count}
            index={i}
            deleteCounter={deleteCounter}
        />
    ));

    return (
        <div className={s.wrap}>
            {counterJSX()}
            <button className={s.addCounter} onClick={addCounter}>ADD COUNTER</button>
            <button className={s.addCounter} onClick={resetAll}>RESET ALL</button>
            <button className={s.addCounter} onClick={addCustomCounter}>ADD CUSTOM COUNTER</button>
            <CustomCounter custom={custom}/>
        </div>

    );
}

