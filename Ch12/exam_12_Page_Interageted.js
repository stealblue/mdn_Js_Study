// 함수는 함수 내부로 전달받는 매개변수, 입력을 인수, 출력을 반환값이라고 한다.

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
// 함수 선언문에서 살펴본 바와 같이 함수를 호출할때 함수 이름이 아니라 함수 객체를 가르키는 식별자를 사용해야 한다.
// 함수 이름은 함수 몸체 내부에서만 유효한 식볋자이므로 함수 이름으로 함수를 호출할 수 없다.

// 기명 함수 표현식
var add = function foo (x, y) {
    return x + y;
};
// 함수 객체를 가르키는 식별자로 호출
console.log(add(2, 5)); // 7
// 함수 이름으로 호출하면 ReferenceError가 발생한다.
// 함수 이름은 함수 몸체 내부에서만 유효한 식별자이다.
// console.log(foo(2, 5)); // ReferenceError : foo is not defined
// 함수 참조
console.log(add);
// console.log(sub); // undefined
// 함수 호출
console.log(add(2, 5)); // 7
// console.log(sub(2, 5)) // TypeError : sub is not a function
// 함수 선언문
function add (x, y){
    return x + y;
}
// 함수 표현식
var sub = function sub (x, y){
    return x + y;
}
// 함수 선언문으로 정의한 함수는 함수 선언문 이전에 호출할 수 있다.
// 함수 표현식으로 정의한 함수는 함수 표현식 이전에 호출할 수 없다.
// 함수의 생성 시점이 다르기 때문이다.
// 함수 선언문으로 정의한 함수는 함수를 참조할 수 있고 호출 할 수 있다.
// 함수 호이스팅이라 한다.
// 함수 호이스팅은 변수 호이스팅이랑 미묘하게 다르다.
// 함수 호이스팅은 함수 선언문 이전에 호출하면 함수 호이스팅에 의해 호출이 가능하지만
// (runtime에 평가되므로 함수 표현식의 함수 리터럴도 할당문이 실행되는 지점에 평가되어 함수 객체가 된다.)
// var 키워드로 선언된 변수를 변수 선언문 이전에 참조하면 undefined로 평가된다.(runtime 이전에 실행)
// 함수 표현식으로 함수를 정의하면 함수 호이스팅이 아니고 변수 호이스팅이 발생한다.

// Function 생성자 함수로 생성하는 방식은 일반적이지 읺고 바람직하지 않다. (클로저(closure)를 생성하지 않는 등의 문제)
var add1 = (function (){
    var a = 10;
    return function (x, y){
        return x + y + a;
    }
});자
console.log(add1(1, 2)); // 13
var add2 = (function (){
    var a = 10;
    return new Function ('x', 'y', ' return x + y + a');
});
console.log(add2(1, 2)); // ReferenceError
// 화살표함수(arrow function)
// ES6에 도입된 화살표 함수는 functon 키워드 대신에 화살표(=>)를 사용해 좀 더 간략한 방법으로 함수를 선언할 수 있다.
// 화살표 함수는 항상 익명 함수로 정의한다.
// 기존의 함수 선언문 또는 함수 표현식을 완전히 대체하기 위해 디자인된 것은 아니다.
// 화살표 함수는 기존의 함수보다 표현만 간략한 것이 아니라 내부 동작 또한 간략화되어 있다.
// 생성자 함수로 사용할 수 없고, 기존 함수와 this 바인딩 방식도 다르고, prototype 프로퍼티도 없고 argument 객체도 생성하지 않음
const arrow_add = (x, y) => x + y;
console.log(arrow_add(2, 5)) // 7

// 매개변수를 통해 인수(argument)를 전달한다.
// 함수를 호출하면 함수 몸체내에성 암묵적으로 매개변수가 생성되고 일반 변수와 마찬가지로 undefined로 초기화 된 후 인수가 순서대로 할당된다.
// 함수는 매개변수의 갯수와 인수의 개수가 일치하는지 체크하지 않는다. 인수가 부족해도 에러가 발생하지 않고 할당되지 않은 매개변수의 값은 undefined이다.
// 매개변수보다 인수가 많은 경우는 초과된 인수는 무시한다.(모든 인수는 arguments 객체의 프로퍼티로 보관된다.)
function argum_add(x, y){
    console.log(arguments);
    return x + y;
}
arrow_add(2, 5, 10); // 매개변수가 x, y 두 개이기에 10은 무시

// 자바스크립트는 동적 타입 언어이기에 함수를 정의할 때 적절한 인수가 전달되었는지 확인할 필요가 있다.
// 부적절한 호출을 방지할 수 있도록 타입스크립트와 같은 상위 확장을 도입하는 것도 방법이다.
function err_add(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number'){
        // 매개변수를 통해 전달된 인수의 타입이 부적절할 경우 에러를 발생시킨다.
        throw new TypeError('인수는 모두 숫자값이어야 합니다.');
    }
    return x + y;
}
console.log(err_add(2)); // TypeError : 인수는 모두 숫자값이어야 합니다.
console.log(err_add('a','b')); // TypeError : 인수는 모두 숫자값이어야 합니다.
// 인수가 전달되지 않는 경우 단축평가를 사용해 매개변수에 기본값을 할당하는 방법도 있다.
function add6(a, b, c) {
    a = a || 0;
    b = b || 0;
    c = c || 0;
    return a + b + c;
}
// ES6에 도입된 매개변수 기본값을 사용하면 함수 내에서 수행하던 인수 체크 및 초기화를 간소화 할 수 있다.
// 매개변수 기본값은 매개변수에 인수를 전달하지 않았을 경우와 undefined를 전달할 경우에만 유효하다.
function add7(a = 0, b = 0, c = 0) {
    return a + b + c;
}

// 함수의 매개변수는 코드를 이해하는데 방해되는 요소이므로 이상적인 매개변수 개수는 0개이다.
// 매개변수의 개수가 많을수록 여러가지 일을 한다는 증거이므로 이상적인 함수는 한가지 일만 해야하며 가급적 작게 만들어야 한다.
// 매개변수의 개수는 3개가 넘지 않을 것을 권장한다.

// 객체를 인수로 사용하는 경우 프로퍼티 키만 정확히 지정하면 매개변수의 순서는 신경쓰지 않아도 된다.
// 주의할 것은 함수 외부에서 함수 내부로 전달한 객체를 함수 내부에서 변경하면 함수 외부의 객체가 변경되는 부수효과가 발생한다.

// 함수는 return 키워드와 표현식(반환값)으로 이뤄진 반환문을 사용해 실행 결과를 외부로 반환할 수 있다.
// 함수 호출은 표현식이다.
// 반환문은 두 가지 역할을 한다. 1. 함수의 실행을 중단하고 함수 몸체를 빠져나간다.
// 2. 반환문은 return 키워드 뒤에 반환값으로 사용할 표현식을 명시적으로 지정하지 않으면 undefined가 반환된다.
// 반환문은 생략이 가능하다. (생략이 암묵적으로 undefined를 반환)
// return 키워드와 반환값 사이에 줄바꿈이 있으면 세미콜론 자동 삽입 기능(ASI)에 의해 반환값이 무시된다.

// function에서 원시값과 객체는 복사되어 전달된다. 그리고 객체 값은 변경될 수 있다.
// 문제의 해결법 중 하나는 객체를 불멸객체로 만드는 것이다.
// (객체의 방어적 복사, 깊은 복사로 새로운 객체를 생성하고 재할당을 통해 교체)

// 외부 상태를 변경하지도 않고 외부 상태에 의존하지도 않는 함수를 순수 함수라고 한다.
// 순수 함수를 통해 프로그램의 안정성을 높이려는 프로그래밍 패러다임을 함수형 프로그래밍이라고 한다.

// 함수 정의와 동시에 즉시 호출되는 함수를 즉시 실행 함수(Immediately Invoked Function Expression)라고 한다.
// 단 한 번만 호출되며 다시 호출할 수 없다.
// 실행함수는 익명 함수로 사용하는 것이 일반적이다.
// 실행함수는 그룹 연산자로 반드시 감싸야 한다. (<-> SyntaxError : Function statements require a function name
// 그룹 연산자 내의 기명 함수는 함수 선언문이 아니라 함수 리터럴로 평가되며 함수 이름은 함수 몸통 내부에서만
// 참조할 수 있는 식별자이므로 즉시 실행 함수를 다시 호출할 수 없다.
// (function (){
//
// })

// 재귀 함수(recursive function)는 자기 자신을 호출하는 행위를 하는 함수이다.
// 반복되는 처리를 위해 사용한다.(반복문 사용없이 반복행위를 구현할 수 있다.)
// 재귀 함수는 자신을 무한 재귀 호출한다. 따라서 재귀 함수 내에는 재귀 호출을 멈출 수 있도록 탈출조건을 만들어야 한다.
function countdown(n) {
    if (n < 10) return;
    console.log(n);
    countdown(n - 1);
}
countdown(10);
// 팩토리얼 구현
function factorial(n) {
    if (n <= 1) return 1; // 탈출조건 : n이 1일 때 재귀 호출을 멈춘다.
    return n * factorial(n - 1); // 재귀호출
}
// 함수 아직 덜 공부
