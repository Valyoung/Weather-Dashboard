const input = document.querySelector('.input_text');
const main = document.querySelector('#name');
const temp = document.querySelector('.temp');
const desc = document.querySelector('.desc');
const clouds = document.querySelector('.clouds');
const button = document.querySelector('.submit');
const humidity = document.querySelector('.hum');
const wind = document.querySelector('.wind');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=7ed5d03992aaf558a8212aaafb8c6489&units=imperial')
.then(response => response.json())
.then(data => {
  const tempVal = data['main']['temp'];
  const humVal = data['main']['humidity'];
  const nameVal = data['name'];
  const descVal = data['weather'][0]['description'];
  const windVal = data['wind']['speed'];


  main.innerHTML = nameVal;
  desc.innerHTML = "Description: "+descVal;
  temp.innerHTML = "Temp: "+tempVal + " °F";
  input.value ="";
  humidity.innerHTML = "Humidity: " +humVal + "%";
  wind.innerHTML = "Wind: "+ windVal + " MPH";

  

})

})













// $(document).ready(function() {
// $("#searchbtn").click(function(){
// let city = $("#City").val();
// let key = '7ed5d03992aaf558a8212aaafb8c6489';

// $.ajax({
//     url: 'http://api.openweathermap.org/data/2.5/weather',
//     dataType: 'json',
//     type: 'GET',
//     data: {q:city, appid: key, units: 'imperial'},

//     success: function(data){
//         let weatherFun = '';
//         $.each(data.weather, function(index, val){
//            weatherFun +=  '<p><b>' 
//            + data.name + "</b><img src=" + val.icon +".png></p>" 
//            + data.main.temp 
//            + '&deg;F ' +' |' + val.main + "," + val.description
//         });
//         $("displayWaether").html(weatherFun);

//     }
// });
// });
// });



