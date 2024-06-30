
// Footer script to get the year and last modified date

const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = document.lastModified;

// wind child function

const windChild = document.querySelector("#wind-child");
const temperature = parseFloat(document.querySelector("#temperature").textContent);
const windSpeed = parseFloat(document.querySelector("#wind-speed").textContent);

function GetWindChild (temperature, windSpeed) {

    if (temperature <= 10 && windSpeed > 4.8) {

        var result= 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);

        return `${result.toFixed(2)} °C`;

    } else {
        return 'N/A';
    }
    
}

windChild.textContent = GetWindChild(temperature, windSpeed);

    