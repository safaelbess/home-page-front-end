

var loginOrOut = document.getElementById("loginOrOut");
debugger
    if (localStorage.getItem('name') == null){
        debugger
        document.getElementById('teacher').style.display = 'none';
        document.getElementById('subject').style.display = 'none';

        document.getElementById('homebout').style.display = 'none';

         
        }
    else{
        loginOrOut.innerHTML='logOut';
        document.getElementById('register').style.display = 'none';


    }

function clearStorage() {
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    location.replace('../pages/login.html');
}
//     loginOrOut.innerHTML='logout';
// }
// else{
//     alert('you are not a user please login');
//     location.replace('./login.html');
// }
