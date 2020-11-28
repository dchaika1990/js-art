const clearState = (state) => {
    for (let prop in state) {
        delete state[prop];
    }
    return state;
}

export default clearState;