import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementBy, decrementBy } from './actions';


const App = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();  

  return (
    <div className="App">
      <h1>Counter { counter }</h1>
      <button onClick={()=> dispatch(increment())}>Increment+</button>
      <button onClick={()=> dispatch(decrement())}>Decrement</button>
      
      <button onClick={()=> dispatch(incrementBy(5))}>Inc. by 5*</button>      
      <button onClick={()=> dispatch(decrementBy(5))}>Dec. by 5*</button>      
    </div>
  
)}

export default App;
