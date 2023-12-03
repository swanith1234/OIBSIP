let celciusInput = document.querySelector("#celcius>input");
let kelvinInput = document.querySelector("#kelvin>input");
let fahrenheitInput = document.querySelector("#fahrenheit>input");
let convertButton = document.querySelector("#convert");
let resetButton = document.querySelector("#reset");

function convertTemperature() {
  // Check if the temperature fields are empty
  const celciusValue = parseFloat(celciusInput.value);
  const kelvinValue = parseFloat(kelvinInput.value);
  const fahrenheitValue = parseFloat(fahrenheitInput.value);

  if (isNaN(celciusValue)&&isNaN(kelvinValue) && isNaN(fahrenheitValue)) {
    console.log("Please enter valid temperature values.");
    return;
  }

  // Convert the temperatures based on the input value that is not empty
  if (!isNaN(celciusValue)) {
    const kelvinConverted = celciusValue + 273.15;
    const fahrenheitConverted = (celciusValue * 9 / 5) + 32;

    kelvinInput.value = kelvinConverted;
    fahrenheitInput.value = fahrenheitConverted;
  } else if (!isNaN(kelvinValue)) {
    const celciusConverted = kelvinValue - 273.15;
    const fahrenheitConverted = (kelvinValue * 9 / 5) + 32;

    celciusInput.value = celciusConverted;
    fahrenheitInput.value = fahrenheitConverted;
  } else if (!isNaN(fahrenheitValue)) {
    const celciusConverted = (fahrenheitValue - 32) * 5 / 9;
    const kelvinConverted = celciusConverted + 273.15;

    celciusInput.value = celciusConverted;
    kelvinInput.value = kelvinConverted;
  }
}

convertButton.addEventListener("click", convertTemperature);
resetButton.addEventListener("click", ()=>{
    celciusInput.value=celciusInput.ariaPlaceholder;
    kelvinInput.value=kelvinInput.ariaPlaceholder;;
    fahrenheitInput.value=fahrenheitInput.ariaPlaceholder;

});

