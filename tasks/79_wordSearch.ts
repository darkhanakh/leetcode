const exist = (board: string[][], word: string): boolean => {
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const ROWS = board.length;
  const COLS = board[0].length;
  const path = new Set<string>();

  const dfs = (row: number, col: number, index: number): boolean => {
    if (index === word.length) return true;
    if (row < 0 || row >= ROWS || col < 0 || col >= COLS) return false;
    if (path.has(`${row}-${col}`) || board[row][col] !== word[index])
      return false;

    path.add(`${row}-${col}`);
    for (const [r, c] of directions) {
      if (dfs(row + r, col + c, index + 1)) return true;
    }
    path.delete(`${row}-${col}`);
    return false;
  };

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (dfs(r, c, 0)) return true;
    }
  }
  return false;
};
