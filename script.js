const searchbtn = document.getElementById("searchbtn");
const inCity = document.getElementById("inCity");
const wContainer = document.getElementsByClassName("wContainer");



searchbtn.onclick = function(){
    const city = inCity.value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=219783c004abe3c6d456793108e2dfd1`;
fetch(url).then(reflect => {
reflect.json().then(json =>{
    let info =json;
    // console.log(info);
    let out = formResponse(info);
    reflectOut.innerHTML = out;

});
});
}

function formResponse(info) {
    let con =""
    if(info.weather.length>1){
      for(let i = 0; i < info.weather.length; i++){
          con += info.weather[i].main;
          if (i != (info.weather.length -1)){

          }
      }
      } else {
          con += data.weather[0].main;
      }  
    
    let output = `<p> Temperature:${Math.floor(info.main.temp)} F<br/>
    <p>Humidity:<p>${info.main.humidity}% <br/>
    <p>Wind::<p> ${info.wind.deg}<br/>`;
    return(output);
}







// $('.icon').attr('src', icon);
// $('.weather').append(weather);
// $('.temp').append(temp);

// $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city+ "&units=imperial&appid=219783c004abe3c6d456793108e2dfd1", 
// function(info){
//     console.log(info);
// let icon = "http://openweathermap.org/img/w/" + info.weather[0].icon+ ".png";
// // console.log(icon);

// let temp = Math.floor(info.main.temp);
// let weather = info.weather[0].main;

// $('.icon').attr('src', icon);
// $('.weather').append(weather);
// $('.temp').append(temp);

// }
// );


