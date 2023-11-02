var regForm = document.getElementById('regform');
var nameForm = document.getElementById('form3Example1c');
var emailForm = document.getElementById('form3Example3c');
var passForm = document.getElementById('form3Example4c');
var conpassForm = document.getElementById('form3Example4cd');
console.log(nameForm.value);

regForm.addEventListener('submit' ,function(e){

e.preventDefault();
//console.log(emailForm.value);
if(passForm.value!=conpassForm.value){
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'password and confirm password do not match',
        showConfirmButton: false,
        timer: 1500
      });

}
else{
    localStorage.setItem('name',nameForm.value);
    localStorage.setItem('email',emailForm.value);

    localStorage.setItem('password',passForm.value);
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'you have logged in successfully',
        showConfirmButton: false,
        timer: 1500
      });


}
});
