// div태그 생성
let diving = document.createElement('div');
let textNode = document.createTextNode('텍스트노드임');

diving.className = 'alert';
diving.innerHTML = '<b>강조</b>생성된 div태그임';

// append : 맨뒤에 추가
// prepend :  맨앞에 추가
// before : 이전에 추가
// after : 이후에 추가
document.body.append(divTag);

const ol = document.querySelector('#ol');

ol.before('이전');
ol.after('이후');




div.insertAdjacentHTML('be')
div.insertAdjacentHTML


// 태그 지우기
setTimeout(() =>){
  diving.remove();
}, 3000);

// 이동
// 태그 삽입 함수들은 기본적으로 기존 태그를 삭제한 후
// 해당 위치로 넣음
second.after(first);

//태그 복사
// true : 자손들까지 복사가 됨
// false : 해당 태그만 복사가 됨
const ol2 = divTag.cloneNode(false);
document.body.append(ol2);