let cardholder = document.getElementById("cardholder");

let spancardname = document.getElementById("spancardname");

cardholder.addEventListener("input", function () {
  spancardname.textContent = cardholder.value;
});

/* ---------------------------------------------------------------------------------------------- */

let cardnumber = document.getElementById("cardnumber");

let spancardnumber = document.getElementById("spancardnumber");

cardnumber.addEventListener("input", function () {
  spancardnumber.textContent = cardnumber.value;
});

/* --------------------------------------------------------------------------------------------------- */

let month = document.getElementById("month");

let span1 = document.getElementById("span1");

month.addEventListener("input", function () {
  span1.textContent = month.value;
});

/* --------------------------------------------------------------------------------------------------- */

let year = document.getElementById("year");

let span3 = document.getElementById("span3");

year.addEventListener("input", function () {
  span3.textContent = year.value;
});

/* --------------------------------------------------------------------------------------------------- */

let cvcnumber = document.getElementById("cvcnumber");

let span2 = document.getElementById("span2");

cvcnumber.addEventListener("input", function () {
  span2.textContent = cvcnumber.value;
});
