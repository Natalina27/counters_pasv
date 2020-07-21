import  {useState} from "react";

export const useCounter =(x)=>{

    const [count, setCount] = useState(0);

    const handleMinus = () => {
        setCount((count)=>count - x);
    }

    const handlePlus = () => {
        setCount((count)=>count + x);
    }

    const handleReset = () => {
        setCount(0);
    }

    return {
        x,
        count,
        handlePlus,
        handleMinus,
        handleReset
    }

}
