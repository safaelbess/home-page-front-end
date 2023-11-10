

var regForm = document.getElementById('regForm');
var nameForm = document.getElementById('form3Example1c');
var emailForm = document.getElementById('form3Example3c');
var passForm = document.getElementById('form3Example4c');
var conpassForm = document.getElementById('form3Example4cd');
console.log(nameForm.value);
//var user1= document.getElementsByClassName('user')[0];

  // do something with localStorage.getItem(localStorage.key(i));
for(i=0;i<nameForm.length();i++){
  let hasSpace=false;
  let ch=nameForm.charAt(i);
  if(ch==" "){
   hasSpace=true;
  }
  
if (hasSpace==true){
break;

}
else
{
  Swal.fire({
    position: 'center',
    icon: 'error',
    title: 'your password must include a space',
    showConfirmButton: false,
    timer: 1500
  });
}

}

var hasLOwerCase =false;
var hasUpperCase= false;
var hasDigit=false;
var hasSpecialChar = false;

for (i =0;i< passForm.length;i++)
{ let ch =passForm.charAt(i);
  if(CharacterData.hasUpperCase(i)){
    hasUpperCase=true;

  }
  else if(CharacterData.hasLOwerCase(i))
{
  hasLOwerCase=true;
}
  else if(CharacterData.hasDigit(i))
  {
    hasDigit=true;

  }
  else if(CharacterData.hasSpecialChar(i))
  {
    hasSpecialChar=true;
  }

var isStrongPassword =hasDigit && hasLOwerCase && hasUpperCase && hasSpecialChar;
  if(isStrongPassword==true)

alert('your password is strong')


  else
{
  Swal.fire({
    position: 'center',
    icon: 'error',
    title: 'your password is not strong please try an other password',
    showConfirmButton: false,
    timer: 1500
  });
}




var usersData =localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):[];

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
   
    }
  
  else{ //user1.innerHTML=nameForm.value;
   // localStorage.setItem('name',nameForm.value);
   // localStorage.setItem('email',emailForm.value);

  //  localStorage.setItem('password',passForm.value);
  let user ={
name:nameForm.value,
email:emailForm.value,
password:passForm.value

  };
  
  if (usersData!=null){
  let isExist=false;
    for( let i=0;i<usersData.length;i++){
   
     if (usersData[i]['email']==emailForm.value){

    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'email already exists',
      showConfirmButton: false,
      timer: 1500});
      ifExist=false;
      return;
    }
    else if(usersData[i]['name']==nameForm.value)
      {Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'name already exists',
        showConfirmButton: false,
        timer: 1500});
        ifExist=false;
         return;
      }
    else{
      ifExist=true;
    }   
  }
  if(ifExist==true) {   
    usersData.push(user);
    localStorage.setItem('user',JSON.stringify(usersData));
    Swal.fire({
        position: 'center',
            icon: 'success',
        title: 'you have logged in successfully',
        showConfirmButton: false,
        timer: 1500
      });
      
 
    }
  }
  ); // use}r1.innerH
    // TML=localStorage.getItem ('form3Example1c');
    


  


  