const btnPrev = document.querySelector('.slider__control_prev');

const btnNext = document.querySelector('.slider__control_next');
const images = [...document.querySelectorAll('.phone_inner .slide__field')];


const iphones = document.querySelectorAll(".iphon-vert > img");
const mobileBtnVert = document.querySelector(".mobile__btn-vert");

const iphones2 = document.querySelectorAll(".iphon-horiz > img");
const mobileBtnHor = document.querySelector(".mobile__btn-hor");



const navMenu = document.getElementById('nav__menu');
const portfolioTabs = document.querySelectorAll('#portfolio__menu > li');
const portfolioItems = document.getElementById("portfolio__items");
const portfolioImgItems = document.querySelectorAll('.porfolio__item');

// heder nav


navMenu.addEventListener('click', (event) => {
    navMenu.querySelectorAll('li > a').forEach(el => el.classList.remove('current__link'));
    event.target.classList.add('current__link');
})


document.addEventListener('scroll', onScroll);

function onScroll(event) {
	const curPos = window.scrollY;
	const sections = document.querySelectorAll('section');
	const links =  document.querySelectorAll('#nav__menu > li > a');


	sections.forEach((el) => {
		if (el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight) > curPos) {
	links.forEach((a) => {
		a.classList.remove('current__link');
		if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
			a.classList.add('current__link');
		}
	})
}

	})
}


// slider

// let i = 0;
// btnPrev.onclick = function() {
//     images[i].style.display = 'none';
//     i--;
//     if (i < 0) {
//         i = images.length - 1;
//     }
//     images[i].style.display = 'flex';
// }

// btnNext.onclick = function() {
//     images[i].style.display = 'none';
//     i++;
//     if (i >= images.length) {
//         i = 0;
//     }
//     images[i].style.display = 'flex';
// }

// slider screens

let j = 0;

mobileBtnVert.onclick = function() {
    iphones[j].style.display = 'none';
    j++;
    if (j >= iphones.length) {
        j = 0;
    }
    iphones[j].style.display = 'block';
}


let k = 0;

mobileBtnHor.onclick = function() {
    iphones2[k].style.display = 'none';
    k++;
    if (k >= iphones2.length) {
        k = 0;
    }
    iphones2[k].style.display = 'block';
}

// slider background



// btnPrev.addEventListener('click', showBgBack);

// function showBgBack() {
//     if (images[0].style.display == 'flex') {
//         sliderBg.classList.remove('slider__next');
//     } else {
//         sliderBg.classList.add('slider__next');
//     }
// }

// btnNext.addEventListener('click', showBgForward);

// function showBgForward() {
//     if (images[0].style.display == 'flex') {
//         sliderBg.classList.remove('slider__next');
//     } else {
//         sliderBg.classList.add('slider__next');
//     }

// }

var slideShow = (function () {
	return function (selector, config) {
	  var
		_slider = document.querySelector(selector), // основный элемент блока
		_sliderContainer = _slider.querySelector('.slider__items'), // контейнер для .slider-item
		_sliderItems = _slider.querySelectorAll('.slider__item'), // коллекция .slider-item
		_sliderControls = _slider.querySelectorAll('.slider__control'), // элементы управления
		_currentPosition = 0, // позиция левого активного элемента
		_transformValue = 0, // значение транфсофрмации .slider_wrapper
		_transformStep = 100, // величина шага (для трансформации)
		_itemsArray = [], // массив элементов
		_timerId,
		_indicatorItems,
		_indicatorIndex = 0,
		_indicatorIndexMax = _sliderItems.length - 1,
		_stepTouch = 50,
		_config = {
		  isAutoplay: false, // автоматическая смена слайдов
		  directionAutoplay: 'next', // направление смены слайдов
		  delayAutoplay: 5000, // интервал между автоматической сменой слайдов
		  isPauseOnHover: true // устанавливать ли паузу при поднесении курсора к слайдеру
		};

	  // настройка конфигурации слайдера в зависимости от полученных ключей
	  for (var key in config) {
		if (key in _config) {
		  _config[key] = config[key];
		}
	  }

	  // наполнение массива _itemsArray
	  for (var i = 0, length = _sliderItems.length; i < length; i++) {
		_itemsArray.push({ item: _sliderItems[i], position: i, transform: 0 });
	  }

	  // переменная position содержит методы с помощью которой можно получить минимальный и максимальный индекс элемента, а также соответствующему этому индексу позицию
	  var position = {
		getItemIndex: function (mode) {
		  var index = 0;
		  for (var i = 0, length = _itemsArray.length; i < length; i++) {
			if ((_itemsArray[i].position < _itemsArray[index].position && mode === 'min') || (_itemsArray[i].position > _itemsArray[index].position && mode === 'max')) {
			  index = i;
			}
		  }
		  return index;
		},
		getItemPosition: function (mode) {
		  return _itemsArray[position.getItemIndex(mode)].position;
		}
	  };

	  // функция, выполняющая смену слайда в указанном направлении
	  var _move = function (direction) {
		var nextItem, currentIndicator = _indicatorIndex;;
		if (direction === 'next') {
		  _currentPosition++;
		  if (_currentPosition > position.getItemPosition('max')) {
			nextItem = position.getItemIndex('min');
			_itemsArray[nextItem].position = position.getItemPosition('max') + 1;
			_itemsArray[nextItem].transform += _itemsArray.length * 100;
			_itemsArray[nextItem].item.style.transform = 'translateX(' + _itemsArray[nextItem].transform + '%)';
		  }
		  _transformValue -= _transformStep;
		  _indicatorIndex = _indicatorIndex + 1;
		  if (_indicatorIndex > _indicatorIndexMax) {
			_indicatorIndex = 0;
		  }
		} else {
		  _currentPosition--;
		  if (_currentPosition < position.getItemPosition('min')) {
			nextItem = position.getItemIndex('max');
			_itemsArray[nextItem].position = position.getItemPosition('min') - 1;
			_itemsArray[nextItem].transform -= _itemsArray.length * 100;
			_itemsArray[nextItem].item.style.transform = 'translateX(' + _itemsArray[nextItem].transform + '%)';
		  }
		  _transformValue += _transformStep;
		  _indicatorIndex = _indicatorIndex - 1;
		  if (_indicatorIndex < 0) {
			_indicatorIndex = _indicatorIndexMax;
		  }
		}
		_sliderContainer.style.transform = 'translateX(' + _transformValue + '%)';
		// _indicatorItems[currentIndicator].classList.remove('active');
		// _indicatorItems[_indicatorIndex].classList.add('active');
	  };

	  // функция, осуществляющая переход к слайду по его порядковому номеру
	//   var _moveTo = function (index) {
	// 	var i = 0, direction = (index > _indicatorIndex) ? 'next' : 'prev';
	// 	while (index !== _indicatorIndex && i <= _indicatorIndexMax) {
	// 	  _move(direction);
	// 	  i++;
	// 	}
	//   };

	  // функция для запуска автоматической смены слайдов через промежутки времени
	//   var _startAutoplay = function () {
	// 	if (!_config.isAutoplay) {
	// 	  return;
	// 	}
	// 	_stopAutoplay();
	// 	_timerId = setInterval(function () {
	// 	  _move(_config.directionAutoplay);
	// 	}, _config.delayAutoplay);
	//   };

	  // функция, отключающая автоматическую смену слайдов
	//   var _stopAutoplay = function () {
	// 	clearInterval(_timerId);
	//   };

	  // функция, добавляющая индикаторы к слайдеру
	  var _addIndicators = function () {
		var indicatorsContainer = document.createElement('ol');
		indicatorsContainer.classList.add('slider__indicators');
		for (var i = 0, length = _sliderItems.length; i < length; i++) {
		  var sliderIndicatorsItem = document.createElement('li');
		  if (i === 0) {
			sliderIndicatorsItem.classList.add('active');
		  }
		  sliderIndicatorsItem.setAttribute("data-slide-to", i);
		  indicatorsContainer.appendChild(sliderIndicatorsItem);
		}
		// _slider.appendChild(indicatorsContainer);
		// _indicatorItems = _slider.querySelectorAll('.slider__indicators > li')
	  };

	  var _isTouchDevice = function () {
		return !!('ontouchstart' in window || navigator.maxTouchPoints);
	  };

	  // функция, осуществляющая установку обработчиков для событий 
	  var _setUpListeners = function () {
		var _startX = 0;
		if (_isTouchDevice()) {
		  _slider.addEventListener('touchstart', function (e) {
			_startX = e.changedTouches[0].clientX;
			_startAutoplay();
		  });
		  _slider.addEventListener('touchend', function (e) {
			var
			  _endX = e.changedTouches[0].clientX,
			  _deltaX = _endX - _startX;
			if (_deltaX > _stepTouch) {
			  _move('prev');
			} else if (_deltaX < -_stepTouch) {
			  _move('next');
			}
			_startAutoplay();
		  });
		} else {
		  for (var i = 0, length = _sliderControls.length; i < length; i++) {
			_sliderControls[i].classList.add('slider__control_show');
		  }
		}
		_slider.addEventListener('click', function (e) {
		  if (e.target.classList.contains('slider__control')) {
			e.preventDefault();
			_move(e.target.classList.contains('slider__control_next') ? 'next' : 'prev');
			// _startAutoplay();
		  } else if (e.target.getAttribute('data-slide-to')) {
			e.preventDefault();
			_moveTo(parseInt(e.target.getAttribute('data-slide-to')));
			_startAutoplay();
		  }
		});
		document.addEventListener('visibilitychange', function () {
		  if (document.visibilityState === "hidden") {
			// _stopAutoplay();
		  } else {
			// _startAutoplay();
		  }
		}, false);
		if (_config.isPauseOnHover && _config.isAutoplay) {
		  _slider.addEventListener('mouseenter', function () {
			// _stopAutoplay();
		  });
		  _slider.addEventListener('mouseleave', function () {
			// _startAutoplay();
		  });
		}
	  };

	  // добавляем индикаторы к слайдеру
	//   _addIndicators();
	  // установливаем обработчики для событий
	  _setUpListeners();
	  // запускаем автоматическую смену слайдов, если установлен соответствующий ключ
	//   _startAutoplay();

	  return {
		// метод слайдера для перехода к следующему слайду
		next: function () {
		  _move('next');
		},
		// метод слайдера для перехода к предыдущему слайду          
		left: function () {
		  _move('prev');
		},
		// метод отключающий автоматическую смену слайдов
		// stop: function () {
		//   _config.isAutoplay = false;
		//   _stopAutoplay();
		// },
		// // метод запускающий автоматическую смену слайдов
		// cycle: function () {
		//   _config.isAutoplay = true;
		//   _startAutoplay();
		// }
	  }
	}
  }());

  slideShow('.slider', {
	isAutoplay: true
  });


// portfolio menu && images
for (let element of portfolioTabs) {
    element.onclick = function(e) {
        e.target.classList.add('portfolio__active-link');
        for (let portfolioImgItem of portfolioImgItems) {
            portfolioImgItem.style.order = Math.floor((Math.random() * 12));
        }
        for (let element of portfolioTabs) {
            if (element != e.target) element.classList.remove('portfolio__active-link');
        }
    }
}
       
// portfolio bordered

portfolioItems.addEventListener('click', (e) => {
    portfolioItems.querySelectorAll('img').forEach(el => el.classList.remove('portfolio__item-bordered'));
    if (e.target.tagName === 'IMG') { e.target.classList.add('portfolio__item-bordered'); }
});

// form

const form = document.getElementById('form');
const inputName = document.getElementById('name__field');
const inputemail = document.getElementById('email__field');
const submitBtn = document.getElementById('submit__btn');
const closeBtn = document.getElementById('close__btn');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const subj = document.getElementById('subject').value.toString();
    const desr = document.getElementById('description').value.toString();
    document.getElementById('subj__text').innerText = subj ? "Subject: " + subj : "Without subject";
    document.getElementById('descr__text').innerText = desr ? "Description: " + subj : "Without description";
    document.getElementById('message__block').classList.remove('hidden');
})

closeBtn.addEventListener('click', () => {
    document.getElementById('subj__text').innerText = '';
    document.getElementById('descr__text').innerText = '';
    document.getElementById('message__block').classList.add('hidden');
})

//закрытие диалогового окна и очистка инпутов
closeBtn.addEventListener('click', function () {
	document.getElementById('name__field').value = '';
	document.getElementById('email__field').value = '';
	document.getElementById('subject').value = '';
	document.getElementById('description').value = '';

})