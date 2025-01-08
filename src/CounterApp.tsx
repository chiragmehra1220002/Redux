import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {increment,decrement,reset} from './feature/counterSlice'


import './CounterApp.css';

const CounterApp: React.FC = () => {

    const {count}:any = useSelector<Object>((state: any)=>{
        return state.counter;
    })
    const dispatch = useDispatch<any>();
  return (
    <>
      <h2>count:{count}</h2>
      <button 
      onClick={()=>{
        dispatch(increment());
      }}>
        Increase
        </button>
      <button 
      onClick={()=>
      {
        dispatch(reset());
      }}>Reset</button>
      <button
       onClick={()=>{
        dispatch(decrement());
       }}>Decrease</button>
    </>
    
  )
}


export default CounterApp;
