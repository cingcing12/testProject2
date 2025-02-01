const arrowDown = document.querySelectorAll('.arrowDown');
const arrowDownIcon = document.querySelectorAll('.arrowDownIcon');

arrowDown.forEach((item, i) => {
    item.addEventListener('click', () => {

        arrowDownIcon[i].classList.toggle('active')
    })
})

//showItem 

const clickShowItem = document.querySelectorAll('.clickShowItem');
const containerAllItem = document.querySelectorAll('.containerAllItem');

clickShowItem.forEach((item, i) => {
    item.addEventListener('click', () => {

        title.innerHTML = nameTitle[i]

        containerAllItem.forEach(item => {
            item.classList.remove('active')
        })
        containerAllItem[i].classList.add('active');

        containerShowItemOnIMG.classList.remove('active')
    })
})

const menuClick = document.querySelectorAll('.menuClick');
const containerShowItemOnIMG = document.querySelector('.container-show-menu-on-picture')
menuClick.forEach((item, i) => {
    item.addEventListener('click', () => {

        containerAllItem[i].classList.remove('active');

        containerShowItemOnIMG.classList.add('active');

        title.innerHTML = 'Menu: Starbucks Coffee Company'
    })
})

const clickForShowItem = document.querySelectorAll('.clickForShowItem');

clickForShowItem.forEach((item, i) => {
    item.addEventListener('click', () => {

        containerShowItemOnIMG.classList.remove('active');

        containerAllItem[i].classList.add('active');

        title.innerHTML = nameTitle[i];
    })
})

// const MenuClickReset = document.querySelectorAll('.MenuClickReset');

// MenuClickReset.forEach((item, i) => {
//     item.addEventListener('click', () => {

//         containerAllItem.classList.remove('active')
//     })
// })

let nameTitle = [
    'Hot Coffee: Starbucks Coffee Company',
     'Cold Coffee: Starbucks Coffee Company',
     'Starbucks Refreshers® Beverages: Starbucks Coffee Company',
     'Frappuccino® Blended Beverages: Starbucks Coffee Company',
     'Iced Tea & Lemonade: Starbucks Coffee Company',
     'Hot Teas: Starbucks Coffee Company',
     'Iced Energy: Starbucks Coffee Company',
     'Milk, Juice & More: Starbucks Coffee Company',
     'Bottled Beverages: Starbucks Coffee Company',
     'Breakfast: Starbucks Coffee Company',
     'Bakery: Starbucks Coffee Company',
     'Treats: Starbucks Coffee Company',
     'Lunch: Starbucks Coffee Company',
     'Snacks: Starbucks Coffee Company',
     'Whole Bean: Starbucks Coffee Company',
     'VIA® Instant: Starbucks Coffee Company',
     'Cold Cup: Starbucks Coffee Company',
     'Tumblers: Starbucks Coffee Company',
     'Mugs: Starbucks Coffee Company',
     'Water Bottles: Starbucks Coffee Company',
     'Other: Starbucks Coffee Company'
    ]
let title = document.querySelector('.title');


// change page

const clickOnMenu = document.querySelectorAll('.clickOnMenu');
const containerChangePage = document.querySelectorAll('.containerChangePage');

clickOnMenu.forEach((item, i) => {
    item.addEventListener('click', () => {

        clickOnMenu.forEach(item => {
            item.classList.remove('menuItemUnderline')
        })
        item.classList.add('menuItemUnderline');

        title.innerHTML = nameTitle2[i];

        containerChangePage.forEach(item => {
            item.classList.remove('active')
        })
        containerChangePage[i].classList.add('active');
    })
})


let nameTitle2 = ['Menu Starbucks Coffee Company', 'Previous Starbucks Coffee Company', 'Favorites Starbucks Coffee Company']