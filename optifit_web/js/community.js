function openAV() {
    window.open("https://opti-fit-chat.netlify.app/", "_self");
}


// material-icons
var actions = document.getElementsByClassName("action0");
actions[0].addEventListener("click", like0);
function like0() {
    if (actions[0].innerHTML == '<i class="fa-regular fa-heart"></i>')
        actions[0].innerHTML = '<i class="fa-solid fa-heart"></i>';
    else
    actions[0].innerHTML = '<i class="fa-regular fa-heart"></i>'
}
actions[1].addEventListener("click", comment0);
function comment0() {
    // if (actions[1].innerHTML == '<i class="fa-regular fa-heart"></i>')
    //     actions[1].innerHTML = '<i class="fa-solid fa-heart"></i>';
    // else
    // actions[1].innerHTML = '<i class="fa-regular fa-heart"></i>'
}
actions[2].addEventListener("click", save0);
function save0() {
    if (actions[2].innerHTML == '<i class="fa-regular fa-heart"></i>')
        actions[2].innerHTML = '<i class="fa-solid fa-heart"></i>';
    else
    actions[2].innerHTML = '<i class="fa-regular fa-heart"></i>'
}













var actions1 = document.getElementsByClassName("action1");
actions1[0].addEventListener("click", like1);
function like1() {
    if (actions1[0].innerHTML == '<i class="fa-regular fa-heart"></i>')
        actions1[0].innerHTML = '<i class="fa-solid fa-heart"></i>';
    else
    actions1[0].innerHTML = '<i class="fa-regular fa-heart"></i>'
}

var actions2 = document.getElementsByClassName("action2");
actions2[0].addEventListener("click", like2);
function like2() {
    if (actions2[0].innerHTML == '<i class="fa-regular fa-heart"></i>')
        actions2[0].innerHTML = '<i class="fa-solid fa-heart"></i>';
    else
    actions2[0].innerHTML = '<i class="fa-regular fa-heart"></i>'
}

var actions3 = document.getElementsByClassName("action3");
actions3[0].addEventListener("click", like3);
function like3() {
    if (actions3[0].innerHTML == '<i class="fa-regular fa-heart"></i>')
        actions3[0].innerHTML = '<i class="fa-solid fa-heart"></i>';
    else
    actions3[0].innerHTML = '<i class="fa-regular fa-heart"></i>'
}