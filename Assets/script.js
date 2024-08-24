let cover = document.getElementsByClassName('cover');
let coverHeader = document.getElementsByClassName('coverHeader');
let content = document.getElementsByClassName('content');
let body = document.getElementById('bod');
let bool = false;
let login = document.getElementsByClassName('login');
let signup = document.getElementsByClassName('signup');

function switchSide() {
    if (bool) {
        cover[0].style.left = '0px';
        cover[0].style.borderTopLeftRadius = '3vh';
        cover[0].style.borderBottomLeftRadius = '3vh';
        cover[0].style.borderBottomRightRadius = '0vh';
        cover[0].style.borderTopRightRadius = '0vh';
        cover[0].style.background = 'url("../images/signupCover2.jpg")';
        cover[0].style.backgroundSize = 'cover';
        content[0].style.backgroundColor = '#0e2c0e'
        body.style.background='linearGradient(#114432, #0e2c0e)';
        coverHeader[0].innerHTML = 'Log in';
        coverHeader[0].style.right = '-6vh';
        coverHeader[0].style.width = '10vh';
        bool = false;
    } else {
        cover[0].style.left = '75vh';
        cover[0].style.borderTopRightRadius = '3vh';
        cover[0].style.borderBottomRightRadius = '3vh';
        cover[0].style.borderBottomLeftRadius = '0vh';
        cover[0].style.borderTopLeftRadius = '0vh';
        cover[0].style.background = 'url("../images/signupCover1.jpg")';
        cover[0].style.backgroundSize = 'cover';
        content[0].style.backgroundColor = '#114432'
        body.style.background = 'linearGradient(#0e2c0e, #114432)';
        coverHeader[0].innerHTML = 'Sign up';
        coverHeader[0].style.right = '69vh';
        coverHeader[0].style.width = '10vh';
        bool = true;
    }
}

function getSignUp() {
    login[0].style.left = '-100vh';
    signup[0].style.right = '12%';
    signup[0].style.left = 'auto';
    
}
function getLogIn() {
    login[0].style.left = '12%';    
    signup[0].style.right = '-100vh';
    signup[0].style.left = 'auto';
}
