

var loginOrOut = document.getElementById("loginOrOut");
if (localStorage.getItem('name') != null){
    
    loginOrOut.innerHTML='logout';
}
else{
    alert('you are not a user please login');
    location.replace('./login.html');
}

function clearStorage(){
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    location.replace('../pages/login.html');
}
