import  {useState} from "react";
import {_decrease} from "./_decrease";
import {_increase} from "./_increase";
import {_reset} from "./_reset";

export const useCounter =(value, count)=>{
    console.log('x', value);
    console.log('count', count);

    const [counter, setCounter] = useState(count);

    console.log('counter', counter);

    const handleMinus = () => setCounter(_decrease(counter,value));

    const handlePlus = () => setCounter(_increase(counter,value));

    const handleReset = () => setCounter(_reset)

    return {
        count,
        handlePlus,
        handleMinus,
        handleReset
    }

}
