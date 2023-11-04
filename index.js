// eslint-disable-next-line no-undef
const ul = document.querySelector('#sports');
console.log(ul);

//Adding new child to see if it taks the see if it takes same character as other children
//
const newLi = document.createElement('li');
newLi.innerText = 'Rugby';
newLi.setAttribute('id', 'Rugby');
newLi.setAttribute('class', 'list');
ul.append(newLi);

// eslint-disable-next-line no-undef
const li = document.querySelectorAll('.list');
console.log(li);

ul.addEventListener('click', (e) => {
  console.log(`${e.target.getAttribute('id')} was clicked`);
  // const target = e.target;
  //code 9 and 11 are the same
  const { target } = e;
  if (target.matches('li')) {
    e.target.style.backgroundColor = 'blue';
    e.target.style.color = 'aqua';
  }
   else if (target.matches('ul')) {
    for (let i = 0; i < li.length; i++) {
      li[i].style.borderColor = 'black';
    }
    e.target.style.backgroundColor = 'aqua';
    e.target.style.color = 'black';
    e.target.style.borderColor = 'black';
  }
});
