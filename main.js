const apikey = 'f655b17eb3134ced5c376cec4ea91fbf';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
const search = document.querySelector('.search input')
const searchbtn = document.querySelector('.search button')
const icon = document.querySelector('.weather-icon')


async function check(city) {
    const res = await fetch(apiUrl + city + `&appid=${apikey}`);
    
    var data = await res.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp - 273.15)+"°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity  +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed  +"km/h";
    document.querySelector(".des").innerHTML = data.weather[0].description;
    if (data.weather[0].main === 'Clear') {
     icon.src = "images/clear.png";
    }
  else if(data.weather[0].main === 'Clouds')

    {
       icon.src ="images/clouds.png";
    }
    else if(data.weather[0].main === 'Drizzle')

        {
           icon.src ="images/drizzle.png";
        }
        else if(data.weather[0].main === 'Rain')

            {
               icon.src ="images/rain.png";
            }
            else if(data.weather[0].main === 'Snow')

                {
                   icon.src ="images/snow.png";
                }
                else if(data.weather[0].main === 'Mist')

                    {
                       icon.src ="images/mist.png";
                    }
 

}


searchbtn.addEventListener("click", ()=>
{
    check(search.value);
    
})

check("Dehli");