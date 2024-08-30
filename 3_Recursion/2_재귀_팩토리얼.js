/*
[factorial 구하는 함수]

(팩토리얼 = 계승 : 1부터 n까지의 자연수를 모두 곱하는 것)
*/

const getFactorial = (num) => {
  if (num === 1) return 1;
  return num * getFactorial(num - 1);
};

console.log(getFactorial(10));
