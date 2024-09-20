let user = {
  name: 'hong',
  age : 20
};

user.hello = function() {
  console.log('hello');
};

user.hello();

function hi() {
  console.log('hi')
}

user.hello = hi;
user.hello();

user = {
  hello: function() {
 }
}

user = {
  msg() {
    console.log('msg');
  }
}

user.msg();


kim = {
  name: 'kim',
  age:20
}

let park = {
  name:'park',
  age:30
}

function himsg() {
  console.log(this.name + "님 안녕하세요");
}

kim.fn = himsg;
park.fn = himsg;

kim.fn();
park.fn();

// new, 생성자 함수
// 함수명 첫글자가 대문자
// 생성할뗀 new 키워드로 생성


// JS는 HTML의 요소와 속성 추가, 수정 삭제
// CSS 추가, 수정, 삭제 가능
// 이벤트 추가 수정 삭제

// document.body.style.background = 'red';

