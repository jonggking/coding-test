// 문제정보
// https://school.programmers.co.kr/learn/courses/30/lessons/64065

function solution(str) {
  let strToArr = JSON.parse(str.replaceAll("{", "[").replaceAll("}", "]"));
  // let strToArr = str.slice(2,-2).split('},{').map(item=> item.split(',').map(Number))도 가능하다.
  strToArr.sort((a, b) => a.length - b.length);
  let flatArr = strToArr.flat();
  let uniqueArr = Array.from(new Set(flatArr));
  return uniqueArr;
}
