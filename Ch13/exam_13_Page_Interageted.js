// 스코프(scope)
// 스코프는 변수의 유효범위(다른 식별자가 자신을 참조할 수 있는 유효범위) = 식별자의 유효범위
// 식별자를 검색할 떄 사용하는 규칙
// 스코프가 없으면 같은 이름을 가지는 변수들끼리 충돌을 일으키고 프로그램 전체에서 하나밖에 사용할 수 없다.

// 식별자 결정
// 자바스크립트엔진이 이름이 같은 두 개의 변수 중 어떤 변수를 참조할 것인가를 결정한다.
// 변수 체이닝과 관련이 있다.

// 스코프내에서 식별자는 유일해야 하지만 다른 스코프에서는 같은 이름의 스코프를 사용할 수 있다.
// 스코프는 네임스페이스라고 할 수 있다.

// 렉시컬 환경(lexical Environment)
// 코드 블록, function, script를 실행하기 앞서 생성되는 특별한 객체
// 실행할 스코프 범위 안에 있는 변수와 함수를 프로퍼티로 저장하는 객체

// 스코프는 위치에 의해 결정이 된다.
// 절대적, 상대적으로 전역인가 지역인가가 중요하다.

// 스코프 체인(scope chain)
// 모든 스코프는 하나의 계층적 구조로 연결되며 스코프가 계층적으로 연결되는 것을 스코프 체인이라 한다.
// 변수를 참조할 때 자바스크립트 엔진은 스코프 체인을 통해 변수를 참조하는 코드의 스코프부터 시작해서
// 상위 스코프 방향으로 이동하며 선언된 변수를 검색한다.
// 자바스크립트 엔진은 코드를 실행하기 앞서 렉시컬 환경을 실제로 생성하고, 변수 선언이 실행되면 변수식별자가
// 렉시컬 환경에 키로 등록되고 변수 할당이 일어나면 렉시컬 환경의 변수 식별자에 해당되는 값을 변경한다.
// 즉, 스코프 체인은 실행컨텍스트의 렉시컬 환경을 단방향으로 연결한 것이다.
// 상위 스코프에서 유효한 변수는 하위 스코프에서 자유로이 참조할 수 있지만 하위 스코프에서 유효한 변수는 상위 스코프에서 참조 할 수 없음을 의미

// 동적 스코프(dynamic scope)
// 함수를 어디서 호출했는지에 따라 함수의 상위 스코프를 결정한다.
// 함수가 호출되는 시점에 동적으로 상위 스코프를 결정해야 하기 때문에 동적 스코프라고 부른다.
// 렉시컬 스코프(lexical scope) = 정적 스코프(static scope)
// 함수 정의가 평가되는 시점에 상위 스코프가 정적으로 결정되기 때문에 정적 스코프라고 부른다
// 자바스크립트를 포함한 대부분의 언어가 렉시컬 스코프를 따른다.