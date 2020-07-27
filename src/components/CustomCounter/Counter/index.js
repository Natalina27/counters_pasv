import React from 'react';


export const  Counter = ({
    positiveRange,
        negativeRange,
        minRange, maxRange,
        onChangeMinRange, onChangeMaxRange,
        onButtonClick,
        resultNumb,
        onReset
    }) => {

    return (
        <div >
            <h1> Enter your range from 1 to 10 </h1>
            <div >
                <div>
                    <input type="text"
                           name='min'
                           value={minRange.min}
                           onChange={onChangeMinRange}/>
                    <input type="text"
                           name='max'
                           value={maxRange.max}
                           onChange={onChangeMaxRange}/>
                </div>
                <div>
                    <div>
                        {negativeRange.map(el => <button key={-el}
                                                         onClick={() => onButtonClick(-el)}
                                                         >
                            {-el}
                        </button>)}</div>
                    <span>{resultNumb}</span>
                    <div>
                        {positiveRange.map(el => <button key={el}
                                                         onClick={() => onButtonClick(el)}>
                            +{el}
                        </button>)}
                    </div>
                </div>
            </div>
            {/*<Reset key={345}*/}
            {/*       onReset={onReset}*/}
            {/*/>*/}
            <button onClick={() => onReset()}> RESET</button>
        </div>
    );
}
