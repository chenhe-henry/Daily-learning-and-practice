var city = "Sydney";
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=c9454d64d3053261c04428c4d9c23325", function (data) {
    console.log(data);

    var icon = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
    var city = data.name;
    var temp = Math.floor(data.main.temp);
    var maxTemp = Math.floor(data.main.temp_max);
    var minTemp = Math.floor(data.main.temp_min);
    var weather = data.weather[0].main;
    var description = data.weather[0].description;
    $('.icon').attr('src', icon);
    $('.city').append(city);
    $('.weather').append(weather);
    $('.description').append(description);
    $('.temp').append(temp);
    $('.maxTemp').append(maxTemp);
    $('.minTemp').append(minTemp);
    if (temp > 18 && weather === 'Sunny') {
        $('.condition').append(`Nice weather`);
    } else if (temp < 18) {
        $('.condition').append(`a litte bit cool weather`);
    } else {
        $('.condition').append(`Eeeee....`);
    };
    // setInterval("currentTime.innerHTML=new Date()", 1000);


});