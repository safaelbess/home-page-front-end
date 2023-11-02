//alert('bbbbbbbbbbbbb')
var loginForm = document.getElementById('loginForm');
var emailForm = document.getElementById('form2Example1');

var passwordForm = document.getElementById('form2Example2');


loginForm.addEventListener('submit',function(e){

    e.preventDefault();
    if(emailForm.value==localStorage.getItem('email') && passwordForm.value==localStorage.getItem('password'){
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'you have logged in sucssesfully',
            showConfirmButton: false,
            timer: 1500
          });
    
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