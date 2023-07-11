import React, { useReducer } from 'react'

// Reducer Function
const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        case "DECREMENT":
            return { count: state.count - 1 };
        case "PAYLOAD":
            return{count:state.count+action.payload};
        case "RESET":
            return{count:0};
        default:
            return state;
    }
}

const UseReducer = () => {
    // Initial State
    const initialState = { count: 0 }
    // useReducer Hook
    const [state, dispatch] = useReducer(reducer, initialState);
    const increment = () => {
        dispatch({ type: "INCREMENT" });
    };
    const decrement = () => {
        dispatch({ type: "DECREMENT" });
    };
    const payload = () => {
        dispatch({ type: "PAYLOAD", payload: 12345 })
    };
    const reset = () => {
        dispatch({ type: "RESET" });
    };
    return (
        <div>
            <h2>Count : {state.count}</h2>
            <button onClick={increment}>Increment</button><br/>
            <button onClick={decrement}>Decrement</button><br/>
            <button onClick={payload}>Add Payload</button><br/>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default UseReducer