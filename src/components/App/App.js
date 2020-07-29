import React, {useState} from 'react';
import {Counter} from "../Counter";
import { v4 as uuid } from 'uuid';
import {CustomCounter} from "../CustomCounter";

import s from './App.module.css';


export function App() {

    const initialState = [{id: uuid(), count: 1},{id: uuid(), count: 2}];

    const [counterList, setCounterList] = useState(initialState);
    const [custom, setCustom]= useState(false);

    const updateCount = (n, id) => {
        const newList = counterList.map((el) => {
            if (id === el.id ){
                return {...el,  count: el.count + n }
             }
            return el;
        })
        setCounterList(newList);
    };
    const addCounter = () => {
        const rand = +((Math.random()*10).toFixed());
        const newList = [...counterList, {id:uuid(), count:rand}];
        setCounterList(newList);
    };
    const deleteCounter = (id) => {
        const itemIndex = counterList.findIndex((el) => el.id === id);

        const newList = [
            ...counterList.slice(0, itemIndex),
            ...counterList.slice(itemIndex + 1)
        ];
        setCounterList(newList);
    };
    const reset = (id) => {
        const itemIndex = counterList.findIndex((el) => el.id === id);
        const newList = [
            ...counterList.slice(0, itemIndex), {id, count: 0},
            ...counterList.slice(itemIndex + 1)
        ];
        setCounterList(newList);
    }
    const resetAll = () =>{
        const newList = [...counterList];
        newList.map(el => (el.count =0));
        setCounterList(newList);
    };
    const addCustomCounter = () => {setCustom(!custom)}

    return (
        <div className={s.wrap}>
            {counterList.map((el)=>(
                <Counter
                    key={el.id}
                    counter={el}
                    deleteCounter={deleteCounter}
                    reset={reset}
                    updateCount={updateCount}
                />
            ))}
            <button className={s.addCounter} onClick={addCounter}>ADD COUNTER</button>
            <button className={s.addCounter} onClick={resetAll}>RESET ALL</button>
            <button className={s.addCounter} onClick={addCustomCounter}>ADD CUSTOM COUNTER</button>
            <CustomCounter custom={custom}/>
        </div>

    );
}

