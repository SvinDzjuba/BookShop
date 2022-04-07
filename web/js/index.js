
const info = document.getElementById("info");
const menuLogin = document.getElementById("menu_login");
menuLogin.addEventListener('click', toggleBtnLogin);
const menuLogout = document.getElementById("menu_logout");
menuLogout.addEventListener('click', toggleBtnLogin);

function toggleBtnLogin() {
    if(menuLogin.classList.contains("d-none")){
        menuLogin.classList.remove("d-none");
        menuLogin.classList.add("d-none");
        info.innerHTML += "&nbsp;Вы вышли";
    }else{
        menuLogin.classList.add("d-none");
        menuLogin.classList.remove("d-none");
        info.innerHTML += "&nbsp;Вы вошли";
    }
}