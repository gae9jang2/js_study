// console.log(document.body.childNodes)
for(let i=0; i<document.body.childNodes.length; i++) {
  console.log(document.body.childNodes[i]);
}

console.log(document.body.parentNode);
console.log(document.body.nextSibling);
console.log(document.body.previousSibling);

console.log(document.body.childNodes)
for(let node of document.body.childNodes) {
  console.log(node);
}


// 스타일을 2~3개정도 적용
let s = document.getElementById('start');
s.style.background = 'red';
s.style.color = 'white';

document.getElementById('start').style.background = 'red';
document.getElementById('start').style.color = 'white';


const li = document.querySelectorAll('ul > li');     //선택자를 받음
li[0].innerHTML = 'aaaa'
console.log(li[1]);

const end = document.querySelector('.end');  // 첫번째거 하나만 가지고옴
console.log(end);