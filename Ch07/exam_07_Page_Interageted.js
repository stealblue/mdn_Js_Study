// 연산자
// 단항 산술 연산자
// ++, --, +, -가 단항 산술 연산자이다. 암묵적 할당이 이뤄진다.
// ++/-- 단항 산술 연산자
var x = 5;
var result;
// 증감 단항 산술 연산자
//             선증감   /      후증감
//  선할당                    s++, s--
//  후할당    ++s,--s
// 선할당 후증가(postfix increment operator)
result = x++;
console.log(`result : ${result}  
x : ${x}`);
// 선증가 후할당(prefix increment operator)
result = ++x;
console.log(`result : ${result}  
x : ${x}`);
// 선할당 후감소(postfix decrement operator)
result = x--;
console.log(`result : ${result}  
x : ${x}`);
// 선증가 후할당(prefix decrement operator)
result = --x;
console.log(`result : ${result}  
x : ${x}`);
// + 단항 산술자는 숫자타입이 아닌 피연산자에게 사용시 숫자 타입으로 변환하여 반환한다.
var s = '1';
// 문자열을 숫자로 타입 변환한다.
console.log(+s); // 1
console.log(s);  // "1"로 부수효과는 없다.
s = true;
// 논리 값을 숫자로 타입 변환한다.
console.log(+s); // 1
console.log(s); // true로 부수효과는 없다.
s = false;
// 논리 값을 숫자로 타입 반환한다.
console.log(+s); // 0
console.log(s); // false로 부수효과는 없다.
s = 'Hello';
// 문자열을 숫자로 타입 변환할 수 없으므로 NaN을 반환한다.
console.log(+s); // NaN
console.log(s); // "Hello"로 부수효과는 없다.
// + 단항 산술 연산자는 피연산자 중 하나 이상이 문자열일 경우 문자열 연결 연산자로 동작한다.
s = 1 + 2;
console.log(s);
s = 1 + '2';
console.log(s);
s = 1 + 'Hello';
console.log(s);
// - 단항 산술 연산자는 피연산자의 부호를 반전한 값으로 반환한다. 부수 효과는 없다.
-(-10); // 10
console.log(-(-10)); // 부호를 반전한다.
-'10'; // -10
console.log(-'10'); // 문자열을 숫자로 타입 변환후 반전한 값으로 반환한다.
console.log(-'-10'); // 문자열을 숫자로 타입 변환후 반전한 값으로 반환한다.
-true; // false
console.log(-true); // 논리 값을 숫자로 타입 변환후 반전한 값으로 반환한다.
-'Hello'; // NaN
console.log(-'Hello'); // 문자열은 숫자로 타입 반환할 수 없으므로 NaN을 반환한다.
// 할당 연산자(assignment operator)는 우항에 있는 피연산자의 평가 결과를 좌항에 있는 변수에 할당한다. 부수효과가 있다.
// =, +=, 1=, *=, /=, %=
var a;
a = 10;
console.log(a);
a += 5;
console.log(a);
a -= 5;
console.log(a);
a *= 5;
console.log(a);
a /= 5;
console.log(a);
a %= 5;
console.log(a);
a = 'my name is ';
a += 'Lee';
console.log(a); //문자열 연결 연산자도 가능
// 할당문은 표현식일까 아닐까를 살펴보는 예제
var d;
console.log(d = 10);// 10 할당문은 표현식인 문이다.
var z, x, c;
z = x = c = 0; // 연쇄 할당으로 오른쪽부터 진행된다. c = 0 x = 0 z = 0
console.log(z, x, c);
// 비교 연산자(comparison operator)
// 좌항과 우항의 피연산자를 비교 후 그 결과를 boolean 값으로 반환
// 주로 제어문의 조건식에 쓰인다.
// 동등 비교 연산자(==, !=)와 일치 비교 연산자(===, !==)가 있다.
// 동등 비교 연산자는 먼저 암묵적 타입 변환을 통해 타입을 일치시킨 후 값은 값인지 비교 (타입이 다르더라도 값이 값다면 true)
// 즉 동등 비교 연산자 (같은 타입 비교 x, 같은 값 비교 o), 일치 비교 연산자 (타입과 값이 같은지 둘 다 비교 o)
console.log(NaN === NaN); // false NaN은 유일하게 자신과 일치하지 않는 값이다. 주의하자
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(10)); // false
console.log(Number.isNaN(1+NaN)); // true
console.log(Number.isNaN(1+null)); // false
console.log(Number.isNaN(1+undefined)); // true
// 숫자 0은 음이든 양이든 비교 연산자의 결과가 모두 true이다.
// Object.is method는 보다 정확한 비교 결과를 반환한다.
console.log(Object.is(-0, 0));
console.log(Object.is(NaN, NaN));

// 대소 관계 비교 연산자
// >, <, <=, >=

// 삼항 조건 연산자(ternary operator)
// (조건식 ? true일시 반환값 : false일시 반환값)
// 평가 결과가 boolean이 아닐시 암묵적 타입 변환
// if else 조건문으로 유사하게 처리 가능하지만 표현식에 사용 x (삼항 비교 연산자는 값처럼 사용가능)
var r = 10;
r = x % 2? '홀수' : '짝수';
console.log(r);
// 논리 연산자(logical operator)
// 우항과 좌항의 피연산자(부정 논리 연산자의 경우 우항의 피연산자)를 논리 연산한다.
// ||(논리합, OR), &&(논리곱, AND), !(부정, NOT)
// 논리합 연산자
console.log(true || true); // true
console.log(true || false); //true
console.log(false || true); // true
console.log(false || false); // false
// 논리곱 연산자
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
// 논리 부정 연산자
console.log(!true);
console.log(!false);
// 논리 부정 연산자는 언제나 boolean 값을 반환한다.
// 암묵적 타입 변환하기에 피연산자가 반드시 boolean 값일 필요는 없다.
console.log(!0);
console.log(!'Hello');
// 논리합, 논리곱 연산자의 결과 값이 boolean값이 아닐 수도 있다.
// 논리합, 논리곱 연산자 표현식은 언제나 2개의 피연산자 중 어느 한쪽으로 평가된다.
// boolean 값이 아닐시 논리합 연산자는 하나만 true로 평가되어도 true를 반환하는데 첫번째 피연산자의 값이 Truthy라 그대로 반환
// boolean 값이 아닐시 논리곱 연산자는 두개 다 true로 평가되어야 true를 반환하는데 두번째 피연산자의 값이 Truthy라 그대로 반환
// 논리 연산의 결과를 결정하는 피연산자를 타입 변환하지 않고 그대로 반환하는 걸 단축 평가(short-circuit evaluation)라고 한다.
// 표현식을 평가하는 도중에 평가결과가 확정된 경우 나머지 평가 결과를 생략하는 것을 말한다.
// 조건문에서 Truthy 값일때 무언가 해야하면 논리곱, Falsy 값일때 무언가 해야하며 논리합 연산자로 if문을 대체할 수 있다.
console.log('cat' || 'dog'); // cat
console.log('dog' || 'cat'); // dog
console.log('cat' && 'dog'); // dog
console.log('dog' && 'cat'); // cat
console.log(false || 'dog'); // dog
console.log(false && 'dog'); // false

// 쉼표 연산자(,)는 왼쪽 피연산자부터 평가하고 평가 결과 반환시 오른족 피연산자 결과 값부터 반환한다.
// 그룹 연산자('()')는 연산자 우선순위가 가장 높다.

// typeof 연산자는 피연산자의 데이터 타입을 문자열로 반환한다.
// "string", "number", "boolean", "undefined", "symbol", "object", "function"
// null 타입 확인할 때는 일치 비교 연산자(===)를 사용하자.
console.log(typeof undrclared); // 선언하지 않은 식별자를 typeof 연산자로 연산할 시 referenceError가 발생하지 않고 undefined를 반환한다.
// 지수 연산자(**)
// 좌항의 피연산자를 밑(base)으로 우항의 피연산자를 지수(exponent)로 거듭 제곱하여 숫자 값을 반환한다.
// 이항 연산자 중 우선순위가 가장 높다.
console.log(Math.pow(2, 3));
console.log(2 ** 3); // ES7에서 도입되었다. Math.pow method보다 가독성이 좋다.
console.log(2 ** 3 ** 3); // 지수 연산자의 결합 순서는 우항에서 좌항이다. (우결합성)
console.log((-5) ** 2); // 음수를 거듭제곱의 밑으로 사용할시 괄호로 묶어줘야 한다. Math.pow는 묶지 않아도 된다.

// 그 외 연산자
// 옵셔널 연산자(?.), null 통합 연산자(??), delete(property 삭제)
// new(생성자 함수를 호출할 때 사용하여 인스턴스를 생성)
// instanceof(좌변의 객체가 우변의 생성자 함수와 연결된 인스턴스인지 판별)
// in(property 존재 확인)

// 연산자의 부수효과(피연산자에게 영향을 미치는가)
// 할당 연산자(=,+=,-=,*=,%=,/=), 증가/감소 연산자(++/--), delete 가 해당

