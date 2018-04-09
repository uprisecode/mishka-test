var navHeader = document.querySelector(".header__nav");
var modalButton = document.querySelector(".nav__toggle-button");

var navArrClass = navHeader.classList;
var buttonArrClass = modalButton.classList;

function toggle() {

    navArrClass.toggle("header__nav_close");
    navArrClass.toggle("header__nav_open");

    buttonArrClass.toggle("nav__toggle-button_open");
    buttonArrClass.toggle("nav__toggle-button_close");


    // if (navArrClass.contains("header__nav_close")) {
    //     navArrClass.add("header__nav_open");
    //     buttonArrClass.add("nav__toggle-button_close");
    // }
    // if (navArrClass.contains("header__nav_open"))
    //     navArrClass.add("header__nav_close");
    // buttonArrClass.add("nav__toggle-button_open");

}

modalButton.addEventListener("click", toggle);

var orderButton = document.querySelector(".choice-goods__button");
var modalWrapper = document.querySelector(".main-page__modal-wrapper");
var modalOrder = document.querySelector(".main-page__modal");

function openModal() {
    modalWrapper.style.display = "block";
    modalOrder.style.display = "flex";
}

function closeModal() {
    modalWrapper.style.display = "none";
    modalOrder.style.display = "none";

}

orderButton.addEventListener("click", openModal);
modalWrapper.addEventListener("click", closeModal);