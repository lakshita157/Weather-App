let weather = {
    "apiKey": "00e19ae69be213d6bd7038a4d860ded2",
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city
            + "&units=metric&appid=" 
            + this.apiKey
            
        ).then((response) => response.json())
        .then((data) => console.log(data));
    },
    displayWeather: function(data){

    }
};
