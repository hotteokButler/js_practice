/*
[Frequency counters]

> object 또는 set를 이용해서 다양한 값과 빈도를 수집
> 서로 비슷한 값으로 구성 되어 있는지, 
  서로 간의 애너그램(서로 같은 철자로 구성된건지),
  값이 다른 값이 포함되는지 여부,
  두 개 이상 또는 특정하게 발생하는 빈도 확인
> 배열과 문자열의 중첩 루프 또는 O(N^2) 연산을 대신할 수 있음
*/

/*
 (ex01) 
 두 배열을 받아 , 요소의 갯수가 같으면서 두번째 인자의 배열이 첫번째 인자의 배열의 제곱의 값을 갖고 있는 함수 same을 작성하시오.
 (단, 순서는 상관 없다)

 same([1,2,3],[4,1,9]); // true
 same([1,2,3],[1,9]); // false
 same([1,2,1],[4,4,1]); // false (must be sane frequency)

 */

const same = (arr1, arr2) => {
  // 배열의 크기가 같지 않으면 비교 할 필요 없이 return false
  if (arr1.length !== arr2.length) return false;
  // arr1 배열 순회
  for (const arr1Elem of arr1) {
    //arr1 요소의 인덱스
    const idx = arr2.indexOf(Math.pow(arr1Elem, 2));
    if (idx > -1) { // 인덱스가 있으면 arr2에서 제거해서 중복으로 확인 되는 것 방지
      arr2.splice(idx, 1);
    } else { //없으면 바로 false 리턴
      return false;
    }
  }
  return true; //모든 조건 만족하면 true
  //
};

console.log(same([1, 2, 3], [4, 1, 9]));

console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 1], [4, 4, 1]));

console.log(same([1, 2, 1, 5, 3], [4, 1, 1, 25, 9])); //true

const t1 = performance.now();
console.log(same([1, 2, 1, 5, 3], [4, 4, 1, 25, 9])); //false
const t2 = performance.now();
console.log(`same 걸린 시간 : ${(t2 - t1) / 1000}s`);
