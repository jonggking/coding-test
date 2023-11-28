function solution(n, computers) {
  let answer = 0;
  let visited = Array(n).fill(0);

  function dfs(targetComputer) {
    visited[targetComputer] = -1;
    for (let i = 0; i < computers[targetComputer].length; i++) {
      if (visited[i] === -1) continue;
      if (computers[targetComputer][i] === 1) {
        dfs(i);
      }
    }
  }

  for (let i = 0; i < visited.length; i++) {
    if (visited[i] === 0) {
      answer++;
      dfs(i);
    }
  }
  return answer;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
); //2

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ])
); //2
