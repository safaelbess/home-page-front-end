var regForm = document.getElementById('regForm');

var usersData = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [] ;
console.log(usersData);
//document.getElementById('btn-register').addEventListener('click', function (e) {

//    e.preventDefault();
//    var nameForm = $('#form3Example1c').val();
//    var emailForm = $('#form3Example3c').val();
//    var passwordForm = $('#form3Example4c').val();
//    var confirmPasswordForm = $('#form3Example4cd').val();
//    if (passwordForm!=confirmPasswordForm){
//        Swal.fire({
//            position: 'center',
//            icon: 'error',
//            title: 'Password and Confirm Password are not the same',
//            showConfirmButton: false,
//            timer: 6000
//          });
//    }
//    else{

//        // set data to local storage
//        // localStorage.setItem('name',nameForm.value);
//        // localStorage.setItem('email',emailForm.value);
//        // localStorage.setItem('password',passwordForm.value);
//        //  get data from local storage
//        //  delete data from local storage
//        //  update data in local storage
//        //  class ? > structure of the object
//        //  object ? > data > access string
//        //  json :> javascript object notation
//        let user = {
//            name:nameForm,
//            email:emailForm,
//            password:passwordForm
//        };
//        if(usersData.length!=0){
//            let isExist = false;
//        for (let i = 0; i< usersData.length;i++){
//            if(usersData[i]['email']==emailForm){
//                Swal.fire({
//                    position: 'center',
//                    icon: 'error',
//                    title: 'Email already exists',
//                    showConfirmButton: false,
//                    timer: 6000
//                  });
//                isExist = false;
//                return;
//            }
//            else if(usersData[i]['name']==nameForm){
//                Swal.fire({
//                    position: 'center',
//                    icon: 'error',
//                    title: 'Name already exists',
//                    showConfirmButton: false,
//                    timer: 6000
//                  });
//                  isExist = false;
//                return;
//            }
//            else{
//                isExist = true;

//            }

//        }
//        if(isExist==true){
//            usersData.push(user);
//                localStorage.setItem('users',JSON.stringify(usersData));
//                console.log(localStorage.getItem('users'));
//                Swal.fire({
//                    position: 'top-end',
//                    icon: 'success',
//                    title: 'Your account was created successfully',
//                    showConfirmButton: false,
//                    timer: 1500
//                  });
//            $(".toggle-login").click();
//        }
//    }
//    else{

//        usersData.push(user);
//                localStorage.setItem('users',JSON.stringify(usersData));
//                console.log(localStorage.getItem('users'));
//                Swal.fire({
//                    position: 'top-end',
//                    icon: 'success',
//                    title: 'Your account was created successfully',
//                    showConfirmButton: false,
//                    timer: 1500
//                  }); 
//    };
//  }

//});	


function validatePassword(password) {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/;
    const hasNumber = /[0-9]/;
    const hasSpecialChar = /[^A-Za-z0-9]/;

    if (password.length < minLength) {
        return false;
    }
    if (!hasUpperCase.test(password)) {
        return false;
    }
    if (!hasNumber.test(password)) {
        return false;
    }
    if (!hasSpecialChar.test(password)) {
        return false;
    }
    return true;
}
document.addEventListener('DOMContentLoaded', function () {
    const registerButton = document.getElementById('btn-register');
    registerButton.addEventListener('click', function () {
        const passwordInput = document.getElementById('form3Example4c').value;
        const isValid = validatePassword(passwordInput);

        if (isValid) {
            var nameForm = $('#form3Example1c').val();
            var emailForm = $('#form3Example3c').val();
            var passwordForm = $('#form3Example4c').val();
            var confirmPasswordForm = $('#form3Example4cd').val();
            if (passwordForm != confirmPasswordForm) {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Password and Confirm Password are not the same',
                    showConfirmButton: false,
                    timer: 6000
                });
            }
            else {

                // set data to local storage
                // localStorage.setItem('name',nameForm.value);
                // localStorage.setItem('email',emailForm.value);
                // localStorage.setItem('password',passwordForm.value);
                //  get data from local storage
                //  delete data from local storage
                //  update data in local storage
                //  class ? > structure of the object
                //  object ? > data > access string
                //  json :> javascript object notation
                let user = {
                    name: nameForm,
                    email: emailForm,
                    password: passwordForm
                };
                if (usersData.length != 0) {
                    let isExist = false;
                    for (let i = 0; i < usersData.length; i++) {
                        if (usersData[i]['email'] == emailForm) {
                            Swal.fire({
                                position: 'center',
                                icon: 'error',
                                title: 'Email already exists',
                                showConfirmButton: false,
                                timer: 6000
                            });
                            isExist = false;
                            return;
                        }
                        else if (usersData[i]['name'] == nameForm) {
                            Swal.fire({
                                position: 'center',
                                icon: 'error',
                                title: 'Name already exists',
                                showConfirmButton: false,
                                timer: 6000
                            });
                            isExist = false;
                            return;
                        }
                        else {
                            isExist = true;

                        }

                    }
                    if (isExist == true) {
                        usersData.push(user);
                        localStorage.setItem('users', JSON.stringify(usersData));
                        console.log(localStorage.getItem('users'));
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your account was created successfully',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        $(".toggle-login").click();
                    }
                }
                else {

                    usersData.push(user);
                    localStorage.setItem('users', JSON.stringify(usersData));
                    console.log(localStorage.getItem('users'));
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your account was created successfully',
                        showConfirmButton: false,
                        timer: 1500
                    });
                };
            }

        } else {
            Swal.fire({
                 icon: 'warning',
                title: 'Password does not meet the requirements'
            });
        }
    });
});
