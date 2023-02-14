// 함수를 정의하는 4가지 방법
// 1. 함수 선언문
function add (x, y){
    return x + y;
}
// 2. 함수 표현식
var add2 = function (x, y){
    return x + y;
};
// 3. Function 생성자 함수
var add3 = new Function('x', 'y', 'return x + y');
// 4. 화살표 함수
var add4 = (x, y) => x + y; // 화살표 함수는 생소하니 좀 더 공부하자.

// console.dir()은 함수 객체의 프로퍼티까지 출력한다.(Node.js에서는 console.log()와 같은 결과 출력)
console.dir(add); // web browser console : add(x, y) / terminal : [Function: add]
console.dir(add2); // web browser console : add2(x, y) / terminal : [Function: add2]
console.dir(add3); // web browser console : anonymous(x,y ) / terminal : [Function: anonymous]
console.dir(add4); // web browser console : add4() / terminal : [Function: add4]
console.log(add); // web browser console : add (x, y){return x + y;} / terminal : [Function: add]
console.log(add2); // web browser console : (x, y){return x + y;} / terminal : [Function: add2]
console.log(add3); // web browser console : anonymous(x,y) {return x + y} / terminal : [Function: anonymous]
console.log(add4); // web browser console : (x, y) => x + y / terminal : [Function: add4]

// 함수 선언문은 함수 리터럴(값을 생성하는 표기방식)과 형태가 동일하나 이름이 생략될 수 없다.
// 함수 선언문과 함수 리터럴이 동일하기에 기명 함수 리터럴은 함수 선언문과 함수 리터럴 표현식으로 해석될 가능성이 있다.
// 선언문은 문이기에 변수에 할당할 수 없다. 하지만 예제를 보면 할당될 수 있는 것처럼 보인다.
// ex)
var add5 = function add_Sum(x, y){
    return x + y;
}
console.log(add5(2,5)); // 함수 이름으로 호출한 것이 아니고 함수 객체 식별자로 호출한다.
// { }이 중의적인 코드라서 어떻게 해석되는가에 따라 코드 블록(블록문) 또는 객체 리터럴로 해석할 수 있다.
// 기명 함수 리터럴도 중의적인 코드이다. 단독으로 사용하면(피연산자로 사용x) 함수 선언문으로 해석하고,
// 함수 리터럴을 변수에 할당하거나 피연산자로 사용할 경우 함수 리터럴 표현식으로 해석한다.
// 둘 다 함수를 생성한다는 점에서는 동일하지만 호출에서 차이가 있다.
// (함수 선언문 : 호출 가능 / 함수 리터럴 표현식 : 호출 불가능)
// ex)
// function foo() {console.log('foo'); }
// (function  bar() {console.log('bar'); });
// bar();

// 함수는 값처럼 변수에 할당할 수도 있고 프로퍼티 값이 될 수도 있으며 배열의 요소도 될 수 있다.(일급 객체)
// 일급 객체는 값의 성질을 갖는 객체를 말한다.
// 함수 리미털로 생성한 함수 객체를 변수에 할당할 수 있다. 이러한 정의 방식을 함수 표현식이라고 한다.
// 함수 표현식의 함수 리미털은 함수 이름을 생략하는 것이 일반적이다.(익명 함수)