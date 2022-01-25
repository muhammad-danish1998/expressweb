let submitBtn = document.getElementById('weatherBtn');
let cityName = document.getElementById('cityName');
let city_name = document.getElementById('city_name');
let temp = document.getElementById('temp');
let temp_status = document.getElementById('temp_status');

const weatherInfo = async (e) => {
    e.preventDefault();
    let cityVal = cityName.value;

    if (cityVal === '') {
        city_name.innerHTML = `Please Enter City Name`
    }
    else {
        try {

            let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=b4bfe5aea55dbfbc6b545705cbbb1d7d`;
            let res = await fetch(api);
            let data = await res.json()
            let arrData = [data];
            temp.innerText = arrData[0].main.temp
            city_name.innerHTML = `${arrData[0].name} ${arrData[0].sys.country}`;
            let weatherStatus = arrData[0].weather[0].main;
            if (weatherStatus == 'Clear') {
                temp_status.innerHTML = "<i class='fas abc fa-sun' style='color: #eccc68;'></i>"
            }
            else if (weatherStatus == 'Clouds') {
                temp_status.innerHTML = "<i class='fas abc fa-cloud' style='color: #f1f2f6;'></i>"
            }
            else if (weatherStatus == 'Rain') {
                temp_status.innerHTML = "<i class='fas abc fa-cloud-rain' style ='color: #a4b0be'></i>"
            }
            else {
                temp_status.innerHTML = "<i class='fas abc fa-sun' style='color: #eccc68;'></i>"
            }


        }
        catch {
            city_name.innerHTML = `Please Enter City Name Properly`

        }
    }

}
submitBtn.addEventListener('click', weatherInfo);
