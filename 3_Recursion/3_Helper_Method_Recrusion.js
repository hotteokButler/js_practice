/*
[Helper Method Recursion]

재귀적이지 않은 외부 함수가 재귀적인 내부 함수(inner function)을 호출하는 패턴이다. 문제 해결을 위한 하나의 접근법이다. 

- 헬퍼 함수 혹은 헬퍼 메소드 재귀라고 부른다. 
- 메인 외부 함수를 개발자가 외부에서 호출한다. 
- 이 외부 함수를  호출할 때 인자를 내부로 전달해 줄 수 있다. 
- 이 외부 함수 내부에는 또 다른 내부 함수가 정의되어 있다. 내부함수는 호출되고 재귀적으로 자기자신을 호출한다. 

 */


// 기본 helper method recursion pattern
const outer = (input) => {
  const outerScopedVar = []; // array or list of data

  const helper = (helperInput) => {
    //outerScopedVar 변경
    helper(helperInput--);
  };

  helper(input);

  return outerScopedVar;
};

//사용 예
// ex) 어느 배열에서 홀수 값을 쉽하는 것 같은 작업

const colletOddValues = (arr) => {
  const result = [];

  const helper = (helperInput) => {
    if (helperInput.length === 0) return;
    
    if( helperInput[0] % 2 !== 0) result.push(helperInput[0]);

    helper(helperInput.slice(1));
  };

  helper(arr);

  return result;
};


console.log(colletOddValues([1,4,6,2,3,4,5,7]))//