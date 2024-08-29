/*
[Recursion - 재귀]

- 자기 자신을 호출하는 절차

-  재귀가 쓰이는 곳
  > JSON.parse / JSON.stringify
  > document.getElementById, querySelector and DOM 탐색 알고리즘
    (*DOM은 요소가 중첩된 트리 구조)
  > 객체 순회
  > 복잡한 데이터 구조 (데이터 구조, 트리, 그래프)를 순회, 그 안에 있는 요소 검색 하는 경우


[call stack] - 재귀와 밀접하게 관련된 개념
- JavaScript는 단일 스레드 프로그래밍 언어이므로, 단일 호출 스택이 존재. 
  =>한 번에 하나의 일(Task)만 처리할 수 있다
- 함수를 실행하면 해당 함수의 기록을 스택 맨 위에 추가(Push) ,
  함수를 결과 값을 반환(함수가 종료)하면 스택에 쌓여있던 함수는 제거(Pop) 

*/

/*
[Recursion Function]

- 동일한 함수를 계속 호출하면서 하나의 함수가 자신을 재귀적으로 호출
 (중단 포인트를 만날 때 까지 같은 함수를 계속 호출)
- 중단 조건은 마지막 라인에
- 매번 다른 input을 통해 호출

*/

//ex
const countDown = (num) => {
  if (num <= 0) {
    console.log('끝!!!!!');
    return;
  }
  console.log(num);
  num--;
  countDown(num);
};

countDown(5);
