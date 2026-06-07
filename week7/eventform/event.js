const form = document.querySelector("#ticketForm");
const ticketType = document.querySelector("#ticketType");
const studentField = document.querySelector("#studentField");
const guestField = document.querySelector("#guestField");
const studentId = document.querySelector("#studentId");
const accessCode = document.querySelector("#accessCode");
const errors = document.querySelector("#errors");
const output = document.querySelector("#output");

ticketType.addEventListener("change", function () {
  const value = ticketType.value;

  studentField.hidden = true;
  guestField.hidden = true;
  studentField.classList.remove("visible");
  guestField.classList.remove("visible");
  studentId.removeAttribute("required");
  accessCode.removeAttribute("required");

  if (value === "student") {
    studentField.hidden = false;
    studentField.classList.add("visible");
    studentId.setAttribute("required", "");
  } else if (value === "guest") {
    guestField.hidden = false;
    guestField.classList.add("visible");
    accessCode.setAttribute("required", "");
  }
});

function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

  if (isPastDate(availableDate)) {
    output.textContent = "Please choose a later date.";
    return;
  }

form.addEventListener("submit", function (event) {
event.preventDefault();
errors.textContent = "";
output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.ticketType.value;
  const eventDate = form.eventDate.value;
  const idValue = studentId.value.trim();
  const codeValue = accessCode.value.trim();

  const errorList = [];


  if (eventDate = "") {
    errorList.push("Please select a date.");
  }

  if (type === "student") {
    if (idValue === "") {
      errorList.push("Please enter your Student I number.");
    } else if (!/^\d{9}$/.test(idValue)) {
      errorList.push("Student I number must be exactly 9 digits.");
    }
  }

  if (type === "guest") {
    if (idValue === "") {
      
    }
  }
})