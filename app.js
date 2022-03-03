const API_KEY = `d8ae9672785b88524f283f237dedd632`;
const searchWeather = () => {
    const inputField = document.getElementById('input-field').value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${inputField}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data=>displayWeather(data))
}

// const getCity = (city) => {
//     const city = document.getElementById('city').innerText;
// }


const displayWeather = (weather) => {
    console.log(weather);
    const city = document.getElementById('city');
    city.innerText = weather.name;
    const degree = document.getElementById('degree');
    degree.innerText = weather.main.temp;
    const cloud = document.getElementById('cloud');
    cloud.innerText = weather.weather[0].main;
    const url = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('imgIcon');
    imgIcon.setAttribute('src', url);

    
}