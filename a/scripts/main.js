


let myHeading = document.querySelector('h1')
let myBtn = document.querySelector('button')

function setUsrName() {
  let myName =  prompt('请输入你的名字')
  localStorage.setItem('name',myName)
  myHeading.textContent = "Mozilla 酷毙了，" + myName;
}

if (!localStorage.getItem('name')) {
  setUsrName()
} else {
  const name = localStorage.getItem('name')
  myHeading.textContent = "Mozilla 酷毙了，" + name;
}

myBtn.onclick = function() {
  setUsrName()
}