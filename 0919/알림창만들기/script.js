const ab = document.getElementById('ab');

function showHide(value) {
  ab.style.display = value;
}

// function show() {
//   ab.style.display = 'block';
// }

// function hide() {
//   ab.style.display = 'none';
// }

const alertBox = document.querySelectorAll('alert-box')[1];

function showBox(msg) {
  // alertBox.style.display = 'block';
  // alertBox.innerHTML = msg;
  
  // JS 문법
  //document.querySelectorAll('alert-box')[1].style.display = 'block';
  //document.querySelectorAll('alert-box')[1].innerHTML = 'block';


  // jQuery 문법
  // $('.alert-box').eq(1).css('속성명', '속성값');
  $('.alert-box').eq(1).css('display', 'block');
  $('.alert-box').eq(1).html(msg);
  // 두개 문법 조합은 불가능함
  // $('.alert-box').eq(1).innerHTML = msg;
}

function closeBox() {
  alertBox.style.display = 'none';
}