const arrowDown = document.querySelectorAll('.arrowDown');
const arrowDownIcon = document.querySelectorAll('.arrowDownIcon');

arrowDown.forEach((item, i) => {
    item.addEventListener('click', () => {

        arrowDownIcon[i].classList.toggle('active')
    })
})


