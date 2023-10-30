function funcionesJuntas() {
  let validacionExitosa = validacion();
  alternarDivs(validacionExitosa);
}

function alternarDivs(divAparecer) {
  let div1 = document.getElementById("div1");
  let div2 = document.getElementById("div2");

  if (divAparecer === true) {
    div2.classList.remove("ocultar");
    div1.classList.add("ocultar");
  } else {
    div1.classList.remove("ocultar");
    div2.classList.add("ocultar");
  }
}

function validacion() {
  const nombreInput = document.getElementById("cardholder");
  const nombreValue = nombreInput.value.trim();
  const nombreError = document.getElementById("nombreError");
/* -------------------------------------------------------- */
  const tarjetaInput = document.getElementById("cardnumber");
  const tarjetaValue = tarjetaInput.value.trim();
  const tarjetaError = document.getElementById("tarjetaError");
/* -------------------------------------------------------- */
  const month = document.getElementById("month");
  const monthValue = month.value.trim();
  const monthError = document.getElementById("monthSpanError");
/* -------------------------------------------------------- */
  const year = document.getElementById("year");
  const yearValue = year.value.trim();
  const yearError = document.getElementById("yearSpanError");
/* -------------------------------------------------------- */
  const cvcNumber = document.getElementById("cvcnumber");
  const cvcNumberValue = cvcNumber.value.trim();
  const cvcnumberError = document.getElementById("spanCvcError");

  if (nombreValue === "") {
    nombreError.textContent = "Por favor, ingrese un nombre en la tarjeta.";
    nombreInput.focus();
    return false;
  } else {
    nombreError.textContent = ""; // Limpia el mensaje de error si es válido
  }

  if (tarjetaValue === "") {
    tarjetaError.textContent = "Por favor, ingrese un número de tarjeta";
    tarjetaInput.focus();
    return false;
  } else if (isNaN(tarjetaValue)) {
    tarjetaError.textContent = "Sos tarado?";
    tarjetaInput.focus();
    return false;
  } else {
    tarjetaError.textContent = "";
  }

  if (monthValue === "") {
    monthSpanError.textContent = "Ingrese un mes";
    month.focus();
    return false;
  } else {
    monthSpanError.textContent = "";
  }

  if (yearValue === "") {
    yearSpanError.textContent = "Ingrese un año";
    year.focus();
    return false;
  } else {
    yearSpanError.textContent = "";
  }

  if (cvcNumberValue === "") {
    spanCvcError.textContent = "Ingrese un cvc";
    cvcNumber.focus();
    return false;
  } else {
    spanCvcError.textContent = "";
  }

  return true;
}

