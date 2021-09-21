// Selecting all the required element
const slider = document.querySelector("#rate-slider");
const inerestRate = document.querySelector(".interest-rate");
const btn = document.querySelector(".btn-cal");
const message = document.querySelector(".message");
const amountInput = document.querySelector("#amount");
const rateInput = document.querySelector("#rate-slider");
const yearsInput = document.querySelector("#years");

// Keep updating the side indicator as per slider value
inerestRate.innerHTML = slider.value + "%";
slider.oninput = function () {
  inerestRate.innerHTML = this.value + "%";
};

// Validating the user input
const validateUserInput = function (amount) {
  if (amount <= 0) {
    alert("Please enter a positive number.");
    amountInput.focus();
    return false;
  } else return true;
};

// Processing the data and giving the appropiate output on the page
btn.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = amountInput.value;
  const rate = rateInput.value;
  const year = Number(yearsInput.value);

  if (!validateUserInput(amount)) {
    return;
  }

  // Calcute Simple Inerest for valiud values
  const interest = (amount * rate * year) / 100;

  // Get the date to show the financial year in which the SI will be provided
  const d = new Date();
  const n = d.getFullYear();
  const finalyear = year + n;

  // Print the output
  message.innerHTML = `If you deposit <span class="highlight">${amount}</span>,<br />at an interest rate of <span class="highlight">${rate}%</span>.<br />You
            will receive an amount of <span class="highlight">${interest}</span>,<br />in the year <span class="highlight">${finalyear}</span>`;

  // Showing the output by appropiate classes
  message.classList.remove("hidden");
});
