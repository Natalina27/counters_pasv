import  {useState} from "react";
import {_decrease} from "./_decrease";
import {_increase} from "./_increase";
import {_reset} from "./_reset";

export const useCounter =(x)=>{
    console.log('x', x);


    const [count, setCount] = useState(0);

    const handleMinus = () => setCount(_decrease(count,x));

    const handlePlus = () => setCount(_increase(count,x));

    const handleReset = () => setCount(_reset)

    return {
        count,
        handlePlus,
        handleMinus,
        handleReset
    }

}
