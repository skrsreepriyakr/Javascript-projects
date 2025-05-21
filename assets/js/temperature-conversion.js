
const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;


function convert() {
    
    if(toFahrenheit.checked){
        // result.textContent = "You selected toFahrenheit";
        temp = Number(textBox.value);   //get the number from textbox
        temp = temp * 9 / 5 + 32;  //formula to convert toFahrenheit
        result.textContent = temp.toFixed(1) + "°F"  //Alt+0176
    }
    else if(toCelsius.checked){
        // result.textContent = "You selected toCelsius";
        temp = Number(textBox.value);  
        temp = (temp - 32) * (5/9);  
        result.textContent = temp.toFixed(1) + "°C"
    }
    else{
        result.textContent = "Select a unit";
    }
}