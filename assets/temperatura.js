// Función que reciba como parametro los grados Fahrenheit y los convierta a grados centígrados.
// ℉ a ℃ usa la siguiente fórmula (℉ - 32) / 1.8

const fahrenheitToCelsius = (a) => (a-32)/1.8;
fahrenheitToCelsius()

// Función que reciba como parametro los grados Celcius y los convierta a grados Fahrenheit.
// ℃ a ℉ usa la siguiente fórmula ℃ * (9 /5) + 32 

const celciusToFahrenheit = (a) => (a*1.8)+32;
celsiusToFahrenheit()

// Función que reciba como parametro los grados Celcius y los convierta a grados Kelvin.
// ℃ a ºK usa la siguiente fórmula ℃ + 273.15

const celciusToKelvin = (a) => a+32;
celsiusToKelvin()
