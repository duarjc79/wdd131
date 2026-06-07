const form = document.querySelector("#ticketForm");
const ticketType = document.querySelector("#ticketType");
const studentField = document.querySelector("#studentField");
const guestField = document.querySelector("#guestField");
const studentId = document.querySelector("#studentId");
const accessCode = document.querySelector("#accessCode");
const errors = document.querySelector("#errors");
const output = document.querySelector("#output");

// Show/hide conditional field when dropdown changes
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

function isPastOrToday(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  errors.innerHTML = "";
  output.innerHTML = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.ticketType.value;
  const eventDate = form.eventDate.value;
  const idValue = studentId.value.trim();
  const codeValue = accessCode.value.trim();

  const errorList = [];

  if (!eventDate) {
    errorList.push("Please select an event date.");
  } else if (isPastOrToday(eventDate)) {
    errorList.push("Please choose a future date. Same-day purchases are not allowed.");
  }

  if (type === "student") {
    if (!idValue) {
      errorList.push("Please enter your Student I number.");
    } else if (!/^\d{9}$/.test(idValue)) {
      errorList.push("Student I number must be exactly 9 digits.");
    }
  }

  if (type === "guest") {
    if (!codeValue) {
      errorList.push("Please enter the event access code.");
    } else if (codeValue !== "EVENT131") {
      errorList.push("Access code is incorrect. Please check your event invitation.");
    }
  }

  if (errorList.length > 0) {
    errorList.forEach(msg => {
      const div = document.createElement("div");
      div.classList.add("error-box");
      div.textContent = msg;
      errors.appendChild(div);
    });
    return;
  }

  const formattedDate = new Date(eventDate + "T00:00:00").toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  const typeLabel = type === "student" ? "Student" : "Guest";
  const idLine = type === "student"
    ? `<p>Student I#: ${idValue}</p>`
    : `<p>Access Code: ${codeValue}</p>`;

  output.innerHTML = `
    <h2>Ticket Created — ${typeLabel}</h2>
    <p>${firstName} ${lastName}</p>
    <p>Email: ${email}</p>
    <p>Event Date: ${formattedDate}</p>
    ${idLine}
  `;

  form.reset();

  // form.reset() restores values but doesn't undo dynamic hidden/required changes
  studentField.hidden = true;
  guestField.hidden = true;
  studentField.classList.remove("visible");
  guestField.classList.remove("visible");
  studentId.removeAttribute("required");
  accessCode.removeAttribute("required");
});