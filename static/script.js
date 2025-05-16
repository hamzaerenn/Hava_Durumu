document.addEventListener('DOMContentLoaded', () => {
    const citySelect = document.getElementById('citySelect');
    const cityName = document.getElementById('cityName');
    const temperature = document.getElementById('temperature');
    const weatherDescription = document.getElementById('weatherDescription');
    const windSpeed = document.getElementById('windSpeed');
    const humidity = document.getElementById('humidity');
    const weatherAnimation = document.getElementById('weatherAnimation');

    const cityBackgrounds = {
        istanbul: { url: 'url(/static/backgrounds/istanbul.jpeg)' },
        ankara:   { url: 'url(/static/backgrounds/ankara.jpeg)' },
        izmir:    { url: 'url(/static/backgrounds/izmir.jpeg)' },
        antalya:  { url: 'url(/static/backgrounds/antalya.jpeg)' },
        bursa:    { url: 'url(/static/backgrounds/bursa.jpg)' },
        konya:    { url: 'url(/static/backgrounds/konya.jpg)' },
        trabzon:  { url: 'url(/static/backgrounds/trabzon.jpg)' }
    };
    const weatherTypes = [
        { type: 'sunny', desc: 'Güneşli' },
        { type: 'rainy', desc: 'Yağmurlu' },
        { type: 'cloudy', desc: 'Bulutlu' },
        { type: 'snowy', desc: 'Karlı' }
    ];

    citySelect.addEventListener('change', updateWeather);
    updateWeather();

    function randomBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function clearAnimation() {
        weatherAnimation.innerHTML = '';
        const oldRain = document.querySelector('.rain-animation');
        if (oldRain) oldRain.remove();
        const oldSnow = document.querySelector('.snow-animation');
        if (oldSnow) oldSnow.remove();
    }

    function createSun() {
        clearAnimation();
        const sun = document.createElement('div');
        sun.className = 'sun-anim';
        weatherAnimation.appendChild(sun);
    }

    function createCloud() {
        clearAnimation();
        const cloud = document.createElement('div');
        cloud.className = 'cloud-anim';
        weatherAnimation.appendChild(cloud);
    }

    function createRain() {
        clearAnimation();
        const rain = document.createElement('div');
        rain.className = 'rain-animation';
        for (let i = 0; i < 60; i++) {
            const drop = document.createElement('div');
            drop.className = 'raindrop';
            drop.style.left = `${Math.random() * 100}%`;
            drop.style.animationDelay = `${Math.random() * 2}s`;
            rain.appendChild(drop);
        }
        document.body.appendChild(rain);
        const cloud = document.createElement('div');
        cloud.className = 'cloud-anim';
        weatherAnimation.appendChild(cloud);
    }

    function createSnow() {
        clearAnimation();
        const snow = document.createElement('div');
        snow.className = 'snow-animation';
        for (let i = 0; i < 40; i++) {
            const flake = document.createElement('div');
            flake.className = 'snowflake';
            flake.style.left = `${Math.random() * 100}%`;
            flake.style.animationDelay = `${Math.random() * 2}s`;
            snow.appendChild(flake);
        }
        document.body.appendChild(snow);
        const cloud = document.createElement('div');
        cloud.className = 'cloud-anim';
        weatherAnimation.appendChild(cloud);
    }

    function updateWeather() {
        const selectedCity = citySelect.value;
        cityName.textContent = citySelect.options[citySelect.selectedIndex].text;
        document.body.style.backgroundImage = cityBackgrounds[selectedCity].url;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';

        const weather = weatherTypes[randomBetween(0, weatherTypes.length - 1)];
        temperature.textContent = randomBetween(-5, 38);
        weatherDescription.textContent = weather.desc;
        windSpeed.textContent = `${randomBetween(2, 40)} km/s`;
        humidity.textContent = `${randomBetween(20, 90)}%`;

        document.body.classList.remove('sunny', 'rainy', 'cloudy', 'snowy');
        document.body.classList.add(weather.type);
        clearAnimation();
        if (weather.type === 'sunny') createSun();
        if (weather.type === 'cloudy') createCloud();
        if (weather.type === 'rainy') createRain();
        if (weather.type === 'snowy') createSnow();
    }
}); 