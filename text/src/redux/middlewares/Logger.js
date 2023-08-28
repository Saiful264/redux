const logger = (store) => (next) => (action) => {
    const currentState = store.getState();
    console.log('current state =>', currentState);
    console.log('Action dispached =>', action);
    
    next(action);
    console.log('current state =>', store.getState());
};

export default logger;