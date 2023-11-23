// 문제정보
// https://school.programmers.co.kr/learn/courses/30/lessons/43165?language=javascript

function solution(numbers, target) {
  let answer = 0;

  const dfs = (i, sum) => {
    if (i === numbers.length) {
      if (sum === target) answer++;
      return;
    }

    dfs(i + 1, sum + numbers[i]);
    dfs(i + 1, sum - numbers[i]);
  };
  dfs(0, 0);

  return answer;
}
