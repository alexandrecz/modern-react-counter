
export const increment = () => ({
    type: 'INCREMENT',  
});

export const incrementBy = (number) => ({
    type: 'INCREMENTBY',  
    payload: number,
});

export const decrementBy = (number) => ({
    type: 'DECREMENTBY',  
    payload: number,
});

export const decrement = () => ({
    type: 'DECREMENT',      
});