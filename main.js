const apikey = 'f655b17eb3134ced5c376cec4ea91fbf';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
const search = document.querySelector('.search input')
const searchbtn = document.querySelector('.search button')
const icon = document.querySelector('.weather-icon')
const locationbtn = document.querySelector(".getloc");

locationbtn.addEventListener("click", () => {

   if(navigator.geolocation)
   {
      navigator.geolocation.getCurrentPosition(async (pos)=>
      {
           lon = pos.coords.longitude;
           lat = pos.coords.latitude;
           const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`);
           const data = await res.json()
               document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp - 273.15)+"°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity  +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed  +"km/h";
    document.querySelector(".des").innerHTML = data.weather[0].description;
    if (data.weather[0].main === 'Clear') {
     icon.src = "clear.png";
    }
  else if(data.weather[0].main === 'Clouds')

    {
       icon.src ="clouds.png";
    }
    else if(data.weather[0].main === 'Drizzle')

        {
           icon.src ="drizzle.png";
        }
        else if(data.weather[0].main === 'Rain')

            {
               icon.src ="rain.png";
            }
            else if(data.weather[0].main === 'Snow')

                {
                   icon.src ="snow.png";
                }
                else if(data.weather[0].main === 'Mist')

                    {
                       icon.src ="mist.png";
                    }
   else if(data.weather[0].main === 'Smoke')

                    {
                       icon.src ="smoke.png";
                    }


      
      });

   } 
   else
   {
      alert("There is an error in geting your location ")
   }



}
);


async function check(city) {
    const res = await fetch(apiUrl + city + `&appid=${apikey}`);
    
    var data = await res.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp - 273.15)+"°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity  +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed  +"km/h";
    document.querySelector(".des").innerHTML = data.weather[0].description;
    if (data.weather[0].main === 'Clear') {
     icon.src = "clear.png";
    }
  else if(data.weather[0].main === 'Clouds')

    {
       icon.src ="clouds.png";
    }
    else if(data.weather[0].main === 'Drizzle')

        {
           icon.src ="drizzle.png";
        }
        else if(data.weather[0].main === 'Rain')

            {
               icon.src ="rain.png";
            }
            else if(data.weather[0].main === 'Snow')

                {
                   icon.src ="snow.png";
                }
                else if(data.weather[0].main === 'Mist')

                    {
                       icon.src ="mist.png";
                    }
   else if(data.weather[0].main === 'Smoke')

                    {
                       icon.src ="smoke.png";
                    }

}


searchbtn.addEventListener("click", ()=>
{
    check(search.value);
    
})
search.addEventListener("keyup", function(e) {
   if (e.key === "Enter") {
      check(search.value);
   }
});
check("Dehli");
