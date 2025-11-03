function getWeather(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            try {
                resolve("Winter");
            } catch (error) {
                reject(error);
            }
        },1000);
    })
}

// const promise = getWeather();
// promise.then(function(data){
//     console.log("the Promise is resolved",data);
// })
// promise.catch(function(data){
//     console.log("the Promise is rejected",data);
// })

function getWeatherIcon(weather){
    switch(weather){
        case "Winter":
            return "❄️";
        case "Sunny":
            return "☀️";
        case "Rainy":
            return "🌧️";
        default:
            return "🌈";
    }
}

function onSuccess(data){
    console.log("the promise is resolved",data);
}

function onFailure(data){
    console.log("the promise is rejected",data);
}

getWeather().then(getWeatherIcon)
.then(onSuccess).catch(onFailure);


function fetchData() {
    return new Promise((resolve, reject) => {
        fetch('https://api.weather.gov/gridpoints/0KX/35,35/forecast')
            .then(response => response.json())
            .then(data => resolve(data.properties.periods[1].shortForecast))
            .catch(error => reject(error));
    });
}

function displayData(weather) {
    console.log("The weather forecast is:", weather);
}

fetchData().then(displayData).catch(error => {
    console.error("Error fetching weather:", error);
});