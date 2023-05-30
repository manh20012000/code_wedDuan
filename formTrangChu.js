var mangimg = ["1-1.png", "2-1.png", "3-1.png", "4-1.png", "5-1.png"];

setInterval(function loadanh() {
    var i = document.getElementById("loadanh").alt; // alte là chưa chi  muc
    i++
    if (i === mangimg.length) {
        i = 0;
    }
    document.getElementById("loadanh").src = "" + mangimg[i];
    document.getElementById("loadanh").alt = i;
}, 3000)
var dsimg = ["zalo8.jpg", "zalo10.jpg"];
setInterval(function load() {
        var i = document.getElementById("load").alt; // alte là chưa chi  muc
        i++;
        if (i === dsimg.length) {
            i = 0;
        }
        document.getElementById("load").src = "" + dsimg[i];
        document.getElementById("load").alt = i;
    },
    4000);
let divcuoi = document.getElementById('divcuoi');
let formdangky = document.getElementById('formdk');
let myButtonClose = document.getElementById('closed');
setTimeout(function showdiv() {
    formdangky.style.display = 'block';
}, 2500)
myButtonClose.addEventListener('click', (event) => {
    formdangky.style.display = 'none';
    divcuoi.style.display = "flex"
    divcuoi.style.width = "100%";
    let divtg = document.getElementById('thoigian')
    setInterval(function setthoigian() {
        giay--;
        if (giay === 0) {
            phut--;
            giay = 59;
            if (phut == 0) {
                gio--;
                phut = 60;
                if (gio < 0) {
                    return;
                }
            }
        }
        divtg.innerHTML = gio + " :Giờ " + phut + "  :Phút  " + giay + "  :Giây ";

    }, 1000)

    divcuoi.style.height = "12%";
    divcuoi.style.bottom = "0";
    divcuoi.style.alignItems = "center";
    divcuoi.style.justifyContent = "center";
    divcuoi.style.gap = "30px";
    /* divcuoi.style.gap = "30px"; khoảng cách giữa các phần tử
     */
    divcuoi.style.position = " fixed";
    var gio = 3;
    var phut = 60
    var giay = 60;

    // cái này của cái thẻ cuối
    event.preventDefault();
    // hủy bỏ sự kiện nếu nó có thể hủy được, nghĩa là hành động mặc định thuộc về sự kiện sẽ không xảy ra.
});
let batdautao = document.getElementById('btnclick');
batdautao.addEventListener('click', (event) => {
    formdangky.style.display = 'block';
    event.preventDefault();
})


function checkInput() {
    var inputtxt = document.getElementById("txt1");
    if (inputtxt.value === "") {
        alert("vui lòng nhập lại thông tin");
        event.preventDefault();
    } else {
        alert("đăng ký thành công");
        event.preventDefault();
    }
}
var inputtxt = document.getElementById("txt2");
let btndk = document.getElementById('btnsmit');

btndk.addEventListener('click', (event) => {
    if (inputtxt.value === "") {
        alert("vui lòng nhập lại thông tin");
        event.preventDefault();
    } else {
        alert("đăng ký thành công");
        formdangky.style.display = 'none';
        event.preventDefault();
    }
});