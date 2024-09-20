// const tabBtns = document.querySelectorAll('.tab-button');
// const tabContents = document.querySelectorAll('.tab-content');

// tabBtns[0].addEventListener('click', () => {
//   tabBtns[0].classList.add('select');
//   tabContents[0].classList.add('show');
// })

// for(let i=0; i<tabBtns.length; i++) {
// tabBtns[i].addEventListener('click', () => {
//   for(let i=o; i<tabBtns.length; i++) {
//     tabBtns[i].classList.remove('select');
//     tabContents[i].classList.remove('show');
//   }

//   tabBtns[1].classList.add('select');
//   tabContents[1].classList.add('show');
// })

// tabBtns[2].addEventListener('click', () => {
//   tabBtns[2].classList.add('select');
//   tabContents[2].classList.add('show');
// })
// }

// const tabBtns = $('.tab-button');
// const tabContents = $('.tab-content');

// $(tabBtns).on('click', (e) => {
//   $(tabBtns).removeClass('select');
//   $(tabContents).removeClass('show');

//   let i = e.target.dataset.num;
//   $(tabBtns).eq(i).addClass('select');
//   $(tabContents).eq(i).addClass('show');
// })


const tabBtns = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');
const tabBtnBox = document.querySelector('.list');

tabBtnBox.addEventListener('click', (e) => {
  let i = e.target.dataset.num;

  removeClass();
  tabBtns[i].classList.add('select');
  tabContents[i].classList.add('show');
})

function removeClass() {
  for(let i=0; i<tabBtns.length; i++) {
    tabBtns[i].classList.remove('select');
    tabContents[i].classLis.remove('show');
    
  }
}