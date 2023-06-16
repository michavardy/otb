"use client"
import { useState } from 'react';

export default function NewGameResults() {
    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('');
    const [player1Color, setPlayer1Color] = useState('white');
    const [player2Color, setPlayer2Color] = useState('black');
    const [timeControl, setTimeControl] = useState('1min');
    const [winner, setWinner] = useState('');
    const [comments, setComments] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission here
      // You can access the form values using the state variables
      console.log({
        player1,
        player2,
        player1Color,
        player2Color,
        timeControl,
        winner,
        comments
      });
    };
    return(
        <div className="flex max-w-md justify-center">
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1">Player 1:</label>
          <input
            type="text"
            className="w-full px-2 py-1 border rounded"
            value={player1}
            onChange={(e) => setPlayer1(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Player 2:</label>
          <input
            type="text"
            className="w-full px-2 py-1 border rounded"
            value={player2}
            onChange={(e) => setPlayer2(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Player 1 Color:</label>
          <select
            className="w-full px-2 py-1 border rounded"
            value={player1Color}
            onChange={(e) => setPlayer1Color(e.target.value)}
          >
            <option value="white">White</option>
            <option value="black">Black</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Player 2 Color:</label>
          <select
            className="w-full px-2 py-1 border rounded"
            value={player2Color}
            onChange={(e) => setPlayer2Color(e.target.value)}
          >
            <option value="white">White</option>
            <option value="black">Black</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Time Control:</label>
          <select
            className="w-full px-2 py-1 border rounded"
            value={timeControl}
            onChange={(e) => setTimeControl(e.target.value)}
          >
            <option value="1min">1 min</option>
            <option value="5min">5 min</option>
            <option value="10min">10 min</option>
            <option value="20min">20 min</option>
            <option value="30min">30 min</option>
            <option value="None">None</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Winner:</label>
          <input
            type="text"
            className="w-full px-2 py-1 border rounded"
            value={winner}
            onChange={(e) => setWinner(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Comments:</label>
          <textarea
            className="w-full px-2 py-1 border rounded"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
      </div>

    )
}