// https://school.programmers.co.kr/learn/courses/30/lessons/43164

function solution(tickets) {
  let answer = ["ICN"];
  //key, value로 모두 리스트화.
  let flightList = {};
  for (const [from, to] of tickets) {
    if (!(from in flightList)) {
      flightList[from] = [];
    }
    flightList[from].push(to);
  }
  //내림차순 정렬
  for (const key in flightList) {
    flightList[key].sort((a, b) => (a > b ? -1 : 1));
  }

  //만날 때마다 pop하고 정답에 추가
  const flight = (from) => {
    const next = flightList[from].pop();
    answer.push(next);
    if (answer.length === tickets.length + 1) {
      return;
    }
    flight(next);
  };

  //첫번째 비행
  flight("ICN");
  return answer;
}

console.log(
  solution([
    ["ICN", "JFK"],
    ["HND", "IAD"],
    ["JFK", "HND"],
  ])
); //[ 'ICN', 'JFK', 'HND', 'IAD' ]

console.log(
  solution([
    ["ICN", "SFO"],
    ["ICN", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "ICN"],
    ["ATL", "SFO"],
  ])
); //[ 'ICN', 'ATL', 'ICN', 'SFO', 'ATL', 'SFO' ]

function solution(tickets) {
  let answer = [];
  const result = [];
  const visited = [];

  tickets.sort();

  const len = tickets.length;
  const dfs = (str, count) => {
    result.push(str);

    if (count === len) {
      answer = result;
      return true;
    }

    for (let i = 0; i < len; i++) {
      if (!visited[i] && tickets[i][0] === str) {
        visited[i] = true;

        if (dfs(tickets[i][1], count + 1)) return true;

        visited[i] = false;
      }
    }

    result.pop();

    return false;
  };

  dfs("ICN", 0);

  return answer;
}
