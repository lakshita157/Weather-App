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
        const { name } = data;
        const{ icon, description } = data.weather;
        const{ temp, humidity } = data.main;
        const{ speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
    }
};
