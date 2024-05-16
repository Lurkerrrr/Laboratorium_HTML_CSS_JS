document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
    const errorMessages = document.getElementById('errorMessages');
    const sameAddressCheckbox = document.getElementById('sameAddress');
    const correspondenceAddress = document.getElementById('correspondenceAddress');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        errorMessages.innerHTML = ''; // Clear previous error messages

        // Collect form field values
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const gender = document.getElementById('gender').value;
        const phone = document.getElementById('phone').value;
        const birthdate = document.getElementById('birthdate').value;
        const country = document.getElementById('country').value;
        const province = document.getElementById('province').value;
        const address = document.getElementById('address').value;
        const correspondence = document.getElementById('correspondence').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Validate each field
        if (!validateField(firstName)) {
            displayError('firstName', 'Imię jest wymagane.');
        }
        if (!validateField(lastName)) {
            displayError('lastName', 'Nazwisko jest wymagane.');
        }
        if (!validateEmail(email)) {
            displayError('email', 'Nieprawidłowy adres email.');
        }
        if (!validatePassword(password)) {
            displayError('password', 'Hasło musi zawierać co najmniej 8 znaków.');
        }
        if (!gender) {
            displayError('gender', 'Płeć jest wymagana.');
        }
        if (!validatePhoneNumber(phone)) {
            displayError('phone', 'Nieprawidłowy numer telefonu.');
        }
        if (!validateBirthdate(birthdate)) {
            displayError('birthdate', 'Musisz być pełnoletni, aby się zarejestrować.');
        }
        if (!country) {
            displayError('country', 'Kraj jest wymagany.');
        }
        if (country === 'Poland' && !province) {
            displayError('province', 'Województwo jest wymagane dla Polski.');
        }
        if (country === 'Poland' && !address) {
            displayError('address', 'Adres zamieszkania jest wymagany dla Polski.');
        }
        if (sameAddressCheckbox.checked && !address) {
            displayError('address', 'Adres zamieszkania jest wymagany.');
        }
