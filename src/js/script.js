window.onload = () => {
    showTodaysWeather()
    showtable()

}
$(document).ready(function() {
    $('select').formSelect();
});
$(document).ready(function() {
    $('.modal').modal();
});




function showTodaysWeather() {
    let apiKey = `bc5b007aa7c41ae1b4703074da2f44aa`;
    let userCity = 'Dnepr';
    // api.openweathermap.org/data/2.5/forecast/daily?q=${userCity}&cnt={cnt}&appid=${apiKey}


    fetch(`https://api.openweathermap.org/data/2.5/weather/?q=${userCity}&appid=${apiKey}`)
        .then((response) => {
            return response.json();
        })
        .then(data => {
            userCity = document.querySelector('#userCity');
            temp = document.querySelector('#temp');
            feelsLike = document.querySelector('#feelsLike');
            forecastImg = document.querySelector('#forecastImg');
            aboutForecast = document.querySelector('#aboutForecast');
            time = document.querySelector('#time');
            const now = new Date();
            let hour = now.getHours();

            userCity.innerHTML = data.name;
            temp.innerHTML = (data.main.temp - 273).toFixed(0); //КОНВЕРТАЦИЯ В ЦЕЛЬСИИ 
            feelsLike.innerHTML = (data.main.feels_like - 273).toFixed(0); //КОНВЕРТАЦИЯ В ЦЕЛЬСИИ
            time.innerHTML = hour;


            if (data.weather.main = 'clear') {
                forecastImg.src = 'src/img/clear-sky.png';
                aboutForecast.innerHTML = 'Солнечно';
            } else if (data.weather.main = 'rain') {
                forecastImg.src = 'src/img/rain.png';
                aboutForecast.innerHTML = 'Дождь';
            } else if (data.weather.main = 'snow') {
                forecastImg.src = 'src/img/snowy.png';
                aboutForecast.innerHTML = 'Снег';
            } else if (data.weather.main = 'clouds') {
                forecastImg.src = 'src/img/cloud.png';
                aboutForecast.innerHTML = 'Облачно';
            }

            console.log(hour);
            console.log(data); //ПОЛУЧАЕМ ДАННЫЕ 
        })
        .catch(() => {
            const page = document.querySelector('.weater-foracast');
            const errorPage = document.querySelector('.error-page');

            errorPage.style.display = 'block';
            page.style.display = 'none';

            console.log('error'); //ПРОВЕРКА ОТРАБОТКИ ОШИБКИ В КОНСОЛИ 
        })
        //В OPENWEATHERFORECAST ПРОГНОЗ ПОГОДНЫ НА 5 ДНЕЙ ПЛАТНЫЙ И НЕДОСТУПЕН ПРИ ПРОБНОЙ ПОДПИСКЕ 
}

function showtable() {
    let i = 1;
    let listUsers = [];


    document.querySelector('.add-user').onclick = () => {
        let userValue = document.querySelector("#name-value").value;
        let phoneValue = document.querySelector("#phone-value").value;


        let userTable = document.querySelector('.table'); //получаем таблицу 
        let rowGenerate = document.createElement('tr'); //Создаём елемент строки 
        let newArray = listUsers;

        newArray.push([i++, userValue, phoneValue]);

        for (let i = 0; i < newArray.length; i++) {
            for (let j = 0; j < newArray.length; j++) {
                // console.log(newArray[i][j]);
                console.log(newArray[i]);

                rowGenerate.innerHTML = `
                ${newArray[i][0]}</td>
                <td>${newArray[i][1]}</td>
                <td>${newArray[i][2]}</td>
                <td><a href="#modal2" class="modal-trigger " id="changeUser"><img src="src/img/edit.png" style="width: 50px"/></a></td>`;
                userTable.appendChild(rowGenerate);

            }
        }

        document.querySelector('#changeBtn').onclick = () => {
            let changeUserName = document.querySelector('#changeUserName').value;
            let changeUserPhone = document.querySelector('#changeUserPhone').value;

            for (let i = 0; i < newArray.length; i++) {
                for (let j = 0; j < newArray.length; j++) {
                    rowGenerate.innerHTML = `
                    <td>${newArray[i][0]}</td>
                    <td>${newArray[i][1] = changeUserName}</td>
                    <td>${newArray[i][2] = changeUserPhone}</td>
                    <td><a href="#modal2" class="modal-trigger " id="changeUser"><img src="src/img/edit.png" style="width: 50px"/></a></td>`;

                    // console.log(newArray);

                }
            }
        }

    }

}