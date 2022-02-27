// =========== Các hàm xử lý trung gian =============

/**
 * Hàm xác thực email hợp lệ hay không
 * @param {string} email Email cần được xác thực
 * @returns true nếu email hợp lệ, ngược lại trả về false
 */
function validateEmail(email) {
    let count = 0;
    for (let i = 0; i < email.length; i++) {
        if (email[i] == "@") count++;
    }
    return count == 1;
}

/**
 * Hàm xác thực password. Password hợp lệ cần thỏa 3 điều kiện sau
 * 1: It nhat 6 ky tu
 * 2: Co it nhat 1 ky tu dac biet
 * 3: Co it nhat 1 ky tu hoa
 * @param {string} psw Password cần được xác thực
 * @returns true nếu psw hợp lệ, ngược lệ trả về false
 */
function validatePsw(psw) {
    if (psw.length < 6) return false;

    let flagSpecialChar = false;
    let flagCapital = false;
    for (let i = 0; i < psw.length; i++) {
        // Nếu ký tự thứ i là ký tự đặc biệt
        if (!((psw[i] >= "A" && psw[i] <= "Z") || (psw[i] >= "a" && psw[i] <= "z")))
            flagSpecialChar = true;
        else if (psw[i] >= "A" && psw[i] <= "Z") flagCapital = true;
    }
    return flagSpecialChar && flagCapital;
}

// =========== Các hàm xử lý sự kiện =============
/**
 * thể hiện màu sắc tùy trạng thái đúng hay sai của dữ liệu
 * @param {string} id 
 */
let trangThaiDung = function(id) {
    document.getElementById(id).classList.remove("redcl");
    document.getElementById(id).classList.add("greencl");
    document.getElementById(id).innerHTML = "";
}
let trangThaiSai = function(id, mess) {
    document.getElementById(id).classList.add("redcl");
    document.getElementById(id).classList.remove("greencl");
    document.getElementById(id).innerHTML = mess;
}

/**
 * Hàm xác thực dữ liệu toàn bộ form
 */
function setValidateFormEvent() {
    const signBtn = document.getElementsByClassName("signupbtn")[0];
    signBtn.addEventListener("click", function() {


        // email
        let email = document.getElementById("mail");
        // console.log(email.value);
        if (validateEmail(email.value) == 0) {
            trangThaiSai("err-email", "Vui lòng nhập đúng định dạng email");
        } else {
            trangThaiDung("err-email");
        }


        //passworld
        let pass = document.getElementById("psw");
        // console.log(pass.value);
        if (validatePsw(pass) == true) {
            trangThaiDung("err-psw");
        } else {
            trangThaiSai("err-psw", "Passworld có ít nhất 6 kí tự, có ít nhất một kí tự dặc biệt, có ít nhất một kí tự hoa ");
        }



        //nhap lai mat khau
        //ham kiem tra
        let kiemTraMK = function(chuoi) {

        }

        //
        let prePass = document.getElementById("pre-pass");
        if (pass.value.length != prePass.value.length || prePass.value != pass.value) {
            document.getElementById("err-psw-repeat").innerHTML = "mật khẩu không trùng với mật khẩu đã nhập";
            trangThaiSai("err-psw-repeat", "mật khẩu không trùng với mật khẩu đã nhập");
        } else if (prePass.value === pass.value) {
            trangThaiDung("err-psw-repeat");
        }



        //checkbox










    });

}

function setCancelModalEvent() {
    const modal = document.getElementById("id01");
    const cancelBtn = document.getElementsByClassName("cancelbtn")[0];
    cancelBtn.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}

// ======================== Các lệnh toàn cục ===================
setCancelModalEvent();
setValidateFormEvent();