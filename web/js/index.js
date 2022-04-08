var debug = true;
function isDebug(message) {
    if(debug) console.log(message);
}
const info = document.getElementById("info");
const bookShop = document.getElementById("book_shop");
const menuAdminPanel = document.getElementById("menu_admin_panel");
const menuAddAuthor = document.getElementById("menu_add_author");
const menuAddBook = document.getElementById("menu_add_book");
const menuPurchase = document.getElementById("menu_purchase");
const menuProfile = document.getElementById("menu_profle");
const menuLogin = document.getElementById("menu_login");
menuLogin.addEventListener('click', toggleBtnLogin);
const menuLogout = document.getElementById("menu_logout");
menuLogout.addEventListener('click', toggleBtnLogin);
bookShop.addEventListener('click', toggleMainBtn);

function toggleMainBtn() {
    removeAllActive();
}

function toggleBtnLogin() {
    isDebug("Переключаем меню входа");
    if(menuLogin.classList.contains("d-none")){
        toggleShowMenu();
        hiddenBtnLogin();
        info.innerHTML = "&nbsp;Вы вошли";
        removeAllActive();
    }else{
        toggleShowMenu();
        showBtnLogin();
        info.innerHTML = "&nbsp;Вы вышли";
    }
}

function showBtnLogin() {
    isDebug("Показываем кнопку входа");
    menuLogin.classList.remove("d-none");
    menuLogout.classList.add("d-none");
}

function hiddenBtnLogin() {
    isDebug("Показываем кнопку выхода");
    menuLogin.classList.add("d-none");
    menuLogout.classList.remove("d-none");
}

function toggleShowMenu() {
    if(menuAddAuthor.classList.contains("d-none")) {
        showBtnMenu();
    }else{
        hiddenBtnMenu();
    }
}

function showBtnMenu() {
    menuLogin.classList.remove("d-none");
    menuAdminPanel.classList.remove("d-none");
    menuAddBook.classList.remove("d-none");
    menuAddAuthor.classList.remove("d-none");
    menuPurchase.classList.remove("d-none");
    menuProfile.classList.remove("d-none");
}

function hiddenBtnMenu() {
    menuLogin.classList.add("d-none");
    menuAdminPanel.classList.add("d-none");
    menuAddBook.classList.add("d-none");
    menuAddAuthor.classList.add("d-none");
    menuPurchase.classList.add("d-none");
    menuProfile.classList.add("d-none");
}

function removeAllActive() {
    menuAdminPanel.classList.remove("active");
    menuAddBook.classList.remove("active");
    menuAddAuthor.classList.remove("active");
    menuPurchase.classList.remove("active");
    menuProfile.classList.remove("active");
}

// МОЙ ВАРИАНТ


menuAdminPanel.addEventListener('click', activeAdminPanel);
menuAddAuthor.addEventListener('click', activeAddAuthor);
menuAddBook.addEventListener('click', activeAddBook);
menuPurchase.addEventListener('click', activePurchase);
menuProfile.addEventListener('click', activeProfile);


function activeAdminPanel() {
    if(!menuAdminPanel.classList.contains("active")) {
        removeAllActive();
        menuAdminPanel.classList.add("active");
    }
}

function activeAddAuthor() {
    if(!menuAddAuthor.classList.contains("active")) {
        removeAllActive();
        menuAddAuthor.classList.add("active");
    }
}

function activeAddBook() {
    if(!menuAddBook.classList.contains("active")) {
        removeAllActive();
        menuAddBook.classList.add("active");
    }
}

function activeProfile() {
    if(!menuProfile.classList.contains("active")) {
        removeAllActive();
        menuProfile.classList.add("active");
    }
}

function activePurchase() {
    if(!menuPurchase.classList.contains("active")) {
        removeAllActive();
        menuPurchase.classList.add("active");
    }
}



//АДАПТИВНЫЙ ВАРИАНТ

//menuAdminPanel.addEventListener('click', e=>{
//    e.preventDefault();
//    activeBtnMenu(menuAdminPanel);
//});
//menuAddAuthor.addEventListener('click', e=>{
//    e.preventDefault();
//    activeBtnMenu(menuAddAuthor);
//});
//menuAddBook.addEventListener('click', e=>{
//    e.preventDefault();
//    activeBtnMenu(menuAddBook);
//});
//menuProfile.addEventListener('click', e=>{
//    e.preventDefault();
//    activeBtnMenu(menuProfile);s
//});
//menuPurchase.addEventListener('click', e=>{
//    e.preventDefault();
//    activeBtnMenu(menuPurchase);
//});
//
//function activeBtnMenu(activeMenuBtn) {
//    if(!activeMenuBtn.classList.contains("active")) {
//        activeMenuBtn.classList.add("active");
//    }
//    deactiveMenu(activeMenuBtn);
//}
//function deactiveMenu(activeMenuBtn) {
//    const listNavLinks = document.getElementByClassName('nav-link');
//    for(let i = 0; i < listNavLinks.length; i++) {
//        if(listNavLinks[i] !== activeMenuBtn && listNavLinks[i].classList.contains("active")) {
//            listNavLinks[i].classList.remove('active');
//        }
//    }
//}