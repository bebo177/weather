// Start First Card Location And Its Information
let city = document.getElementById('city');
let temp = document.getElementById('temperature');
let icon = document.getElementById('cond-icon');
let condition = document.getElementById('condition');
// End First Card Location And Its Information
// Start Day Two
let iconTwo = document.getElementById('icon-two');
let maxTwo = document.getElementById('max-temp-two');
let minTwo = document.getElementById('min-temp-two');
let conditionTwo = document.getElementById('cond-two');
// End Day Two
// Start Day Three
let iconThree = document.getElementById('icon-three');
let maxThree = document.getElementById('max-temp-three');
let minThree = document.getElementById('min-temp-three');
let conditionThree = document.getElementById('cond-three');
// End Day Three
// The Date of Days
let day = document.getElementById('day');
let dayTwo = document.getElementById('second-day');
let dayThree = document.getElementById('third-day');
let date = document.getElementById('date-of-day');
//Getting Date
let currentDate = new Date();
let currentDay = currentDate.getDay();
let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

var secDay;
if (weekDay[currentDay] == undefined) {
  currentDay = 0;
  secDay = currentDay + 1;
  day.innerHTML = weekDay[currentDay];
  dayTwo.innerHTML = weekDay[secDay];
  dayThree.innerHTML = weekDay[secDay + 1];
} else if (weekDay[secDay] == undefined) {
  secDay = 0;
  dayTwo.innerHTML = weekDay[secDay];
  dayThree.innerHTML = weekDay[secDay + 1];
} else if (weekDay[secDay + 1] == undefined) {
  dayThree.innerHTML = weekDay[0];
} else {
}
day.innerHTML = weekDay[currentDay];
dayTwo.innerHTML = weekDay[currentDay + 1];
dayThree.innerHTML = weekDay[currentDay + 2];
let currentNumDay = currentDate.getDate();
let currentMonth = currentDate.getMonth();
let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
date.innerText = `${currentNumDay} ${month[currentMonth]} `;
//End Getting Date

let search = document.getElementById('search');
// Getting Data From API
async function getData(ay) {
  let data = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=0f6e278441334adc9e9201312230308&q=${ay}&days=3`)
  if (data.ok && 400 != data.status) {
    let dataInJson = await data.json();
    city.innerHTML = dataInJson.location.name;
    temp.innerHTML = `${dataInJson.current.temp_c}&deg;C`;
    icon.setAttribute("src", `${dataInJson.current.condition.icon}`);
    condition.innerHTML = dataInJson.current.condition.text;
    secDay(dataInJson);
    thirdDay(dataInJson);
    console.log(dataInJson)
  }

}
// getData()
search.addEventListener('keyup', () => {
  getData(search.value);
})


// cards day one and day two

function secDay(data) {
  iconTwo.setAttribute("src", `${data.forecast.forecastday[1].day.condition.icon}`)
  maxTwo.innerHTML = `${data.forecast.forecastday[1].day.maxtemp_c}&deg; C`;
  minTwo.innerHTML = `${data.forecast.forecastday[1].day.mintemp_c}&deg; `;
  conditionTwo.innerHTML = data.forecast.forecastday[1].day.condition.text;
}
function thirdDay(data) {
  iconThree.setAttribute("src", `${data.forecast.forecastday[2].day.condition.icon}`)
  maxThree.innerHTML = `${data.forecast.forecastday[2].day.maxtemp_c}&deg; C`;
  minThree.innerHTML = `${data.forecast.forecastday[2].day.mintemp_c}&deg; `;
  conditionThree.innerHTML = data.forecast.forecastday[2].day.condition.text;
}






