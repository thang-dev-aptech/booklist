function sign(){
    let a = document.getElementById('s1').value;
    let b = document.getElementById('s2').value;
    if (a == 'admin' && b == '123' ){
        window.location.href = "bai5.html";
    }
    else{
        alert('Đăng nhập thất bại !!!');
    }
}