export const CounterReducer = (state = {}, action) => {
    switch(action) {
        case "TANG":
            return {counter: state.counter + 1};
        case "GIAM":
            return {counter: state.counter - 1};
        default: return state;
    }
}