import React, { useState } from "react";
import "./App.css";

function App() {
  const initialOptions = [
    { id: 1, name: "React", votes: 0 },
    { id: 2, name: "Java", votes: 0 },
    { id: 3, name: "Python", votes: 0 },
    { id: 4, name: "C++", votes: 0 },
    { id: 5, name: "JavaScript", votes: 0 },
    { id: 6, name: "AI", votes: 0 },
    { id: 7, name: "Machine Learning", votes: 0 },
    { id: 8, name: "Cyber Security", votes: 0 },
    { id: 9, name: "Cloud Computing", votes: 0 },
    { id: 10, name: "Data Science", votes: 0 }
  ];

  const [options, setOptions] = useState(initialOptions);
  const [voted, setVoted] = useState(false);

  const handleVote = (id) => {
    if (voted) return;

    const updated = options.map(option =>
      option.id === id
        ? { ...option, votes: option.votes + 1 }
        : option
    );

    setOptions(updated);
    setVoted(true);
  };

  const resetVotes = () => {
    const reset = options.map(option => ({ ...option, votes: 0 }));
    setOptions(reset);
    setVoted(false);
  };

  const maxVotes = Math.max(...options.map(o => o.votes));

  const leadingOption = options.find(o => o.votes === maxVotes && maxVotes !== 0);

  return (
    <div className="main-container">
      <h1>Voting App</h1>

      {leadingOption && (
        <h2 className="leader">
          🏆 Leading: {leadingOption.name}
        </h2>
      )}

      {voted && <p className="message">You have already voted!</p>}

      <div className="container">
        {options.map(option => (
          <div
            key={option.id}
            className="card"
            style={{
              backgroundColor:
                option.votes === maxVotes && maxVotes !== 0
                  ? "lightgreen"
                  : "white"
            }}
          >
            <h3>{option.name}</h3>
            <p>Votes: {option.votes}</p>

            <button
              onClick={() => handleVote(option.id)}
              disabled={voted}
            >
              Vote
            </button>
          </div>
        ))}
      </div>

      <button onClick={resetVotes} className="reset-btn">
        Reset Votes
      </button>

      <div className="footer">
        Created by Lavanya 💙
      </div>
    </div>
  );
}

export default App;
