

var regForm = document.getElementById('regForm');
var nameForm = document.getElementById('form3Example1c');
var emailForm = document.getElementById('form3Example3c');
var passForm = document.getElementById('form3Example4c');
var conpassForm = document.getElementById('form3Example4cd');
console.log(nameForm.value);
//var user1= document.getElementsByClassName('user')[0];

  // do something with localStorage.getItem(localStorage.key(i));
  let store = {};
for (let i = 0, l = localStorage.length; i < l; i++) {
  

regForm.addEventListener('submit' ,function(e){
  
  
e.preventDefault();

      
  if(passForm.value!=conpassForm.value){

    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'password and confirm password do not match',
        showConfirmButton: false,
        timer: 1500
      });
     store[i]=localStorage.getItem('name');
     Console.log(store);
  
    
    }
  else{
    //user1.innerHTML=nameForm.value;
   // localStorage.setItem('name',nameForm.value);
   // localStorage.setItem('email',emailForm.value);

  //  localStorage.setItem('password',passForm.value);
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'you have logged in successfully',
        showConfirmButton: false,
        timer: 1500
      });
      

    }
     // use}r1.innerH
    // TML=localStorage.getItem ('form3Example1c');
    
  
    

});
}
