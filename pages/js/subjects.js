

var loginOrOut = document.getElementById("loginOrOut");
if (localStorage.getItem('name') != null) {

    loginOrOut.innerHTML = 'logout';
}
else {
    alert('you are not a user please login');
    location.replace('./login.html');
}
function clearStorage() {
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    location.replace('../pages/login.html');
}

function GoToVideo(courseName) {
    localStorage.setItem("courseName", courseName)
}

document.addEventListener('DOMContentLoaded', function () {
    updateDropdownOptions();

    const subjectForm = document.getElementById('subjectForm');

    subjectForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const userEmail = localStorage.getItem('email');  
        if (!userEmail) {
            alert('User email is not set');
            return;
        }

         

        const selectedSubject = document.getElementById('subjectSelect').value;
        const existingSubjects = JSON.parse(localStorage.getItem(userEmail + '_selectedSubjects')) || [];
        if (selectedSubject === 'Select Subject') {
            event.preventDefault();
            alert('Please select a subject.');
            return;
        }
        if (!existingSubjects.includes(selectedSubject)) {
            existingSubjects.push(selectedSubject);
        }

        localStorage.setItem(userEmail + '_selectedSubjects', JSON.stringify(existingSubjects));
        const selectedTeachers = Array.from(document.getElementById('teacherSelect').selectedOptions).map(option => option.value);

        localStorage.setItem(userEmail + '_selectedTeachers', JSON.stringify(selectedTeachers));
        displaySelectedSubjects();

        var modalElement = document.getElementById('subjectSelectionModal');
        var modalInstance = bootstrap.Modal.getInstance(modalElement);
        modalInstance.hide();

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Successfully Registered',
            showConfirmButton: false,
            timer: 1500
        });
     });
});

function displaySelectedSubjects() {
    updateDropdownOptions();
    const userEmail = localStorage.getItem('email');
    if (!userEmail) {
        console.log('User email is not set');
        return;
    }

    const selectedSubjects = JSON.parse(localStorage.getItem(userEmail + '_selectedSubjects')) || [];

    const subjectCards = document.querySelectorAll('.col .card');
    subjectCards.forEach(card => {
        const cardTitle = card.querySelector('.card-title').textContent.trim();
        if (!selectedSubjects.includes(cardTitle)) {
            card.parentElement.style.display = 'none'; // Hide the card if it's not among the selected subjects
        } else {
            card.parentElement.style.display = ''; // Show the card if it's among the selected subjects
        }
    });
}

document.addEventListener('DOMContentLoaded', displaySelectedSubjects);


function updateDropdownOptions() {
    const userEmail = localStorage.getItem('email');
    if (!userEmail) {
        console.log('User email is not set');
        return;
    }

    const selectedSubjects = JSON.parse(localStorage.getItem(userEmail + '_selectedSubjects')) || [];
    const subjectOptions = document.getElementById('subjectSelect').options;

    for (let option of subjectOptions) {
        option.style.display = selectedSubjects.includes(option.value) ? 'none' : '';
    }
}

function removeSubject(subjectToRemove) {
    const userEmail = localStorage.getItem('email');
    if (!userEmail) {
        console.log('User email is not set');
        return;
    }

    let selectedSubjects = JSON.parse(localStorage.getItem(userEmail + '_selectedSubjects')) || [];
    selectedSubjects = selectedSubjects.filter(subject => subject !== subjectToRemove);

    localStorage.setItem(userEmail + '_selectedSubjects', JSON.stringify(selectedSubjects));

     updateDropdownOptions();
    displaySelectedSubjects();
}
