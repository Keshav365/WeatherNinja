

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4cf9b1812amshb82c377196dcc32p146211jsnc0b598172d4b',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city) => {
	Mcity.innerHTML = city;
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    // .then(response => {
	// 	// console.log(response)
	// 	// cloud_pct.innerHTML = response.cloud_pct
	// 	city.innerHTML = response.Main-City
		
	// })
	.then(response => response.json())
	.then(response => {
		console.log(response)
		cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity_head.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
		// cloud_pct_del.innerHTML = response.cloud_pct
		temp_del.innerHTML = response.temp
		// feels_like_del.innerHTML = response.feels_like
		humidity_del.innerHTML = response.humidity
		min_temp_del.innerHTML = response.min_temp
		max_temp_del.innerHTML = response.max_temp
		wind_speed_del.innerHTML = response.wind_speed
		// wind_degrees_del.innerHTML = response.wind_degrees
		sunrise_del.innerHTML = response.sunrise
		sunset_del.innerHTML = response.sunset
	})
	.catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
	e.preventDefault();
getWeather(city.value);
})
getWeather("Chandigarh");


const getWeatherchd = (city) => {
	// Mcity.innerHTML = city;
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chandigarh', options)
    // .then(response => {
	// 	// console.log(response)
	// 	// cloud_pct.innerHTML = response.cloud_pct
	// 	city.innerHTML = response.Main-City
		
	// })
	.then(response => response.json())
	.then(response => {
		console.log(response)
		// cloud_pct_chd.innerHTML = response.cloud_pct
		temp_chd.innerHTML = response.temp
		// feels_like_chd.innerHTML = response.feels_like
		humidity_chd.innerHTML = response.humidity
		min_temp_chd.innerHTML = response.min_temp
		max_temp_chd.innerHTML = response.max_temp
		wind_speed_chd.innerHTML = response.wind_speed
		// wind_degrees_chd.innerHTML = response.wind_degrees
		sunrise_chd.innerHTML = response.sunrise
		sunset_chd.innerHTML = response.sunset
	})
	.catch(err => console.error(err));
}
getWeatherchd("chandigarh");

const getWeatherkrk = (city) => {
	// Mcity.innerHTML = city;
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kurukshetra', options)
    // .then(response => {
	// 	// console.log(response)
	// 	// cloud_pct.innerHTML = response.cloud_pct
	// 	city.innerHTML = response.Main-City
		
	// })
	.then(response => response.json())
	.then(response => {
		console.log(response)
		// cloud_pct_krk.innerHTML = response.cloud_pct
		temp_krk.innerHTML = response.temp
		// feels_like_krk.innerHTML = response.feels_like
		humidity_krk.innerHTML = response.humidity
		min_temp_krk.innerHTML = response.min_temp
		max_temp_krk.innerHTML = response.max_temp
		wind_speed_krk.innerHTML = response.wind_speed
		// wind_degrees_krk.innerHTML = response.wind_degrees
		sunrise_krk.innerHTML = response.sunrise
		sunset_krk.innerHTML = response.sunset
	})
	.catch(err => console.error(err));
}
getWeatherkrk("Kurukshetra");

const getWeathersol = (city) => {
	// Mcity.innerHTML = city;
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seoul', options)
    // .then(response => {
	// 	// console.log(response)
	// 	// cloud_pct.innerHTML = response.cloud_pct
	// 	city.innerHTML = response.Main-City
		
	// })
	.then(response => response.json())
	.then(response => {
		console.log(response)
		// cloud_pct_sol.innerHTML = response.cloud_pct
		temp_sol.innerHTML = response.temp
		// feels_like_sol.innerHTML = response.feels_like
		humidity_sol.innerHTML = response.humidity
		min_temp_sol.innerHTML = response.min_temp
		max_temp_sol.innerHTML = response.max_temp
		wind_speed_sol.innerHTML = response.wind_speed
		// wind_degrees_sol.innerHTML = response.wind_degrees
		sunrise_sol.innerHTML = response.sunrise
		sunset_sol.innerHTML = response.sunset
	})
	.catch(err => console.error(err));
}
getWeathersol("Seoul");
