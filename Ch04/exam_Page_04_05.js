// 변수를 참조하는 코드가 앞에 있음에도 referenceError가 뜨지 않고 undefined가 console에 나온다.
// 왜냐하면 선언문은 runtime 하기 이전에 먼저 실행이 되기 때문이다. 이러한 특징을 variable hosting이라 한다.
console.log(score);
var score;
