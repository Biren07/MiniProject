'use client'
import Square from './square'
import React, {  useState } from 'react'
import Winner from './winner'

const Board = () => {
    const [squares,setSquares]=useState(Array(9).fill(null));
    const [isNext,setIsNext]=useState(true);
    function handleClick(i)
    {
        if(squares[i] || Winner(squares))
        {
            return;
        }
        const nextSquares=squares.slice();
        if(isNext)
        {
        nextSquares[i]='X';
        }
        else
        {
            nextSquares[i]='O';
        }
        setSquares(nextSquares);
        setIsNext(!isNext);
    }
    const winner=Winner(squares);
    let s;
    if(winner)
    {
        s="Winner is "+winner;
    }
    else{
        s="Next Player is "+(isNext?'X':'O');
    }
  return (

    <div className='border-2 m-20 border-black'>
    <div className="items-center justify-center flex m-2">{s}</div>
    <div className="flex justify-center items-center">
        <Square value={squares[0]} onHandleClick={()=>handleClick(0)} />
        <Square value={squares[1]} onHandleClick={()=>handleClick(1)}/>
        <Square value={squares[2]} onHandleClick={()=>handleClick(2)} />
    </div>
    <div className="flex justify-center items-center">
        <Square value={squares[3]} onHandleClick={()=>handleClick(3)} />
        <Square value={squares[4]} onHandleClick={()=>handleClick(4)} />
        <Square value={squares[5]} onHandleClick={()=>handleClick(5)} />
    </div>
    <div className="flex justify-center items-center">
        <Square value={squares[6]} onHandleClick={()=>handleClick(6)} />
        <Square value={squares[7]} onHandleClick={()=>handleClick(7)}  />
        <Square value={squares[8]} onHandleClick={()=>handleClick(8)}/>
    </div>
    </div>
  )
}

export default Board