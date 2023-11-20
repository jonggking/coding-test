function solution(numbers) {
  //[0,0,0] => "0"
  if (numbers.reduce((a, b) => a + b) === 0) {
    return "0";
  }
  let toString = numbers.map(String);
  let sort = toString.sort((a, b) => b + a - (a + b)).join("");
  return sort;
}

solution([6, 10, 2]); //"6210"
solution([3, 30, 34, 5, 9]); //"9534330"
solution([0, 0, 0]); //"0"
