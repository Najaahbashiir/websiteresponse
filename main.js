const close = document.querySelector(".close");
const humbeger = document.querySelector(".humbeger");
const menu_link = document.querySelector(".menu_link");



humbeger.addEventListener("click", () => {

    menu_link.classList.toggle("active");

});


close.addEventListener("click", () => {

    menu_link.classList.remove("active");

});