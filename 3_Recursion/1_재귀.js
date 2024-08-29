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