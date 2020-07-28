import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementBy, decrementBy } from './actions';


const App = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();  

  return (
    <div className="App">
      <div className="App-loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>        
      </div>
     
      <div>
        <h1>Counter { counter }</h1>
        <button className="App-button" onClick={()=> dispatch(increment())}>Increment+</button>
        <button className="App-button" onClick={()=> dispatch(decrement())}>Decrement</button>
        
        <button className="App-button" onClick={()=> dispatch(incrementBy(5))}>Inc. by 5*</button>      
        <button className="App-button" onClick={()=> dispatch(decrementBy(5))}>Dec. by 5*</button>      
      </div>
    </div>
  
)}

export default App;
