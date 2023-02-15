// 리터럴(literal) 소스코드의 고정된 값을 나타내는 표기법(사람이 이해할 수 있는 문자 or 기호를 사용해 값을 생성)
var sum = 10 + 20;
alert(sum);
// 변수는 하나의 값을 저장하기 위한 수단이다.
// 변수는 하나의 값을 저장하기 위한 메모리 공간 자체 또는 그 메모리 공간을 식별하기 위해 붙인 이름이다.
// 메모리 저장 공간에 저장된 값을 식별할 수 있는 고유한 이름(변수 이름, 변수명, 식별자) / 변수에 저장된 값(변수 값)

var userId = 1;
var userName = 'Lee';
// 객체나 배열 같은 자료구조를 사용하면 여러 개의 값을 하나로 그룹화해서 하나의 값처럼 사용할 수 있다.
var user = {id: 1, name: 'Lee'};
var users = [{id: 2, name: 'Lee'}, {id: 2, name: 'Kim'}];
var res = 10 +20;
console.log(res);
var score; //변수 선언과 동시에 초기화로 undefined로 값이 들어감

// 식별자는 어떤 값을 구별해서 식별할 수 있는 고유한 이름을 말한다.
// 식별자는 값이 아니라 메모리 주소를 기억하고 있다.

// 변수 선언은 변수를 생성하는 것을 의미한다.
// 변수를 사용하려면 반드시 선언이 필요하다.(var, let, const)

// 실행 컨텍스트(execution context) 자바스크립트 엔진이 소스코드를 평가하고 실행하기 위해 필요한 환경을 제공하고
// 코드의 실행 결과를 실제로 관리하는 영역으로 자바스크립트 엔진은 실행 컨텍스트를 통해 식별자와 스코프를 관리

// 변수는 선언-초기화-할당의 3단계를 통해 생성된다.

// 호이스팅(hoisting) 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것을 말한다.
// var, function, import / let, const, class 는 초기화 시점이 다르다.(선언과 초기화가 동시에 이뤄지냐의 차이)
// 이유로는 TDZ(Temparal Dead Zone) 때문이다. TDZ는 선언 전에 변수를 사용하는 것을 비 허용하는 개념상의 공간으로
// 스코프의 시작지점부터 초기화 시작지점이 해당된다.
// 변수를 참조하는 코드가 앞에 있음에도 referenceError가 뜨지 않고 undefined가 console에 나온다.
// 왜냐하면 선언문은 runtime 하기 이전에 먼저 실행이 되기 때문이다. 이러한 특징을 variable hosting이라 한다.
console.log(score);
var score;
// 변수 선언
var score;
// 값의 할당
score = 80;
// 변수선언 및 값의 할당
var score = 80;
console.log(score); // undefined
var score = 80; // 변수 선언 및 값의 할당
console.log(score); // 80
console.log(score); // undefined
score = 80; // 값의 할당
var score; // 변수 선언
console.log(score); // 80
// 값의 재할당
// var 키워드로 선언한 변수는 undefined로 초기화되기에 변수에 처음 값을 할당하는 것도 사실은 재할당이다.
var score = 80; // 변수 선언 및 값의 할당
score = 90; // 값의 재할당
var person, $elem, _name, first_name, val1; // 여러 개의 변수를 한 번에 선언할 수 있지만 가독성이 떨어져 권장하지는 않는다.
var 이름, ほんご; // 영어를 제외한 언어로 변수명을 지정하는 것을 권장하지는 않는다.
// var first-time; // systaxError : Unexpected token -
// var 1st; // systaxError : Invalid or unexpected token
// var this; // systaxError : Unexpected token this
// 자바스크립트는 대소문자를 구분하므로 다음 변수는 별개의 변수이다.
var firstname;
var firstName;
var FIRSTNAME;
var x = 3; //NG. x 변수가 무엇을 의미하는지 알 수 없다.
var score = 100; //OK. score 변수가 의미하는 바(점수)를 쉽게 알 수 있다.
// 경과시간. 단위는 날짜이다.
var d; //NG.
var elapseTimeInDays; //OK.
// 네이밍 컨벤션(naming convention) 하나 이상의 영어 단어로 구성된 식별자를 만들 때 가독성 좋게 구분하기 위한 명명규칙
// 자바스크립트에서는 변수, 함수 : 카멜 케이스 / 생성자 함수, 클래스 : 파스칼 케이스를 사용하자.
var firstName; // camelCase
var first_name; // snake_case
var FirstName; //PascalCase
var strFirstName; // typeHungarianCase
var $elem = document.getElementById('myId'); // DOM node
var observable$ = fromEvent(document, 'click'); // RxJS 옴저버