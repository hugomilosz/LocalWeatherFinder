$(document).ready(function(){


if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(function(position) {

  
 var url = "https://api.darksky.net/forecast/0d38c6279ec611f855b8c493229d48e8/"+ position.coords.latitude+","+position.coords.longitude+"?callback=?&units=si";
  
  $.getJSON(url, function(data){
    var weather = data.currently.summary;
    var temp = (data.currently.temperature) +"&deg;C";
    var icon = data.currently.icon;
    var location = data.timezone;
    var fahrenheit = (data.currently.temperature * 9 / 5 + 32).toFixed(1) + "&deg;F";
    
    
    $("#weather").html(weather);
    $("#temp").html(temp);
    $("#fahrenheit").html(fahrenheit);    
    $("#location").html(location);
    var icons = new Skycons({"color": "white"});
icons.add("icon1", Skycons.CLEAR_DAY);
switch(data.currently.icon){
    case("clear-day"):
    icons.set("icon1", Skycons.CLEAR_DAY);
    break;
    case("clear-night"):
    icons.set("icon1", Skycons.CLEAR_NIGHT);
    break;
    case("partly-cloudy-day"):
    icons.set("icon1", Skycons.PARTLY_CLOUDY_DAY);
    break;
    case("partly-cloudy-night"):
    icons.set("icon1", Skycons.PARTLY_CLOUDY_NIGHT);
    break;
    case("cloudy"):
    icons.set("icon1", Skycons.CLOUDY);
    break;
    case("rain"):
icons.set("icon1", Skycons.RAIN);
    break;
    case("sleet"):
icons.set("icon1", Skycons.SLEET);
    break;
    case("snow"):
icons.set("icon1", Skycons.SNOW);
    break;
    case("wind"):
icons.set("icon1", Skycons.WIND);
    break;
    case("fog"):
icons.set("icon1", Skycons.FOG);
    break;
    icon.play();
           }
  });
});
}
 
  
});
$("#fah").on("click", function(){
$(document).ready(function(){


if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(function(position) {

  
 var url = "https://api.darksky.net/forecast/0d38c6279ec611f855b8c493229d48e8/"+ position.coords.latitude+","+position.coords.longitude+"?callback=?&units=si";
  
  $.getJSON(url, function(data){
    var weather = data.currently.summary;
    var temp = (data.currently.temperature * 9 / 5 + 32).toFixed(1) +"&deg;F";
    var icon = data.currently.icon;
    var location = data.timezone;
    var fahrenheit = (data.currently.temperature * 9 / 5 + 32).toFixed(1) + "&deg;F";
    
    
    $("#weather").html(weather);
    $("#temp").html(temp);
    $("#fahrenheit").html(fahrenheit);    
    $("#location").html(location);
    var icons = new Skycons({"color": "white"});
icons.add("icon1", Skycons.CLEAR_DAY);
switch(data.currently.icon){
    case("clear-day"):
    icons.set("icon1", Skycons.CLEAR_DAY);
    break;
    case("clear-night"):
    icons.set("icon1", Skycons.CLEAR_NIGHT);
    break;
    case("partly-cloudy-day"):
    icons.set("icon1", Skycons.PARTLY_CLOUDY_DAY);
    break;
    case("partly-cloudy-night"):
    icons.set("icon1", Skycons.PARTLY_CLOUDY_NIGHT);
    break;
    case("cloudy"):
    icons.set("icon1", Skycons.CLOUDY);
    break;
    case("rain"):
icons.set("icon1", Skycons.RAIN);
    break;
    case("sleet"):
icons.set("icon1", Skycons.SLEET);
    break;
    case("snow"):
icons.set("icon1", Skycons.SNOW);
    break;
    case("wind"):
icons.set("icon1", Skycons.WIND);
    break;
    case("fog"):
icons.set("icon1", Skycons.FOG);
    break;
    icon.play();
           }
  });
});
}
 
  
});
});
$("#cel").on("click", function(){
$(document).ready(function(){


if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(function(position) {

  
 var url = "https://api.darksky.net/forecast/0d38c6279ec611f855b8c493229d48e8/"+ position.coords.latitude+","+position.coords.longitude+"?callback=?&units=si";
  
  $.getJSON(url, function(data){
    var weather = data.currently.summary;
    var temp = data.currently.temperature+"&deg;C";
    var icon = data.currently.icon;
    var location = data.timezone;
    var fahrenheit = (data.currently.temperature * 9 / 5 + 32).toFixed(1) + "&deg;F";
    
    $("#location").html(location);
    $("#weather").html(weather);
    $("#temp").html(temp);
    $("#fahrenheit").html(fahrenheit);    
         
    var icons = new Skycons({"color": "white"});
icons.add("icon1", Skycons.CLEAR_DAY);
switch(data.currently.icon){
    case("clear-day"):
    icons.set("icon1", Skycons.CLEAR_DAY);
    break;
    case("clear-night"):
    icons.set("icon1", Skycons.CLEAR_NIGHT);
    break;
    case("partly-cloudy-day"):
    icons.set("icon1", Skycons.PARTLY_CLOUDY_DAY);
    break;
    case("partly-cloudy-night"):
    icons.set("icon1", Skycons.PARTLY_CLOUDY_NIGHT);
    break;
    case("cloudy"):
    icons.set("icon1", Skycons.CLOUDY);
    break;
    case("rain"):
icons.set("icon1", Skycons.RAIN);
    break;
    case("sleet"):
icons.set("icon1", Skycons.SLEET);
    break;
    case("snow"):
icons.set("icon1", Skycons.SNOW);
    break;
    case("wind"):
icons.set("icon1", Skycons.WIND);
    break;
    case("fog"):
icons.set("icon1", Skycons.FOG);
    break;
    icon.play();
           }
  });
});
}
 
  
});
});