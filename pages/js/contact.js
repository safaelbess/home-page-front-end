
var contacform = document.getElementById('contactForm');
var nameform = document.getElementById('name');
var emailform = document.getElementById('email');
var subjectform = document.getElementById('subject');
console.log(nameform.value) ;
contacform.addEventListener('submit',function(e){
     e.preventDefault();
     Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your name is'+ nameform.value +"your email is" + emailform.value + "your subject is" + subjectform.value,
        showConfirmButton: false,
        timer: 1500
      })

    
    
});

var loggedIn= document.getElementById('loggedIn');
if(localStorage.getItem('name') ==null){
    alert('you have to login');
    location.replace('../pages/login.html');
}
