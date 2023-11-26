var userName = document.getElementById("userName");
userName.innerHTML = localStorage.getItem("name");
var loginOrOut = document.getElementById("loginOrOut");
debugger;
//alert(localStorage.getItem('name'));
if (localStorage.getItem('name') != null){
    
    loginOrOut.innerHTML='logout';
    document.getElementById('register').style.display = 'none';

}
else{
    alert('you are not a user please login');
    location.replace('pages/about.html');
}
function clearStorage(){
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    location.replace('../pages/login.html');
}

// Initialization for ES Users
// import { Carousel, initMDB } from "mdb-ui-kit";

// initMDB({ Carousel });


