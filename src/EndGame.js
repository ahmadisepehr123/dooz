import React from "react";

function EndGame({ clearHistory, winCount, restartGame, player, draw }) {
  return (
    <div className="end-game-screen">
      {!draw && <span className="win-text">{player ? "O  برنده بازیکن"  : "X  برنده بازیکن" }</span>}
      {draw && <span className="win-text">Draw</span>}

      <span className="win-history">
      {winCount.A}:  X  برد های بازیکن 
        <br />
        {winCount.B}:  O  برد های بازیکن   
      </span>

      <button className="btn" onClick={restartGame}>
        بازی دوباره
      </button>
      <button className="btn" onClick={clearHistory}>
        حذف تاریخچه
      </button>
    </div>
  );
}

export default EndGame;
