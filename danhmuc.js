// setInterval(function showdiv() {
//     document.getElementById("infordiv").style.display = 'none';
//     setTimeout(function showdiv() {
//         document.getElementById("infordiv").style.display = 'block ';
//     }, 2000)
// }, 3000)
let myButton = document.getElementById('btn2');
myButton.addEventListener('click', (event) => {

    window.open("https://1office.vn/quan-ly-tuyen-dung", 'blank');

});
let myButton2 = document.getElementById('btn3');
myButton2.addEventListener('click', (event) => {

    window.open("https://1office.vn/hang-hoa-kho", 'blank');

});
let myButton3 = document.getElementById('btn4');
myButton3.addEventListener('click', (event) => {

    window.open("https://1office.vn/mang-noi-bo", 'blank');

});
let myButton4 = document.getElementById('btn5');
myButton4.addEventListener('click', (event) => {

    window.open("https://1office.vn/cong-viec", 'blank');

});
let myButton5 = document.getElementById('btn6');
myButton5.addEventListener('click', (event) => {

    window.open("https://1office.vn/support_feature/hang-hoa-2", 'blank');

});
let myButton6 = document.getElementById('btn7');
myButton6.addEventListener('click', (event) => {

    window.open("https://1office.vn/cong-ty-co-phan-tap-doan-dia-oc-scd-va-hanh-trinh-toi-uu-hoa-doanh-nghie%CC%A3p", 'blank');

});
let myButton7 = document.getElementById('btn8');
myButton7.addEventListener('click', (event) => {

    window.open("https://1office.vn/du-an", 'blank');

});
let myButton8 = document.getElementById('btn9');
myButton8.addEventListener('click', (event) => {

    window.open("https://1office.vn/tai-lieu", 'blank');

});
let myButton9 = document.getElementById('btn10');
myButton9.addEventListener('click', (event) => {

    window.open("https://1office.vn/tien-luong", 'blank');

});
let myButton10 = document.getElementById('btn11');
myButton10.addEventListener('click', (event) => {

    window.open("https://1office.vn/ban-hang", 'blank');

});
let myButton11 = document.getElementById('btn12');
myButton11.addEventListener('click', (event) => {

    window.open("https://1office.vn/cham-cong", 'blank');

});
let myButton12 = document.getElementById('btn13');
myButton12.addEventListener('click', (event) => {

    window.open("https://1office.vn/mua-hang", 'blank');

});
let formdangky = document.getElementById('formdk');
let myButtonClose = document.getElementById('closed');
setTimeout(function showdiv() {
    formdangky.style.display = 'block';
}, 3000)
myButtonClose.addEventListener('click', (event) => {
    formdangky.style.display = 'none';
    event.preventDefault(); // hủy bỏ sự kiện nếu nó có thể hủy được, nghĩa là hành động mặc định thuộc về sự kiện sẽ không xảy ra.
});
let batdautao = document.getElementById('btn1');
batdautao.addEventListener('click', (event) => {
    formdangky.style.display = 'block';
    event.preventDefault();
})


document.getElementById('nhap').addEventListener('click', (event) => {
    alert("Em xin chân thành cảm ơn thầy cô ")
})