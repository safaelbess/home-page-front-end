
var contacform = document.getElementById('contactForm');
var nameform = document.getElementById('name');
var emailform = document.getElementById('email');
var subjectform = document.getElementById('subject');

contacform.addEventListener('submit',function(e){
     e.preventDefault();
     Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your name is'+ nameform.value +"your email is" + emailform.value + "your subject is" + subjectform.value,
        showConfirmButton: false,
        timer: 1500
      })

    
    
})

