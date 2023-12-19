
import './App.css';
import React, { useState } from 'react';

function Square({value,onsquareClick}){
    
  return(
    <button className='square' onClick={onsquareClick}>{value}</button>
  )
}

export default function Bord(){

let[lock,setLock]=useState(true);
let[squares,setSquares]=useState(Array(9).fill(null)) 
let nextsquare=squares.slice() 
 function handleClick(i){
  if(calculateWinner(squares) || squares[i]){
    return;
  }
if(lock){
  nextsquare[i]="X";
}else{
  nextsquare[i]="O";
}

setSquares(nextsquare);
 setLock(!lock);
 }
 let Winner=calculateWinner(squares);
 let status;
 if(Winner){
  status=`Winners is  ${Winner} `
 }else{
  status= `Next Player Is  ${lock?'X':'O'}`
 }
 function reset(){
  setSquares(Array(9).fill(null))
  setLock(true)
 }
 
  return (
    <div className='container'>
    <h1 className='title'>{status}</h1>
      <div className='row'>
     <Square value={squares[0]} onsquareClick={()=>{handleClick(0)}}/>
        <Square value={squares[1]} onsquareClick={() => { handleClick(1) }} />
        <Square value={squares[2]} onsquareClick={() => { handleClick(2) }} />
        </div>
      <div className='row'>
        <Square value={squares[3]} onsquareClick={() => { handleClick(3) }} />
        <Square value={squares[4]} onsquareClick={() => { handleClick(4) }} />
        <Square value={squares[5]} onsquareClick={() => { handleClick(5) }} />
      </div>
      <div className='row'>
        <Square value={squares[6]} onsquareClick={() => { handleClick(6) }} />
        <Square value={squares[7]} onsquareClick={() => { handleClick(7) }} />
        <Square value={squares[8]} onsquareClick={() => { handleClick(8) }} />
      </div>
      <button
        className="reset"
        onClick={()=>{reset()}}
      >
        Reset
      </button>
    </div>

  )
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

