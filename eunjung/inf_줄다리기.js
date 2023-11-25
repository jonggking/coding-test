function solution(nums) {
  let answer = 0;
  //이 차원 배열(관계 테이블) 만들기
  const relation = makeRelationTable(nums);

  const dfs = (depth, current_student, visited) => {
    //줄세우기 가능
    if (depth === 6) {
      answer++;
      return;
    }
    visited[current_student] = -1;
    for (let i = 1; i <= 7; i++) {
      if (visited[i] === -1) continue;
      if (relation[current_student][i] === -1) continue;
      dfs(depth + 1, i, visited.slice());
    }
  };

  for (let student = 1; student <= 7; student++) {
    dfs(0, student, [0, 0, 0, 0, 0, 0, 0, 0]);
  }

  return answer;
}

const makeRelationTable = (nums) => {
  let relation = [];
  for (let i = 0; i <= 7; i++) {
    relation[i] = new Array(8).fill(0);
  }
  for (let i = 0; i < nums.length; i++) {
    const [student1, student2] = nums[i];
    relation[student1][student2] = -1;
    relation[student2][student1] = -1;
  }
  return relation;
};

console.log(
  solution([
    [1, 3],
    [5, 7],
    [4, 2],
  ])
);

console.log(
  solution([
    [3, 2],
    [3, 5],
    [5, 2],
    [7, 3],
  ])
);
