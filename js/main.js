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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/depaty-card/depaty-card.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/depaty-card/depaty-card.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var depatylist = {
  arkhangelsk: {
    title: "В этом году в Архангельской области выбирают губернатора",
    name: "Кандидат от ЛДПР Пивков Сергей Анатольевич",
    description: "Руководитель фракции ЛДПР в Архангельском областном Собрании депутатов. Доцент кафедры государственного и муниципального управления и менеджмента. Родился в Новодвинске, 36 лет.",
    photo: '<img src="/src/img/pivkov.png" alt="Пивков">',
    url: {
      vk: '<a href="https://vk.com/sapivkov">Вконтакте</a>',
      fb: '<a href="https://ru-ru.facebook.com/sapivkov">Фэйсбук</a>',
      inst: '<a href="https://www.instagram.com/s_a_pivkov/">Инстаграм</a>'
    }
  },
  komi: {
    title: "В этом году в республике Коми выбирают губернатора",
    name: "Кандидат от ЛДПР Никитин Андрей Андреевич",
    description: "Родился в Сыктывкаре. Депутат муниципального образования ГО «Усинск». Отец двоих детей, 30 лет.",
    photo: '<img src="/src/img/Коми-Губернатор-Никитин.png" alt="Пивков">',
    url: {
      vk: '<a href="https://vk.com/id5686131">Вконтакте</a>'
    }
  },
  lenin: {
    title: "В этом году в Ленинградской области выбирают губернатора",
    name: "Кандидат от ЛДПР Лебедев Андрей Ярославович",
    description: "Экс-депутат Государственной думы, депутат Законодательного собрания Ленинградской области. Женат, воспитывает двоих детей.",
    photo: '<img src="/src/img/Ленобласть-Губернатор-Лебедев.png" alt="Лебедев">',
    url: {}
  },
  yamal: {
    title: "В этом году в республике  выбирают депутатов Заксобрания",
    name: "Кандидаты от ЛДПР ",
    description: "Здесь будут кандидаты от ЛДПР",
    url: {
      vk: "vk.com",
      fb: "fb.com",
      inst: "null"
    }
  },
  kaluga: {
    title: "В этом году в Калужской области выбирают губернатора",
    name: "Кандидат от ЛДПР Опарышев Степан Степанович",
    description: "Родился в Обнинске, 33 года. Координатор Обнинского местного отделения ЛДПР, начальник отдела развития ООО «МироСтрой».",
    photo: '<img src="/src/img/Калуга-Губернатор-Опарышев.png" alt="Лебедев">',
    url: {}
  },
  kostroma: {
    title: "В этом году в Костромской области выбирают губернатора",
    name: "Кандидат от ЛДПР Федоров Руслан Владимирович",
    description: "30 лет, окончил Костромской государственный технологический университет и Институт Мировых Цивилизаций. Руководитель Костромского отделения ЛДПР.",
    photo: "<img src='/src/img/Фёдоров.svg' alt='Фёдоров'>",
    url: {
      vk: '<a href="https://vk.com/rus44rus">Вконтакте</a>',
      fb: '<a href="https://www.facebook.com/rus44rus">Фэйсбук</a>',
      inst: '<a href="https://www.instagram.com/fedorov44rus/">Инстаграм</a>'
    }
  },
  smolensk: {
    title: "В этом году в Смоленской области выбирают губернатора",
    name: "Кандидат от ЛДПР Алексей Владимирович Островский",
    description: "Губернатор Смоленской области, экс-депутат Госдумы, женат, воспитывает двух детей. Член Высшего совета ЛДПР.",
    photo: "<img src='/src/img/Смоленск-Губернатор-Островский.png' alt='Островский'>",
    url: {
      vk: '<a href="https://vk.com/ostrovskylive1">Вконтакте</a>',
      inst: '<a href="https://www.instagram.com/always_open_heart/">Инстаграм</a>'
    }
  },
  tambov: {
    title: "В этом году в Тамбовской области выбирают главу администрации",
    name: "Кандидат от ЛДПР Телегин Игорь Вячеславович",
    description: "Депутат Тамбовской областной Думы, заместитель председателя комитета по бюджету, налогам и финансам. 18 лет состоит в ЛДПР.",
    photo: '<img src="/src/img/Тамбов-Губернатор-Телегин.png" alt="Телегин">',
    url: {}
  },
  kursk: {
    title: "В этом году в Курской области выбирают депутата Государственной думы",
    name: "Кандидат от ЛДПР Томанов Алексей Юрьевич",
    description: "39 лет, координатор Курского регионального отделения ЛДПР, депутат Курского городского Собрания депутатов.Женат, воспитывает двух детей. Имеет высшее образование, 16 лет состоит в ЛДПР.",
    photo: '<img src="/src/img/Томанов.svg" alt="Томанов">',
    url: {
      vk: '<a href="https://vk.com/tomanovldpr">Вконтакте</a>'
    }
  },
  yaroslav: {
    title: "В этом году в Ярославской области выбирают депутата Государственной Думы",
    name: "Кандидат от ЛДПР Лобанова Ирина Валерьевна ",
    description: "51 год, депутат Ярославской областной Думы. 22 года состоит в ЛДПР.",
    photo: '<img src="/src/img/Ярославль-ГД-Лобанова.png" alt="Лобанова">',
    url: {
      vk: '<a href="https://vk.com/id91284005">Вконтакте</a>'
    }
  },
  magadan: {
    title: "В этом году в Магаданском крае выбирают депутатов Законодательного собрания края",
    name: "Кандидаты от ЛДПР",
    description: "Здесь будут ФИО и фотографии кандидатов ЛДПР",
    photo: '<img src="/src/img/" alt="">',
    url: {
      vk: "vk.com",
      fb: "fb.com",
      inst: "null"
    }
  },
  irkutsk: {
    title: "В этом году в Иркутской области выбирают губернатора",
    name: "Кандидат от ЛДПР Духовников Андрей Михайлович",
    description: "Координатор Иркутского регионального отделения ЛДПР, депутат Ушаковского муниципального образования Иркутской области. Имеет высшее образование, женат, воспитывает двух детей.",
    photo: '<img src="/src/img/Иркутск-Губернатор-Духовников 1.png" alt="Духовников">',
    url: {
      vk: '<a href="https://vk.com/id472460022">Вконтакте</a>'
    }
  },
  penza: {
    title: "В этом году в Пензенской области выбирают губернатора",
    name: "Кандидат от ЛДПР Васильев Александр Евгеньевич",
    description: "Руководитель фракции ЛДПР в Законодательном Собрании Пензенской области. Женат, воспитывает двух детей",
    photo: '<img src="/src/img/Пенза-Губернатор-Васильев.png" alt="Васильев">',
    url: {
      vk: '<a href="https://vk.com/vasilev5800">Вконтакте</a>',
      fb: '<a href="https://facebook.com/profile.php?id=100003613715285">Фэйсбук</a>',
      inst: '<a href="https://instagram.com/vasilev58/">Инстаграм</a>'
    }
  },
  permian: {
    title: "В этом году в Пермском крае выборы губернатора",
    name: "Кандидат от ЛДПР Постников Олег Сергеевич",
    description: "55 лет, имеет высшее образование, депутат Законодательного Собрания Пермского края. Женат, воспитывает сына и дочь.",
    photo: '<img src="/src/img/Пермь-Губернатор-Постников.png" alt="Постников">',
    url: {
      vk: '<a href="https://vk.com/postnikov.ldpr">Вконтакте</a>',
      fb: '<a href="https://www.facebook.com/postnikov.ldpr">Фэйсбук</a>',
      inst: '<a href="https://www.instagram.com/postnikov.ldpr/?hl=ru">Инстаграм</a>'
    },
    second: {
      title: "И выборы депутата Законодательного Собрания Пермского края",
      name: "Кандидат от ЛДПР Балашов Георгий Валерьевич",
      description: "38 лет, женат, воспитывает сына и двух дочерей. Закончил военный Пермский ВКИУ, возглавляет отдел ЖКХ Ленинского района Перми.",
      photo: '<img src="/src/img/Пермь-ЗС-Балашов.png" alt="Балашов">',
      url: {}
    }
  },
  tatarstan: {
    title: "В этом году в республике Татарстан выборы губернатора",
    name: "Кандидат от ЛДПР Сурчилов Владимир Валерьевич",
    description: "Координатор Татарстанского регионального отделения ЛДПР, 43 года. Высшее образование, в ЛДПР 5 лет.",
    photo: '<img src="/src/img/Татарстан-Сурчилов.png" alt="Сурчилов">',
    url: {
      vk: '<a href=https://vk.com/vova_c>Вконтакте</a>'
    },
    second: {
      title: "И выборы депутата Государственной думы",
      name: "Кандидат от ЛДПР Андрей Колосов",
      description: "Директор благотворительного фонда поддержки и сопровождения одаренных детей «Ингениум».",
      photo: '<img src="/src/img/Татарстан-ГД-Колосов.png" alt="Колосов">',
      url: {
        vk: '<a href=https://vk.com/a.kolosov2020>Вконтакте</a>',
        fb: null // inst: null,

      }
    }
  },
  chuvashia: {
    title: "В этом году в Чувашской Республике выбирают губернатора",
    name: "Кандидат от ЛДПР Степанов Олег Константинович",
    description: "Руководитель фракции ЛДПР в Государственном Совете Чувашской Республики. Имеет высшее образование, 52 года.",
    photo: '<img src="/src/img/Чувашия-Губернатор-Степанов.png" alt="Степанов">',
    url: {
      vk: '<a href="https://vk.com/lakost86">Вконтакте</a>',
      fb: '<a href="https://www.facebook.com/KOStepanov">Фэйсбук</a>',
      inst: '<a href="https://www.instagram.com/121konstantin/">Инстаграм</a>'
    }
  },
  kamchatka: {
    title: "В этом году в Камчатском крае выбирают губернатора",
    name: "Кандидат от ЛДПР Калашников Валерий Юрьевич",
    description: "В ЛДПР 9 лет, высшее образование, депутат Законодательного Собрания Камчатского края, координатор Камчатского регионального отделения ЛДПР, 41 год.",
    photo: '<img src="/src/img/Камчатка-Губернатор-Калашников.png" alt="Калашников">',
    url: {
      vk: '<a href=https://vk.com/v.kalashnikov79>Вконтакте</a>'
    }
  },
  hmao: {
    title: "В этом году в республике  выбирают губернатора",
    name: "Кандидат от  Андрей ",
    description: "Депутат МО ГО  Отец троих , бывший ",
    url: {
      vk: "vk.com",
      fb: "fb.com",
      inst: "null"
    }
  },
  krasnodar: {
    title: "В этом году в Краснодарском крае выбирают губернатора",
    name: "Кандидат от ЛДПР Тутушкин Иван Геннадьевич",
    description: "43 года, депутат Заксобрания Краснодарского края, координатор Краснодарского отделения ЛДПР. Окончил НГТУ, кандидат технических наук, офицер, женат, воспитывает пятерых детей.",
    photo: '<img src="/src/img/Краснодар-Губернатор-Тушкин.png" alt="Тутушкин">',
    url: {
      vk: '<a href=https://vk.com/tutushkinig>Вконтакте</a>'
    }
  },
  rostov: {
    title: "В этом году в Ростовской области выбирают губернатора",
    name: "Кандидат от ЛДПР Пятибратов Пётр Владимирович",
    description: "Координатор Ростовского регионального отделения ЛДПР. Занимается благотворительностью: помогает ветеранам Донского края, детскому дому в городе Шахты, участвовал в восстановлении храма в Ростове.",
    photo: '<img src="/src/img/Ростов-Пятибратов.png" alt="Журавлев">',
    url: {
      vk: '<a href="https://vk.com/id558234817">Вконтакте</a>',
      fb: '<a href="https://www.facebook.com/ppldpr">Фэйсбук</a>',
      inst: '<a href="https://www.instagram.com/petr_paytibratov_ldpr/">Инстаграм</a>'
    }
  },
  sevastopol: {
    title: "В этом году Севастополе выборы губернатора",
    name: "Кандидат от ЛДПР Журавлев Илья Григорьевич",
    description: "Координатор регионального отделения ЛДПР, депутат Законодательного собрания города Севастополя, отец.",
    photo: '<img src="/src/img/Журавлев.svg" alt="Журавлев">',
    url: {
      fb: '<a href="https://www.facebook.com/iliayzhuravlev">Фэйсбук</a>',
      inst: '<a href="https://instagram.com/il_zhuravlyov?igshid=a6oowq89d2yt">Инстаграм</a>'
    },
    second: {
      title: "И выборы депутата Заксобрания города Севастополя",
      name: "Кандидат от ЛДПР Гацолаев Сергей Викторович",
      description: "Уроженец Севастополя, выпускник военно-морского училища, завершил службу в звании майора. Участвовал в присоединении Крыма, будучи начальником штаба ополчения Ленинского района. В 2014 году вступил в ЛДПР.",
      photo: '<img src="/src/img/Севастополь-Заксоб-Гацолаев.png" alt="Колосов">',
      url: {
        vk: '<a href="https://vk.com/ldpr_sev">ВКонтакте</a>',
        fb: '<a href="https://www.facebook.com/profile.php?id=100043848290807">Фэйсбук</a>',
        inst: '<a href="https://instagram.com/gatsolaevsergei?igshid=e6nrq60x4gc9">Инстаграм</a>'
      }
    }
  }
};
cities.addEventListener('click', showDeputy);

function showDeputy(event) {
  var targetClickId = event.target.id;
  var title = document.querySelector(".depaty-list__title h2");
  var name = document.querySelector(".cards__title");
  var description = document.querySelector(".cards__description");
  var photo = document.querySelector(".depaty-list__photo");
  var vk = document.querySelector("#vk");
  var fb = document.querySelector("#fb");
  var inst = document.querySelector("#inst"); // vk.style.display = 'block';
  // inst.style.display = 'block';

  var secondList = document.querySelector("#second-list");
  var secondTitel = document.querySelector("#second-titel");
  var secondName = document.querySelector("#second-name");
  var secondDescription = document.querySelector("#second-description");
  var secondPhoto = document.querySelector("#second-photo");
  var secondVk = document.querySelector("#second-vk");
  var secondFb = document.querySelector("#second-fb");
  var secondInst = document.querySelector("#second-inst");

  if (depatylist[targetClickId].second == undefined) {
    secondList.style.display = 'none';
  } else {
    secondList.style.display = 'block';
  }

  if (depatylist[targetClickId].url.inst == undefined) {
    inst.style.display = 'none';
  } else {
    inst.style.display = 'block';
  }

  if (depatylist[targetClickId].url.vk == undefined) {
    vk.style.display = 'none';
  } else {
    vk.style.display = 'block';
  }

  if (depatylist[targetClickId].url.fb == undefined) {
    fb.style.display = 'none';
  } else {
    fb.style.display = 'block';
  }

  if (depatylist[targetClickId].second.url.inst == undefined) {
    secondInst.style.display = 'none';
  } else {
    secondInst.style.display = 'block';
  }

  if (depatylist[targetClickId].second.url.vk == undefined) {
    secondVk.style.display = 'none';
  } else {
    secondVk.style.display = 'block';
  }

  if (depatylist[targetClickId].second.url.fb == undefined) {
    secondFb.style.display = 'none';
  } else {
    secondFb.style.display = 'block';
  }

  title.innerText = depatylist[targetClickId].title;
  name.innerText = depatylist[targetClickId].name;
  description.innerText = depatylist[targetClickId].description;
  photo.innerHTML = depatylist[targetClickId].photo;
  vk.innerHTML = depatylist[targetClickId].url.vk;
  fb.innerHTML = depatylist[targetClickId].url.fb;
  inst.innerHTML = depatylist[targetClickId].url.inst;
  secondTitel.innerText = depatylist[targetClickId].second.title;
  secondName.innerText = depatylist[targetClickId].second.name;
  secondDescription.innerText = depatylist[targetClickId].second.description;
  secondPhoto.innerHTML = depatylist[targetClickId].second.photo;
  secondVk.innerHTML = depatylist[targetClickId].second.url.vk;
  secondFb.innerHTML = depatylist[targetClickId].second.url.fb;
  secondInst.innerHTML = depatylist[targetClickId].second.url.inst; // if (depatylist[targetClickId].url.vk === null) {
  //     vk.style.display = 'none';
  // }
  // if (depatylist[targetClickId].url.inst === null) {
  //     inst.style.display = 'none';
  // }
  // if (depatylist[targetClickId].second.url.inst === null) {
  //     inst.style.display = 'none';
  // }
}

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var textEffect = 'ЛДПР выдвинула кандидатов в губернаторы и депутаты в 20 регионах. Кликните по карте, чтобы узнать их имена. Будем рады, если вы поддержите нас 13 сентября.';
var container = document.querySelector('#effect');
var x = 0;

function animate() {
  if (x < textEffect.length) {
    container.innerHTML += textEffect.charAt(x);
    x++;
  }

  setTimeout(animate, 20);
}

animate(); // function createNumber(num, elem) {
//     const time = 2500; // ms
//     const step = 1;
//     let html = document.querySelector('#'+ elem);
//     let result = 0;
//     let t = Math.round(time/(num/step))
//     let interval = setInterval(() => {
//         result += step;
//         if (result == num) {
//             clearInterval(interval);
//         }
//         html.innerHTML = result;
//     }, t)
// }
// createNumber(20, 'num')

/***/ }),

/***/ "./src/blocks/modules/map/map.js":
/*!***************************************!*\
  !*** ./src/blocks/modules/map/map.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var selectedMap;

map.onclick = function (event) {
  var target = event.target;
  if (target.tagName != 'path') return;
  highlight(target);
};

function highlight(path) {
  if (selectedMap) {
    selectedMap.classList.remove('highlight');
  }

  selectedMap = path;
  selectedMap.classList.add('highlight');
}

var count;
map.addEventListener("mouseenter", function (event) {
  if (event.target !== count) {
    event.target.classList.add('hover');
  }
}, true);
map.addEventListener("click", function (event) {
  count = event.target;
  event.target.classList.remove('hover');
}, true);
var regions = {
  north: "<a id=\"arkhangelsk\" href=\"#carddep\">\u0410\u0440\u0445\u0430\u043D\u0433\u0435\u043B\u044C\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C</a>\n                <a id=\"komi\" href=\"#carddep\">\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041A\u043E\u043C\u0438</a>\n                <a id=\"lenin\" href=\"#carddep\">\u041B\u0435\u043D\u0438\u043D\u0433\u0440\u0430\u0434\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C</a>",
  central: "<div class = 'centralReg'> \n                <a id=\"kaluga\" href=\"#carddep\">\u041A\u0430\u043B\u0443\u0436\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C</a>\n                <a id=\"kostroma\" href=\"#carddep\">\u041A\u043E\u0441\u0442\u0440\u043E\u043C\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C</a>\n                <a id=\"smolensk\" href=\"#carddep\">\u0421\u043C\u043E\u043B\u0435\u043D\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C</a>\n                <a id=\"tambov\" href=\"#carddep\">\u0422\u0430\u043C\u0431\u043E\u0432\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C</a>\n                <a id=\"kursk\" href=\"#carddep\">\u041A\u0443\u0440\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C</a>\n                <a id=\"yaroslav\" href=\"#carddep\">\u042F\u0440\u043E\u0441\u043B\u0430\u0432\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C</a> </div>",
  siberia: "<a id=\"irkutsk\" href=\"#carddep\">\u0418\u0440\u043A\u0443\u0442\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C</a>",
  volga: "<a id=\"penza\" href=\"#carddep\">\u041F\u0435\u043D\u0437\u0435\u043D\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C</a>\n                <a id=\"permian\" href=\"#second-list\">\u041F\u0435\u0440\u043C\u0441\u043A\u0438\u0439 \u043A\u0440\u0430\u0439</a>\n                <a id=\"tatarstan\" href=\"#second-list\">\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043D</a>\n                <a id=\"chuvashia\" href=\"#carddep\">\u0427\u0443\u0432\u0430\u0448\u0441\u043A\u0430\u044F \u0440\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430</a>",
  ural: "<a id=\"yamal\" href=\"#carddep\">\u042F\u041D\u0410\u041E</a>",
  vostock: "<a id=\"kamchatka\" href=\"#carddep\">\u041A\u0430\u043C\u0447\u0430\u0442\u0441\u043A\u0438\u0439 \u043A\u0440\u0430\u0439</a> <a id=\"magadan\" href=\"#carddep\">\u041C\u0430\u0433\u0430\u0434\u0430\u043D\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C</a>",
  kavkaz: "<p>\u0412 \u044D\u0442\u043E\u043C \u0433\u043E\u0434\u0443 \u0431\u0435\u0437 \u0432\u044B\u0431\u043E\u0440\u043E\u0432, \u0433\u043E\u043B\u043E\u0441\u0443\u0439\u0442\u0435 \u0437\u0430 \u043D\u0430\u0441 \u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u043C \u0441\u0435\u043D\u0442\u044F\u0431\u0440\u0435</p>",
  south: "<a id=\"krasnodar\" href=\"#carddep\">\u041A\u0440\u0430\u0441\u043D\u043E\u0434\u0430\u0440\u0441\u043A\u0438\u0439 \u043A\u0440\u0430\u0439</a>\n                <a id=\"rostov\" href=\"#carddep\">\u0420\u043E\u0441\u0442\u043E\u0432\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C</a>\n                <a id=\"sevastopol\" href=\"#second-list\">\u0421\u0435\u0432\u0430\u0441\u0442\u043E\u043F\u043E\u043B\u044C</a>"
};
map.addEventListener('click', getMap);

function getMap(event) {
  var targetClickId = event.target.id;

  if (typeof regions[targetClickId] !== "undefined") {
    var html = regions[targetClickId];
    cities.innerHTML = html;
    console.log(html);
    cities.style.left = event.pageX + "px";
    cities.style.top = event.pageY + "px";
    smoothScrolling();
  }
}

function smoothScrolling() {
  var anchors = document.querySelectorAll('a[href*="#"]');

  var _iterator = _createForOfIteratorHelper(anchors),
      _step;

  try {
    var _loop = function _loop() {
      var anchor = _step.value;
      anchor.addEventListener("click", function (event) {
        event.preventDefault();
        var blockID = anchor.getAttribute("href");
        document.querySelector('' + blockID).scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
} // В маке behavior сосет


smoothScrolling();

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_map_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/map/map */ "./src/blocks/modules/map/map.js");
/* harmony import */ var _modules_map_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_map_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_depaty_card_depaty_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/depaty-card/depaty-card */ "./src/blocks/modules/depaty-card/depaty-card.js");
/* harmony import */ var _modules_depaty_card_depaty_card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_depaty_card_depaty_card__WEBPACK_IMPORTED_MODULE_3__);





/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map