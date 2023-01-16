//Taking a city-themed background from unsplash.com

export function fetchBackground(){
    let unsplashLink = 'https://api.unsplash.com/photos/random/?client_id=QKAXLrXvBuY_IbjPp0PAW7jWeWV3SHnNmc__4wOnkuY&collections=83895897';
    let backgroundImg = document.getElementById('random-img');

    fetch(unsplashLink)
    .then((response) => response.json())
    .then((jsonData) => {
    backgroundImg.src = jsonData.urls.regular;
    });
}

