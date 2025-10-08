const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if (inputBox.value === '') {
        alert("please write something!")
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span')
        span.innerHTML = '\u00d7';
        li.appendChild(span)
    };
    inputBox.value = "";
    saveData()
}

listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData()
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData()
    }
}), false;

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML)
}
function showtask() {
    listContainer.innerHTML = localStorage.getItem('data')
}
showtask();
// console.log(Boolean(1))
// console.log(Number('56'))
// const money = 5;
// if (money) {
//     alert("don't spend it all")
// } else {
//     alert("sorry you are currently broke")
// }


// const age = 18;
// if (age !== 18) {
//     console.log('you are eligible')
// } else {
//     console.log('sorry you are not eligible')
// }


// const age1 = 18;
// if (age1 === 18) {
//     console.log('you are eligible')
// } else {
//     console.log('sorry you are not eligible')
// }