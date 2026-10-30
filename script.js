//  Form Inputs
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let ageInput = document.getElementById("age");
let passwordInput = document.getElementById("password");
let confirmPasswordInput = document.getElementById("confirmpassword");
let courseInput = document.getElementById("course");

// Buttons
let registrationButton = document.getElementById("Registration");
let modeButton = document.querySelector(".light-theme");
let togglePassword = document.getElementById("togglePassword");
let toggleConfirmPassword = document.getElementById("toggleConfirmPassword");

// Error Messages
let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let ageError = document.getElementById("ageError");
let passwordError = document.getElementById("passwordError");
let confirmPasswordError = document.getElementById("confirmpasswordError");
let courseError = document.getElementById("courseError");

// Success Message
let successMessage = document.getElementById("successMessage");

// Students Section
let studentList = document.getElementById("studentList");
let studentCount = document.getElementById("studentCount");

// ===============================
// REGISTRATION
// ===============================
let students=[];
registrationButton.addEventListener("click", function () {

    // Remove old messages
    nameError.textContent = "";
    emailError.textContent = "";
    ageError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
    courseError.textContent = "";
    successMessage.textContent = "";

    // Reset borders
    nameInput.style.border = "";
    emailInput.style.border = "";
    ageInput.style.border = "";
    passwordInput.style.border = "";
    confirmPasswordInput.style.border = "";
    courseInput.style.border = "";


    // ===============================
    // NAME
    // ===============================

    if (nameInput.value.trim() === "") {

        nameError.textContent = "Name is required";
        nameInput.style.border = "2px solid red";
    }


    // ===============================
    // EMAIL
    // ===============================

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === "") {

        emailError.textContent = "Email is required";
        emailInput.style.border = "2px solid red";

    } else if (!emailPattern.test(emailInput.value)) {

        emailError.textContent = "Please enter a valid email";
        emailInput.style.border = "2px solid red";
    }


    // ===============================
    // AGE
    // ===============================

    if (ageInput.value.trim() === "") {

        ageError.textContent = "Age is required";
        ageInput.style.border = "2px solid red";

    } else if (Number(ageInput.value) < 16) {

        ageError.textContent = "Age must be 16 or above";
        ageInput.style.border = "2px solid red";
    }


    // ===============================
    // PASSWORD
    // ===============================

    if (passwordInput.value === "") {

        passwordError.textContent = "Password is required";
        passwordInput.style.border = "2px solid red";

    } else if (passwordInput.value.length < 6) {

        passwordError.textContent = "Password must be at least 6 characters";
        passwordInput.style.border = "2px solid red";
    }


    // ===============================
    // CONFIRM PASSWORD
    // ===============================

    if (confirmPasswordInput.value === "") {

        confirmPasswordError.textContent = "Please confirm your password";
        confirmPasswordInput.style.border = "2px solid red";

    } else if (confirmPasswordInput.value !== passwordInput.value) {

        confirmPasswordError.textContent = "Passwords do not match";
        confirmPasswordInput.style.border = "2px solid red";
    }


    // ===============================
    // COURSE
    // ===============================

    if (courseInput.value === "") {

        courseError.textContent = "Please select a course";
        courseInput.style.border = "2px solid red";
    }


    // ===============================
    // CHECK ALL VALIDATIONS
    // ===============================

    if (
        nameInput.value.trim() !== "" &&
        emailPattern.test(emailInput.value) &&
        Number(ageInput.value) >= 16 &&
        passwordInput.value.length >= 6 &&
        confirmPasswordInput.value === passwordInput.value &&
        courseInput.value !== ""
    ) 
    {

        successMessage.textContent = "Registration successful!";

        let student = {
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
    age: Number(ageInput.value),
    course: courseInput.value
};

students.push(student);
displayStudents();

console.log(students);

    }

});

togglePassword.addEventListener("click", function () {

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.textContent = "Hide Password";
    } else {
        passwordInput.type = "password";
        togglePassword.textContent = "Show Password";
    }

});

toggleConfirmPassword.addEventListener("click", function () {

    if (confirmPasswordInput.type === "password") {
        confirmPasswordInput.type = "text";
        toggleConfirmPassword.textContent = "Hide Password";
    } else {
        confirmPasswordInput.type = "password";
        toggleConfirmPassword.textContent = "Show Password";
    }

});

modeButton.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");
    document.body.classList.toggle("dark-mode");

});

function displayStudents() {

    studentList.innerHTML = "";

    students.forEach(function (student, index) {

        let studentCard = document.createElement("div");

        studentCard.classList.add("student-card");

        studentCard.innerHTML = `
            <h3>${student.name}</h3>
            <p>Email: ${student.email}</p>
            <p>Age: ${student.age}</p>
            <p>Course: ${student.course}</p>
            <button class="remove-btn" onclick="removeStudent(${index})">
                Remove
            </button>
        `;

        studentList.appendChild(studentCard);
    });

    studentCount.textContent = students.length;
}
function removeStudent(index) {

    students.splice(index, 1);

    displayStudents();
}