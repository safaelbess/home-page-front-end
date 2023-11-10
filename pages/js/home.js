var user1=document.getElementById('user');

user1.innerHTML= localStorage.getItem('name');
var loginOrOut =document.getElementById('loginOrOut');

if( localStorage.getItem('name') !=null){

    loginOrOut.innerHTML='log out';
    


}
else{
    //loginOrOut.innerHTML='login';
    
    alert('you are not a user please log in');
    location.replace("../pages/login.html");
}


    
