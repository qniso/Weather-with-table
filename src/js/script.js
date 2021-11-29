window.onload = () => {
    showTodaysWeather();
    showtable();

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
            let minutes = now.getMinutes();

            userCity.innerHTML = data.name;
            temp.innerHTML = (data.main.temp - 273).toFixed(0); //КОНВЕРТАЦИЯ В ЦЕЛЬСИИ 
            feelsLike.innerHTML = (data.main.feels_like - 273).toFixed(0); //КОНВЕРТАЦИЯ В ЦЕЛЬСИИ
            time.innerHTML = `${hour}:${minutes}`;

            // console.log(data.weather);
            let dataWeather = data.weather;

            dataWeather.forEach(item => {
                if (item.main == "clear") {
                    forecastImg.src = 'src/img/clear-sky.png';
                    aboutForecast.innerHTML = 'Солнечно';
                } else if (item.main == "Mist") {
                    forecastImg.src = 'src/img/mist.png';
                    aboutForecast.innerHTML = 'Туман';
                } else if (item.main == "Snow") {
                    forecastImg.src = 'src/img/snowy.png';
                    aboutForecast.innerHTML = 'Снег';
                } else if (item.main == "Rain") {
                    forecastImg.src = 'src/img/rain.png';
                    aboutForecast.innerHTML = 'Дождь';
                } else if (item.main == "Clouds") {
                    forecastImg.src = 'src/img/cloud.png';
                    aboutForecast.innerHTML = 'Облачно';
                }
            })


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
    let i = 0;
    let listUsers = [];

    let newArray = listUsers;
    document.querySelector('.add-user').onclick = () => {

        //ДОБАВЛЕНИЕ ПОЛЬЗОВАТЕЛЯ В ТАБЛИЦУ
        let userValue = document.querySelector("#name-value").value;
        let phoneValue = document.querySelector("#phone-value").value;

        let userTable = document.querySelector('.table'); //получаем таблицу 
        let rowGenerate = document.createElement('tr'); //Создаём елемент строки 

        rowGenerate.id.add

        newArray.push([i++, userValue, phoneValue]);

        for (let i = 0; i < newArray.length; i++) {
            for (let j = 0; j < newArray.length; j++) {
                console.log();
                rowGenerate.innerHTML = `
                <td>${newArray[i][0]}</td>
                <td class='itemArrayName'>${newArray[i][1]}</td>
                <td class='itemArrayPhone'>${newArray[i][2]}</td>
                <td><a href="#modal2" class="modal-trigger " id="changeUser"><img src="src/img/edit.png" style="width: 50px"/></a></td>`;
                userTable.appendChild(rowGenerate);
                break;
            }

        }
        console.log(newArray);


    }
    document.querySelector('#changeBtn').onclick = () => {
        //ИЗМИНЕНИЕ ДАННЫХ О ПОЛЬЗОВАТЕЛЕ В ТАБЛИЦЕ
        let changeUserName = document.querySelector('#changeUserName').value;
        let changeUserPhone = document.querySelector('#changeUserPhone').value;
        let selectUserid = document.querySelector('#selectUserid').value;

        let itemArrayName = document.querySelector('.itemArrayName');
        let itemArrayPhone = document.querySelector('.itemArrayPhone');

        newArray.forEach((item, index, array) => {
                console.log(`Array id ${index}`);
                if (index == selectUserid) {
                    //ВНОСИМ ИЗМИНЕНИЯ В МАССИВ
                    item[1] = changeUserName;
                    item[2] = changeUserPhone;

                    //ИЗМЕНЯЕМ ТАБЛИЦУ
                    itemArrayName.innerHTML = `
                    <td class='itemArrayName'>${item[1] = changeUserName}</td>`;
                    itemArrayPhone.innerHTML = `
                    <td class='itemArrayPhone'>${item[2] = changeUserPhone}</td>`;
                }
                let idRow = document.querySelector("[class='" + item[0] + "']");

                console.log(idRow);

                console.log(array);
            })
            // for (let i = 0; i < newArray.length; i++) {
            //     for (let j = 0; j < newArray.length; j++) {
            //         rowGenerate.innerHTML = `
            //         <td>${newArray[i][0]}</td>
            //         <td>${newArray[i][1] = changeUserName}</td>
            //         <td>${newArray[i][2] = changeUserPhone}</td>
            //         <td><a href="#modal2" class="modal-trigger " id="changeUser"><img src="src/img/edit.png" style="width: 50px"/></a></td>`;

        //         // console.log(newArray);

        //     }
        // }
    }
    let selectedOption = document.querySelector('#selectItem').value;


    document.querySelector('#searchCard').onclick = () => {

    }
}