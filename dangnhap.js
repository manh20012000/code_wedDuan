var iptxtDn = document.getElementById("txtdn");
var iptxtPass = document.getElementById("txtpass");
var checkbox = document.getElementById('chebox')
    // dau tien minh ser suwr lys cho no owr dnag ma hoa truos 
txtpass.type = "password";
// kieemr tra checkbox set lain neu bangr true thi set lai text cho no con khong thi set lain ban fakkw 
function ischeck() {
    if (checkbox.checked) {
        txtpass.type = "text";
    } else if (checkbox.checked == false) {
        txtpass.type = "password";
    }
}
//var idform = document.getElementById("formId");
// su ly su kien voi 1 cais button 
let myButton = document.getElementById('btndangnhap');
myButton.addEventListener('click', (event) => {
    if (iptxtDn.value == "admin" && iptxtPass.value == "123") {
        alert("thanh cong");
        iptxtDn.value = "";
        iptxtPass.value = "";
        window.open("http://127.0.0.1:5500/duan/formTrangChu.html", 'blank');
    } else {
        alert(" that bai");
    }
});
// sự kiện enter click javascript
let bt1 = document.getElementById('txtpass');

function enterclicktxt() {
    if (event.keyCode == 13) {
        bt1.focus();
        return false; /*về false để ngăn hành vi mặc định của phím Enter */
    }
}
let bt2 = document.getElementById('btndangnhap');

function enterclick() {
    if (event.keyCode == 13) {
        bt2.focus();
        return false;
    }
}