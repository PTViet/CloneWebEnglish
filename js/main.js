let home = document.getElementById("home");
let menu = document.getElementById("menu");
let menuStatus = false;
const navBarItem = document.getElementsByClassName("nar-bar-item");

home.addEventListener("click", onClickHome);
menu.addEventListener("click", openMenu);
function onClickHome() {
    console.log('11111')
}

// const handleClickMenu = function handleClickMenu(){
//     menu.addEventListener("click", menuStatus ? closeMenu : openMenu);

// }
function openMenu() {
    const collection = document.getElementsByClassName("nar-bar-item");
    for (let index = 0; index < collection.length; index++) {
        //add id
        collection[index].setAttribute('id',`nar-bar-item${index}`)
        // document.getElementsByClassName(`nar-bar-item${index}`).style.display = 'none'
        if (index === 0) {
            collection[index].style.width = '100%';
            collection[index].style.textAlign = 'left';
        }
        collection[index].style.display = 'block'
        if (elementHasDropdown(collection[index])) {
            collection[index].addEventListener("click", openDropdownMenu(index));
        }
    }
}

function closeMenu() {
    // menu.addEventListener("click", menuStatus ? closeMenu : openMenu);
    console.log('close', menuStatus)
    // document.getElementsByClassName("nar-bar-item") = navBarItem
}

function openDropdownMenu(index) {
    const element = document.getElementById(`nar-bar-item${index}`)
    element.addEventListener("click", ()=>{
        const dropElement = element.getElementsByClassName('dropdown-menu')
        console.log(dropElement.style);
        // dropElement.style.display = 'flex'
    })
    // const collection = document.getElementsByClassName("nar-bar-item")[idx];
}
function elementHasDropdown(element) {
    const result = element.getElementsByTagName('p')[0].getElementsByTagName('span')[0];
    return !!result
}