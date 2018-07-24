/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Unicorn;
function Unicorn(avatar) {

  var position = 800;
  var waiting = 10;
  var target = 0;
  var animationDuration = 0;

  //первое появление
  move(-200, 4);


  //генератор поведения
  setInterval(function() {   
    if (waiting !== 0) {
      waiting--;
    } else {
      waiting += 3;
      target = searchWay();
      console.log('unicorn: my position ' + position + 'px, moving ' + target + 'px' );
      animationDuration = (Math.abs(target) / 50);
      waiting += animationDuration;
      move(target, animationDuration);
    }
  }, 1000);

  //вспомогательные функции
  function getRandom(min, max, step) {
    return Math.round(Math.random() * (max - min) + min) * step;
  }

  function addCss (string) {
    avatar.className = 'unicorn' + ' ' + 'unicorn--' + string;
  }

  //анимация через requestAnimationFrame
  function animate(draw, duration, callback) {
    var start = performance.now();
    requestAnimationFrame(function animate(time) {
      var timePassed = time - start;
      if (timePassed > duration) {
        timePassed = duration;
      }
      draw(timePassed);
      if (timePassed < duration) {
        requestAnimationFrame(animate);
      } else {
        if (callback) callback();
      }
    });
  }

  //поиск пути движения
  function searchWay() {
    return  getRandom(2, 12, 50) - position;
  }

  //движение
  function move(target, animationDuration) {
    if (target < 0) {
      addCss('runleft');
      animate(function(timePassed) {
        avatar.style.left = position - timePassed / 20 + 'px';
      }, 1000 * animationDuration, function() {
        position += target;
        addCss('stayright');
      });
    } else {
      addCss('runright');
      animate(function(timePassed) {
        avatar.style.left = position + timePassed / 20 + 'px';
      }, 1000 * animationDuration, function() {
        position += target;
        addCss('stayleft');
      });
    }
  }
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_unicorn__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_weather__ = __webpack_require__(2);





document.addEventListener('DOMContentLoaded', function() {
  Object(__WEBPACK_IMPORTED_MODULE_1__modules_weather__["a" /* default */])();
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = weatherInit;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__unicorn__ = __webpack_require__(0);


function weatherInit() {

  var weather = document.querySelector('.weather');
  var weatherClouds01 = weather.querySelector('.weather__clouds01');
  var weatherClouds02 = weather.querySelector('.weather__clouds02');
  var weatherRain = weather.querySelector('.weather__rain');
  var weatherCity = weather.querySelector('.weather__city');
  var weatherDate = weather.querySelector('.weather__date');
  var weatherDay = weather.querySelector('.weather__day');
  var weatherPday = weather.querySelector('.weather__pday');
  var weatherTodayTemp = weather.querySelector('.weather__today-temp');
  var weatherTodayIcon = weather.querySelector('.weather__today-icon');
  var weatherTomorrowTemp = weather.querySelector('.weather__tomorrow-temp');
  var weatherTomorrowIcon = weather.querySelector('.weather__tomorrow-icon');
  var weatherLog = weather.querySelector('.weather__log');
  var weatherFix = weather.querySelector('.weather__fix');
  var weatherDialog = weather.querySelector('.weather__dialog');
  var unicornAvatar = weather.querySelector('.unicorn');
  var randomizer = weather.querySelector('.weather__randomizer');
  var weatherDialogText = weather.querySelector('.weather__dialog-text');
  var weatherDialogOverlay = weather.querySelector('.weather__dialog-overlay');
  var weatherDialogClose = weather.querySelector('.weather__dialog-close');

  var ipInfo = 'https://ipinfo.io/json';
  var openWeather = 'https://api.openweathermap.org/data/2.5/forecast/daily?q=';
  var apiKey = '&APPID=b1fe6ee6f440711a41fa920141f88af5&cnt=2';
  var date = new Date();

  var XHR = ('onload' in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
  var xhr = new XHR();

  var cityData = {};
  var weatherData = {};
  var appData = {};

  xhr.open('GET', ipInfo, true);
  xhr.onload = function() {
    cityData = JSON.parse(this.responseText);
    weatherLog.textContent = 'Город найден';
    //console.log(cityData);
    getWeather();
  };
  xhr.onerror = function() {
    weatherLog.textContent = 'Ошибка ' + this.status;
  };
  xhr.send();

  function getWeather() {
    xhr.open('GET', openWeather + cityData.city + ',' + cityData.country + apiKey, true);
    xhr.onload = function() {
      weatherLog.textContent = 'Погода получена';
      weatherData = JSON.parse(this.responseText);
      //console.log(weatherData);
      renderScene();
    };
    xhr.onerror = function() {
      weatherLog.textContent = 'Ошибка ' + this.status;
    };
    xhr.send();
  }

  function renderScene() {
    getAppData();
    displayWeather();
    makeDialog();
    var unicorn = new __WEBPACK_IMPORTED_MODULE_0__unicorn__["a" /* default */](unicornAvatar);
  }

  function getAppData() {
    appData.todayTemp = showTemp (0);
    appData.tomorrowTemp = showTemp (1);
    appData.pressure = weatherData.list[0].pressure;
    appData.pressureTomorrow = weatherData.list[1].pressure;
    appData.type = weatherData.list[0].weather[0].icon;
    appData.typeTomorrow = weatherData.list[1].weather[0].icon;
    appData.date = date.toLocaleDateString();
    appData.day = getWeekDay(date);
    appData.mounth = date.getMonth();
    appData.pDay = getTimes(date);
    appData.winter = false;
    if ((appData.mounth > 8 || appData.mounth < 2) && appData.todayTemp[0] < 3) {
      appData.winter = true;
    }
  }

  function displayWeather() {
    weatherCity.textContent = cityData.city;
    weatherTodayTemp.textContent = appData.todayTemp;
    weatherTomorrowTemp.textContent = appData.tomorrowTemp;
    weatherTomorrowIcon.src = 'img/icons/' + appData.type + '.png';
    weatherTodayIcon.src = 'img/icons/' + appData.type + '.png';
    weatherTomorrowIcon.alt = weatherData.list[1].weather[0].description;
    weatherTodayIcon.alt = weatherData.list[0].weather[0].description;
    weatherDate.textContent = appData.date;
    weatherDay.textContent = appData.day;
    weatherPday.textContent = appData.pDay;

    var sunBg = 'url("img/sun.png") no-repeat';
    var dayBg = 'url("img/day.png") no-repeat';
    var nightBg = 'url("img/night.png") no-repeat';
    var snowBg = 'url("img/day--snow.png") no-repeat';
    var snowNightBg = 'url("img/night--snow.png") no-repeat';
    var clouds = 'url("img/bigclouds.png") no-repeat';
    var lighting = 'url("img/lighting.png") no-repeat';
    var lightingNight = 'url("img/lighting--night.png") no-repeat';
    var rain = 'url("img/rain.gif") repeat';
    var snow =  'url("img/snow.gif") repeat';

    weatherClouds01.style.display = 'none';
    weatherClouds02.style.display = 'none';
    weatherRain.style.display = 'none';
    weatherRain.style.background = rain;
    weatherClouds02.style.background = clouds;

    switch (appData.type) {
      case '01d': 
      //ясно
        if (appData.winter) {
          weather.style.background = snowBg;
        } else {
          weather.style.background = sunBg;
        }
        break;

      case '01n': 
        if (appData.winter) {
          weather.style.background = snowNightBg;
        } else {
          weather.style.background = nightBg;
        }
        break;

      case '02d':
        //переменная облачность 
        if (appData.winter) {
          weather.style.background = snowBg;
        } else { 
          weather.style.background = sunBg;
        }
        weatherClouds01.style.display = 'block';
        break;

      case '02n':
        if (appData.winter) {
          weather.style.background = snowNightBg;
        } else { 
          weather.style.background = nightBg;
        }
        weatherClouds01.style.display = 'block';
        break;

      case '03d': 
        //облака
        if (appData.winter) {
          weather.style.background = snowBg;
        } else { 
          weather.style.background = dayBg;
        }
        weatherClouds01.style.display = 'block';
        break;

      case '03n':
        if (appData.winter) {
          weather.style.background = snowNightBg;
        } else { 
          weather.style.background = nightBg;
        }
        weatherClouds01.style.display = 'block';
        break;

      case '04d':
        //тучи 
        if (appData.winter) {
          weather.style.background = snowBg;
        } else { 
          weather.style.background = dayBg;
        }
        weatherClouds01.style.display = 'block';
        weatherClouds02.style.display = 'block';
        break;

      case '04n': 
        if (appData.winter) {
          weather.style.background = snowNightBg;
        } else {
          weather.style.background = nightBg;
        }
        weatherClouds01.style.display = 'block';
        weatherClouds02.style.display = 'block';
        break;

      case '09d': 
        //сильный дождь
        weather.style.background = dayBg;
        weatherClouds01.style.display = 'block';
        weatherClouds02.style.display = 'block';
        weatherRain.style.display = 'block';
        break;

      case '09n': 
        weather.style.background = nightBg;
        weatherClouds01.style.display = 'block';
        weatherClouds02.style.display = 'block';
        weatherRain.style.display = 'block';
        break;

      case '10d': 
        //дождь
        weather.style.background = sunBg;
        weatherClouds01.style.display = 'block';
        weatherClouds02.style.display = 'block';
        weatherRain.style.display = 'block';
        break;

      case '10n': 
        weather.style.background = nightBg;
        weatherClouds01.style.display = 'block';
        weatherClouds02.style.display = 'block';
        weatherRain.style.display = 'block';
        break;

      case '11d':
        //гроза 
        weather.style.background = dayBg;
        weatherClouds01.style.display = 'block';
        weatherClouds02.style.display = 'block';
        weatherRain.style.display = 'block';
        weatherClouds02.style.background = lighting;
        break;

      case '11n': 
        weather.style.background = nightBg;
        weatherClouds01.style.display = 'block';
        weatherClouds02.style.display = 'block';
        weatherRain.style.display = 'block';
        weatherClouds02.style.background = lightingNight;
        break;

      case '13d':
        //снег
        weather.style.background = snowBg;
        weatherClouds01.style.display = 'block';
        weatherClouds02.style.display = 'block';
        weatherRain.style.display = 'block';
        weatherRain.style.background = snow;
        break;

      case '13n': 
        weather.style.background = snowNightBg;
        weatherClouds01.style.display = 'block';
        weatherClouds02.style.display = 'block';
        weatherRain.style.display = 'block';
        weatherRain.style.background = snow;
        break;

      case '50d':
        //туман 
        if (appData.winter) {
          weather.style.background = snowBg;
        } else { 
          weather.style.background = dayBg;
        }
        weatherClouds01.style.display = 'block';
        weatherClouds02.style.display = 'block';
        break;

      case '50n': 
        weather.style.background = nightBg;
        weatherClouds01.style.display = 'block';
        weatherClouds02.style.display = 'block';
        break;

      default:
        weatherLog.textContent = 'Что за погода такая?';
    }
  }

  function makeDialog() {
    var greetings = '';
    var day = '';
    var onSky = '';
    var temp = '';
    var pressureType = '';

    var pressure = '';
    var type = '';

    switch (appData.PdayCode) {
      case 0:
        greetings = 'Доброе утро! ';
        type = appData.type;
        temp = appData.todayTemp;
        pressure = appData.pressure;
        day = 'Сегодня ';
        break;

      case 1:
        greetings = 'Добрый день! ';
        type = appData.type;
        temp = appData.todayTemp;
        pressure = appData.pressure;
        day = 'Сегодня ';
        break;

      case 2:
        greetings = 'Добрый вечер! ';
        type = appData.typeTomorrow;
        temp = appData.tomorrowTemp;
        pressure = appData.pressureTomorrow;
        day = 'Завтра ';
        break;

      case 3:
        greetings = 'Доброй ночи! ';
        type = appData.typeTomorrow;
        temp = appData.tomorrowTemp;
        pressure = appData.pressureTomorrow;
        day = 'Завтра ';
        break;

      default:
        greetings = 'Доброе утро! ';
        type = appData.type;
        pressure = appData.pressure;
        day = 'Сегодня ';
    }
    
    switch (type) {
      case '01d':
      case '01n':
        onSky = 'будет солнечно =).';
        if (appData.winter) onSky = 'будет солнечно, но не забудь утеплиться.';
        break;

      case '02d':
      case '02n':
        onSky = 'будет немного облаков.';
        if (appData.winter) onSky = 'будет немного облаков, на улице холодно.';
        break;

      case '03d':
      case '03n':
        onSky = 'будет облачно.';
        if (appData.winter) onSky = 'будет облачно и холодно.';      
        break;

      case '04d':
      case '04n':
        onSky = 'будут большие тучи, захвати на свякий случай зонтик.';
        break;

      case '09d':
      case '09n':
        onSky = 'будет лить как из ведра, утепляйся.'; 
        break;

      case '10d':
      case '10n':
        onSky = 'будет дождь, зонтик не забудь.'; 
        break;

      case '11d':
      case '11n':
        onSky = 'будет гроза! Одевайся как следует.';  
        break;

      case '13d':
      case '13n':
        onSky = 'будет снег.';  
        break;

      case '50d':
      case '50n':
        onSky = 'будет туман.'; 
        break;

      default:
        onSky = 'Что за погода, ничего не понятно.';
    }

    if (pressure > 986) {
      if (pressure < 1013) {
        pressureType = ', давление нормальное.';
      } else {
        pressureType = ', давление высокое.';
      }
    } else {
      pressureType = ', давление низкое.';
    }

    weatherDialogText.textContent = greetings + day + onSky + ' Температура за окном: ' + temp + pressureType; 

  }

  function showTemp (day) {
    var min = Math.round(weatherData.list[day].temp.min -  273.15);
    var max = Math.round(weatherData.list[day].temp.max -  273.15);
    if (Math.abs(min) <= Math.abs(max)) {
      return  min + ' / ' + max;
    } else {
      return  max + ' / ' + min;
    }
  }

  function getWeekDay(date) {
    var days = ['воскресенье', 'понедельникн',
      'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    return days[date.getDay()];
  }

  function getTimes(date) {
    var times = ['утро', 'день', 'вечер', 'ночь'];
    var hour =  date.getHours();
    if ( hour > 6 && hour <= 10) {
      appData.PdayCode = 0;
      return times[0];
    }
    if ( hour > 10 && hour <= 17) {
      appData.PdayCode = 1;
      return times[1];
    }
    if ( hour > 17 && hour <= 22) {
      appData.PdayCode = 2;
      return times[2];
    }
    if ( (hour > 22 && hour < 24) || hour <= 6) {
      appData.PdayCode = 3;
      return times[3];
    }
  }


  weather.addEventListener('mousemove', function(event) {
    var move = (event.pageX - weather.offsetLeft) / 8 | 0;
    weatherClouds01.style.marginLeft = move / 60 + '%';
    weatherClouds02.style.marginLeft = move / 30 + '%';
  });

  unicornAvatar.addEventListener('click', function() {
    weatherDialogOverlay.classList.toggle('weather__dialog-overlay--show');
    weatherDialog.classList.toggle('weather__dialog--show');
  });

  weatherDialogClose.addEventListener('click', function() {
    weatherDialogOverlay.classList.toggle('weather__dialog-overlay--show');
    weatherDialog.classList.toggle('weather__dialog--show');
  });

  weatherDialogOverlay.addEventListener('click', function() {
    weatherDialogOverlay.classList.toggle('weather__dialog-overlay--show');
    weatherDialog.classList.toggle('weather__dialog--show');
  });

  randomizer.addEventListener('click', function() {
    weatherFix.className ='weather__fix weather__fix--show';
    var type = ['01d', '01n', '02d', '02n', '03d', '03n', '04d', '04n', '09d', '09n', '10d', '10n', '11d', '11n', '13d', '13n'];
    var rand = Math.floor(Math.random() * type.length);
    appData.type = type[rand];
    if (rand < 8) {
      weatherLog.textContent = 'ну, все не так плохо';
    } else {
      weatherLog.textContent = 'погода сломалась';
    }
    
    displayWeather();
  });

  weatherFix.addEventListener('click', function() {
    appData.type = weatherData.list[0].weather[0].icon;
    weatherLog.textContent = 'так то лучше';
    weatherFix.className = 'weather__fix';
    displayWeather();
  });

}


/***/ })
/******/ ]);
