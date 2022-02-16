var a = "A";
function f() {
  var b = "B";
  function g() {
    var c = "C";
    console.log(a + b + c);
  }
  g();
}
f();

//속박 변수 : 함수의 인수와 지역 변수(c)
//자유 변수 : 속박 변수를 제외한 변수들(a,b)

//닫힌 함수 : 속박 변수만 포함한 함수(f 함수)
//열린 함수 : 자유 변수를 가지고 있는 함수(g 함수)

/*
g_LexicalEnvironment: {
  DeclarativeEnvironmentRecord: {
    c: "C"
  },
  OuterLexicalEnvironmentReference: f_LexicalEnvironment
}

f_LexicalEnvironment: {
  DeclarativeEnvironmentRecord: {
    b: 'B'
  },
  OuterLexicalEnvironmentReference: global_LexicalEnvironment
}

global_LexicalEnvironment: {
  ObjectEnvironmentRecord: {
    bindObject: {
      a: 'A'
    },
    OuterLexicalEnvironmentReference: null
  }
}
*/
