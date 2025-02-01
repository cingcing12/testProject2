const arrowDown = document.querySelectorAll('.arrowDown');
const arrowDownIcon = document.querySelectorAll('.arrowDownIcon');

arrowDown.forEach((item, i) => {
    item.addEventListener('click', () => {

        arrowDownIcon[i].classList.toggle('active')
    })
})


// show and hide ps 

const iconShowAndHidePs = document.querySelector('.icon-show-and-hide-ps');
const input = document.getElementById('input');
const show = document.getElementById('show')
const hide = document.getElementById('hide')

iconShowAndHidePs.addEventListener('click', () => {

    if(input.type === 'text'){
        input.type = 'password';
        show.style.display = "none";
        hide.style.display = 'inline-flex'
    }else{
        input.type = 'text';
        show.style.display = "inline-flex";
        hide.style.display = 'none'
    }
})

//toggle checkbox 

const checkBox = document.getElementById('checkbox');
const checkBox2 = document.getElementById('checkbox2');

checkBox.addEventListener('click', () => {
    checkBox.classList.toggle('active')
})
checkBox2.addEventListener('click', () => {
    checkBox2.classList.toggle('active')
})

window.addEventListener('load', () => {
    checkBox.click();
})


const clickArrowRotate = document.getElementById('clickArrowRotate');
const arrowSignUp = document.getElementById('arrowSignUp');

clickArrowRotate.addEventListener('click', () => {
    clickArrowRotate.classList.toggle('active')
})