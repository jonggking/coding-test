//문제정보
//https://school.programmers.co.kr/learn/courses/30/lessons/42897

function solution(money) {
  let dp1 = Array(money.length).fill(0);
  let dp2 = Array(money.length).fill(0);

  //1번집 털 때
  dp1[0] = money[0];
  dp1[1] = Math.max(money[0], money[1]);
  for (let i = 2; i < money.length - 1; i++) {
    dp1[i] = Math.max(dp1[i - 2] + money[i], dp1[i - 1]);
  }

  //1번집 안털 때
  dp2[0] = 0;
  dp2[1] = money[1];
  for (let i = 2; i < money.length; i++) {
    dp2[i] = Math.max(dp2[i - 2] + money[i], dp2[i - 1]);
  }

  return Math.max(dp1[money.length - 2], dp2[money.length - 1]);
}
