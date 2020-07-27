import React, {useState} from 'react';
import {Counter} from "./Counter";
import clx from 'classnames';

import s from './styles.module.css';

export const CustomCounter = ({custom}) => {
            const [resultNumb, setResultNumber] = useState(10);
            const [value, setValue] = useState('');
            const [minRange, setMinRange] = useState(0);
            const [maxRange, setMaxRange] = useState(0);
            const [negativeRange, setNegativeRange] = useState([]);
            const [positiveRange, setPositiveRange] = useState([]);

            const onButtonClick = (value) => {
            setResultNumber(resultNumb + +value);
        };

            const createPositiveRange =  (from, to) => {
            const range = [];
            for(let i = from; i <= to; i++ ){
            range.push(i);
        }
            return range;
        };

            const createNegativeRange =  (from, to) => {
            const range = [];
            for(let i = to; i >= from; i-- ){
            range.push(i);
        }
            return range;
        };

            const onChangeMinRange = (e) => {
            const from = +e.target.value;
            setMinRange(from);
            setNegativeRange(createNegativeRange(from, maxRange));
            setPositiveRange(createPositiveRange(from, maxRange));

        };

            const onChangeMaxRange = (e) => {
            const to =  +e.target.value;
            setMaxRange(to);
            setNegativeRange(createNegativeRange(minRange, to));
            setPositiveRange(createPositiveRange(minRange, to));
        };


            const onReset = () => {
            setMinRange({'min': ''});
            setMaxRange({'max': ''});
            setResultNumber(0);
            setValue(value + '');
            setNegativeRange([]);
            setPositiveRange([]);
        };

            const style = clx({[s.custom]: !custom,});

            return (
            <main className={style}>
                <Counter positiveRange={positiveRange}
                         negativeRange={negativeRange}
                         onButtonClick={onButtonClick}
                         onChangeMinRange={onChangeMinRange}
                         onChangeMaxRange={onChangeMaxRange}
                         onReset={onReset}
                         minRange={minRange}
                         maxRange={maxRange}
                         resultNumb={resultNumb}
                />
            </main>
            );
};

