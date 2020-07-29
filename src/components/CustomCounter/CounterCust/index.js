import React from 'react';

import s from './styles.module.css';

export const  CounterCust = ({
    positiveRange,
        negativeRange,
        minRange, maxRange,
        onChangeMinRange, onChangeMaxRange,
        onButtonClick,
        resultNumb,
        onReset
    }) => {

    return (
        <div className={s.customCounter}>
            <h1 className={s.title}> ENTER YOUR RANGE FROM 1 TO 10</h1>
            <div className={s.ranges}>
                <div>
                    <input
                        className={s.input}
                        type='text'
                        name='min'
                        value={minRange.min}
                        onChange={onChangeMinRange}
                    />
                    <input
                        className={s.input}
                        type="text"
                        name='max'
                        value={maxRange.max}
                        onChange={onChangeMaxRange}/>
                </div>
                <div className={s.counter}>
                    <div>
                        {negativeRange.map(el =>
                            <button key={-el}
                                    onClick={() => onButtonClick(-el)}

                            >
                            {-el}
                        </button>)}
                    </div>
                    <span>{resultNumb}</span>
                    <div>
                        {positiveRange.map(el =>
                            <button key={el}
                                    onClick={() => onButtonClick(el)}
                            >
                            +{el}
                        </button>)}
                    </div>
                </div>
            </div>
            <button onClick={() => onReset()}> RESET</button>
        </div>
    );
}
