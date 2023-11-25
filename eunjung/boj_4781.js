const fs = require("fs");
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));
console.log(input);

const makeAnwer = (idx) => {
  const [num, budget] = input[idx];
  if (num === 0 && budget === 0) return;
  const candy_list = input.slice(idx + 1, idx + 1 + num);
  console.log(solution(budget, candy_list));
  makeAnwer(idx + 1 + num);
};

function solution(budget, candy_list) {
  const dp = new Array(budget * 100 + 1).fill(0);
  //사탕 다 돌면서 dp테이블에 넣기
  for (let [calorie, cost] of candy_list) {
    if (cost > budget) continue;
    dp[Math.round(cost * 100)] = calorie;
  }
  //dp돌기
  for (let i = 1; i <= budget * 100; i++) {
    for (let j = 1; j < i; j++) {
      dp[i] = Math.max(dp[j] + dp[i - j], dp[i]);
    }
  }
  return dp[budget * 100];
}

makeAnwer(0);

// console.log(
//   solution(8.0, [
//     [700, 7.0],
//     [199, 2.0],
//   ])
// );

// console.log(
//   solution(8.0, [
//     [700, 7.0],
//     [299, 3.0],
//     [499, 5.0],
//   ])
// );
