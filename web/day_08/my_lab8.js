function keyUp() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;
    if (username.length == 0){
        document.getElementById('changeUserName').innerHTML = "Chưa nhập tên tài khoản";
        document.getElementById('changeUserName').setAttribute("style","color:red");
    }else if(username.length >=1 && username.length  <=7){
        document.getElementById('changeUserName').innerHTML = "Tên tài khoản lớn hơn 7 kí tự";
        document.getElementById('changeUserName').setAttribute("style","color:red");
    }else {
        document.getElementById('changeUserName').innerHTML = "Hợp lệ" ;
        document.getElementById('changeUserName').setAttribute("style","color:blue");
    }

    if (email.length == 0){
        document.getElementById('changeEmail').innerHTML = "Chưa nhập tên email";
        document.getElementById('changeEmail').setAttribute("style","color:red");
    }else if(email.length >=1 && email.length  <=7){
        document.getElementById('changeEmail').innerHTML = "Email lớn hơn 7 kí tự";
        document.getElementById('changeEmail').setAttribute("style","color:red");
    }else {
        document.getElementById('changeEmail').innerHTML = "Hợp lệ" ;
        document.getElementById('changeEmail').setAttribute("style","color:blue");
    }

    if (password.length == 0){
        document.getElementById('changePassword').innerHTML = "Chưa nhập password";
        document.getElementById('changePassword').setAttribute("style","color:red");
    }else if(password.length >=1 && password.length  <=7){
        document.getElementById('changePassword').innerHTML = "Password lớn hơn 7 kí tự";
        document.getElementById('changePassword').setAttribute("style","color:red");
    }else {
        document.getElementById('changePassword').innerHTML = "Hợp lệ" ;
        document.getElementById('changePassword').setAttribute("style","color:blue");
    }

}