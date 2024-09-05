/*
[선형 검색 알고리즘 - Linear search algorithmn]

* 가장 간단한 검색 알고리즘 중 하나
* 정렬되지 않은 값에 사용
* 배열이나 리스트와 같은 데이터 구조에서 특정 요소를 찾기 위해 처음부터 끝까지 순차적으로 요소를 하나씩 비교함
* 처음부터 검색하고자하는 값이 나올 때 까지 비교하기 때문에 효율이 떨어짐
* 1. 순차 비교 -> 2. 일치 요소 찾기 있으면 해당 인덱스 -> 3. 모두 비교 후에 일치 요소 없을 경우 -1 리턴


[기본 자바스크립트 내장 선형 검색 메서드 ]

1. indexOf : 배열이 있으면 해당 인덱스, 없으면 -1 반환
2. includes : 값이 있으면 true 없으면 false
3. find : 전달 된 콜백 함수에 만족하는 첫번째 값 리턴, 없으면 undefined 리턴
4. findIndex : 전달 된 콜백 함수에 만족하는 첫번째 값의 인덱스 반환, 없으면 -1 리턴
*/

// 메서드 없이 배열과 값을 전달받아 그 값이 있는지 확인 후 있다면 인덱스 그리고 없다면 -1을 리턴하는 함수 작성
// 해답 보기 전

const linearSearch = (arr, searchVal) => {
  if (arr.length < 1) return -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchVal) return i;
  }

  return -1;
};

console.log(linearSearch([1, 9, 3, 10, 5], 5));
console.log(
  linearSearch([1, 12, 7, 4, 5, 2, 1, 12, 7, 4, 5, 2, 1, 12, 7, 4, 5, 2, 1, 12, 7, 4, 5, 2, 1, 12, 7, 4, 5, 2], 6)
);
console.log(linearSearch([1, 12, 7, 4, 5], 12));
