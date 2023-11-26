var loginForm = document.getElementById('loginForm');

let isLogin =false;
document.getElementById('btn-login').addEventListener('click', function (e) {
    e.preventDefault();
    var emailForm = $('#form2Example1').val();
    var passwordForm = $('#form2Example2').val();
     
    let userData=localStorage.getItem('users')?JSON.parse(localStorage.getItem('users')):[];
for(let i=0;i<userData.length;i++)
if(emailForm==userData[i]['email']&& passwordForm==userData[i]['password'])
{
    localStorage.setItem('email',userData[i]['email']);
    localStorage.setItem('password',userData[i]['password']);

    localStorage.setItem('name',userData[i]['name']);
    
    location.replace('../index.html');
    isLogin=false;
    

}

else{
    isLogin=true;

}
if(isLogin)
 {      Swal.fire({
                 position: 'center',
                icon: 'error',
               title: 'Your email or password is wrong',
               showConfirmButton: false,
                timer: 6000
            });}
});

$('.toggle-register').click(function () {
    $(this).addClass('active');
    $('.toggle-login').removeClass('active');
    $('.login-body').slideUp("slow");
    $('.register-body').delay(625).slideDown("slow");
});

$('.toggle-login').click(function () {
    $(this).addClass('active');
    $('.toggle-register').removeClass('active');
    $('.register-body').slideUp("slow");
    $('.login-body').delay(625).slideDown("slow");
});

$('#registered').click(function () {
    $('.toggle-login').click();
});

$('#btn-login, #btn-register').click(function (e) {
    e.preventDefault();
});

$('#forgot-password').click(function () {
    Swal.fire({
        title: "Reset Your Password",
        html: `
            <input id="swal-input1" class="swal2-input" placeholder="Enter your email">
            <input id="swal-input2" type="password" class="swal2-input" placeholder="New password">
            <input id="swal-input3" type="password" class="swal2-input" placeholder="Confirm new password">
        `,
        focusConfirm: false,
        preConfirm: () => {
            return [
                document.getElementById("swal-input1").value,
                document.getElementById("swal-input2").value,
                document.getElementById("swal-input3").value
            ];
        }
    }).then((result) => {
        if (result.value) {
            let email = result.value[0];
            let newPassword = result.value[1];
            let confirmPassword = result.value[2];

            if (newPassword !== confirmPassword) {
                Swal.fire({
                    icon: 'error',
                    title: 'Passwords do not match',
                    text: 'Please make sure the new passwords match.'
                });
                return;
            }

            let userData = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
            let userExists = false;

            for (let i = 0; i < userData.length; i++) {
                if (email === userData[i]['email']) {
                    userData[i]['password'] = newPassword;
                    userExists = true;
                    break;
                }
            }

            if (userExists) {
                localStorage.setItem('users', JSON.stringify(userData));
                Swal.fire({
                    icon: 'success',
                    title: 'Password Reset Successfully',
                    text: 'Your password has been updated.'
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'User Not Found',
                    text: 'No user found with the provided email address.'
                });
            }
        }
    });
});

// }
// if(isLogin)
// {
//      Swal.fire({
//                 position: 'center',
//                 icon: 'error',
//                title: 'Your email or password is wrong',
//                showConfirmButton: false,
//                 timer: 6000
//             });


// }
//     if (emailForm.value == localStorage.getItem('email') && passwordForm.value == localStorage.getItem('password')) {

//         Swal.fire({

//             position: 'center',
//             icon: 'success',
//             title: 'Your are logged in successfully',
//             showConfirmButton: false,
//             timer: 6000
//         });
//     }
//     else {
//         Swal.fire({
//             position: 'center',
//             icon: 'error',
//             title: 'Your email or password is wrong',
//             showConfirmButton: false,
//             timer: 6000
//         });
//     


