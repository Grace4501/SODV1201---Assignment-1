function fahrenheitToCelsius (fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function celsiusToKelvin(celsius) {
    return parseFloat(celsius) + 273.15;
}

var convertTemp = function ()
{
    var tempInput = document.getElementById("fahrenheit");
    var result = document.getElementById("convertedTemp");
    var fahrenheit = parseFloat(tempInput.value);

    if (!isNaN(fahrenheit))
    {
        var celsius = fahrenheitToCelsius(fahrenheit).toFixed(2);
        var kelvin = celsiusToKelvin(parseFloat(celsius)).toFixed(2);
    
        result.innerHTML = `Temperature in Celsius: ${celsius}°C <br> Temperature in Kelvin: ${kelvin}K`;
    }
    else
    {
        result.innerHTML = "Invalid input";
    }
}