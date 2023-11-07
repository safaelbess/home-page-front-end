alert('bbbbbbbbbbbbb');
var loginForm = document.getElementById('loginForm');
var emailForm = document.getElementById('form2Example1');
//var name= document.getElementById('form3Example1c');
var passwordForm = document.getElementById('form2Example2');

loginForm.addEventListener('submit',function(e){

    e.preventDefault();
   console.log(emailForm.value);
   if(emailForm.value==localStorage.getItem('email') && passwordForm.value==localStorage.getItem('password')){
    alert('you logged in successfully');

    location.replace("../pages/home.html");
  }
else{
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'rong password or email',
        showConfirmButton: false,
        timer: 1500
      });

}
}

);
