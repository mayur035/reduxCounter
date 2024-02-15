import React from 'react'
import './App.css';
import Count from './components/Counter/Count';
import {useDispatch} from 'react-redux'

function App() {
  const dispatch = useDispatch();
  return (
  <React.Fragment>
    <button onClick={(e)=>{dispatch({type:'INCREMENT'})}}>Increment</button>
    <Count/>
    <button  onClick={(e)=>{dispatch({type:'DECREMENT'})}}>Decrement</button>
  </React.Fragment>
  );
}

export default App;
