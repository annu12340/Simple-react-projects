import React, { useState } from "react";
import "./App.css";

function Board() {
   const [arr, setarr] = useState(Array(9).fill(null));
   const [winner, setwinner] = useState("");

   //  Each individual square
   const renderSquare = (i) => (
      <button className='square' onClick={() => handleClick(i)} value={arr[i]}>
         {arr[i]}
      </button>
   );

   const handleClick = (index) => {
      if (arr[index]) return;
      const squares = [...arr];
      squares[index] = "X";
      setarr(squares);

      calculateWinner(arr);

      //Computer is choosing a number
      let num;
      do {
         num = Math.floor(Math.random() * 9);
         console.log(" NUM IS ", num);
      } while (arr[num] && num != index);
      console.log("number choosen by user is", index);
      console.log("number choosen by comp is", num);
      squares[num] = "O";
      console.log(arr);
      setarr(squares);
   };

   return (
      <div>
         <h1>Tic Tac Toe</h1>
         <small>User vs computer</small>

         <div className='board-row'>
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
         </div>
         <div className='board-row'>
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
         </div>
         <div className='board-row'>
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
         </div>

         <h4 className='winner'>{winner}</h4>
      </div>
   );

   function calculateWinner(arr) {
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
         if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
            let x = `The winner is ${arr[a]}`;
            setwinner(x);
            console.log(x);
            return arr[a];
         }
      }
      console.log("Nothing");
      return null;
   }
}

export default Board;
