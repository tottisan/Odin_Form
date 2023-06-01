const form = document.querySelector("#new_user");
const firstName = document.querySelector("#first_name");
const lastName = document.querySelector("#last_name");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phone_number");
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#confirm_password");
const submitBtn = document.querySelector("#submit_account");

const formRowEl = document.querySelector(".form-row");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  /* Use the validate all function, before send the form confirmation */
  validateAll();

  form.reset();
});

/* Function to validate all inputs */
const validateAll = () => {
  checkName();
  checkLastname();
  checkPhone();
  checkEmail();
  checkPassword();
};

/* Function to validate name */
const checkName = () => {
  const name = firstName.value;

  if (name === "" || name.length <= 3 || !name) {
    showErrors(firstName, `<p class="error-message">* Name is require</p>`);
  } else {
    removeErrors(firstName);
  }
};

/* Function to validate lastname */
const checkLastname = () => {
  const nameLast = lastName.value;

  if (nameLast === "" || nameLast.length <= 3 || !nameLast) {
    showErrors(lastName, `<p class="error-message">* Lastname is require</p>`);
  } else {
    removeErrors(lastName);
  }
};

/* Function to validate phonenumber */
const checkPhone = () => {
  const phone = phoneNumber.value;

  if (phone === "" || phone.length > 10 || !phone) {
    showErrors(
      phoneNumber,
      `<p class="error-message">* Phone number is require</p>`
    );
  } else {
    removeErrors(phoneNumber);
  }
};

/* Function to validate email */
const checkEmail = () => {
  const emailField = email.value;

  if (!checkRegex(emailField)) {
    showErrors(email, `<p class="error-message">* Email is require</p>`);
  } else {
    removeErrors(email);
  }
};

const checkRegex = (email) => {
  const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  return regex.test(email);
};

/* Function to validate password */
const checkPassword = () => {
  const passwordEl = password.value;

  console.log(passwordEl);

  if (passwordEl === "" || passwordEl.length <= 5 || !passwordEl) {
    checkConfirm(passwordEl);
    showErrors(
      password,
      `<p class="error-message">* Passwords do not match</p>`
    );
  } else {
    removeErrors(password);
  }
};

/* Function to validate confirm password */
const checkConfirm = (pass) => {
  const confirmPassword = passwordConfirm.value;

  console.log(confirmPassword);

  if (confirmPassword !== pass) {
    showErrors(
      passwordConfirm,
      `<p class="error-message">* Passwords do not match</p>`
    );
  } else {
    removeErrors(passwordConfirm);
  }
};

const showErrors = (inputName, errorMessage) => {
  const showError = inputName;
  showError.classList.add("error");

  if (inputName.classList.contains("error")) {
    inputName.parentElement.insertAdjacentHTML("beforeend", errorMessage);
  }
};

const removeErrors = (inputName) => {
  if (inputName.classList.contains("error")) {
    inputName.classList.remove("error");
    document.querySelector(".error-message").remove();
  }
};
