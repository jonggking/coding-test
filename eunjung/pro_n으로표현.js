function solution(N, number) {
  let sets = Array.from(new Array(10), () => new Set());
  if (N == number) {
    return 1;
  }
  for (i = 1; i < sets.length; i++) {
    sets[i].add(Number(String(N).repeat(i)));
  }
  for (i = 2; i <= 9; i++) {
    for (j = 1; j < i; j++) {
      for (let first of sets[j]) {
        for (let second of sets[i - j]) {
          if (second !== 0) {
            //JavaScript에서는 0으로 나누는 경우 에러 대신 Infinity나 -Infinity를 반환함.
            sets[i].add(first + second);
            sets[i].add(first - second);
            sets[i].add(first * second);
            sets[i].add(Math.floor(first / second));
          }
        }
      }
    }
    if (sets[i].has(number)) return i;
  }
  return -1;
}

console.log(solution(5, 12));
