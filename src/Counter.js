import React, { useContext, useReducer } from 'react';
import { CounterContext } from './CounterContext';
import { CounterReducer } from './CounterReducer';
function Counter() {
    // couter, và setCounter được truyền từ CounterContext
    const {counter, setCounter} = useContext(CounterContext)
    // sử dụng useReducer
    const [state, dispatch] = useReducer(CounterReducer, {counter: 0})

    function giam() {
        dispatch('GIAM');
        setCounter(state.counter)
    }

    function tang() {
        dispatch('TANG');
        setCounter(state.counter)
    }

    return (
        <div className="App">
            <h1>Couter component</h1>
            <h2>Số đếm: {counter}</h2>
            <button type="button" onClick={giam}>Giảm</button>
            <button type="button" onClick={tang}>Tăng</button>
        </div>
    );
}

export default Counter;