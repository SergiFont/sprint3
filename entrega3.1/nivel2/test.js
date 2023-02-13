function generateRandomScores(...players) {
    let scores = [];
    for (let player of players) {
      const score = Math.random() * 100;
      scores.push({ player, score });
    }
    return scores;
  }
  
  console.log(generateRandomScores("player1", "player2", "player3"));