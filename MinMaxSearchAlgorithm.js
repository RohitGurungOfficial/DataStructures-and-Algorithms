/*
    Minimax is a decision rule used in artificial intelligence, decision theory, game theory, statistics and philosophy for minimizing the possible loss for a worst case scenario.
    
    A minimax algorithm is a recursive algorithm for choosing the next move in an n-player game, usually a two-player game.
    
    Source: https://en.wikipedia.org/wiki/Minimax

    Eg: In chess, the best move can be decided by going through all the possible moves and calculating the total number of pieces remaining in each situation and deciding on one according to the highest number.
*/

const position = {
  value,
  possibilities
};

// minimax = func => Recurrsive function to carry out minmax search alogrithm
// position = Number => the value that needs to be evaluated && array with multiple possibilities
// depth = Number => how many future steps should be looked into
// maximizingPlayer = Boolean => Is it looking for maximum or minimim number
function minimax(position, depth, maximizingPlayer) {
  if (depth === 0) {
    //or the game is ended
    return position.value;
  }

  if (maximizingPlayer) {
    // looking for maximum number
    maxVal = -Infinity;
    position.possibilities.map(val => {
      newPosition = minimax(val, depth - 1, false);
      maxVal = Math.max(newPosition, maxVal);
    });
    return maxVal;
  } //looking for minimum number
  else {
    mainVal = Infinity;
    position.possibilities.map(val => {
      newPosition = minimax(val, depth - 1, true);
      minVal = Math.min(newPosition, minVal);
    });
    return minVal;
  }
}
