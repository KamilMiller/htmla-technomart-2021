'use strict';

let ESC_KEY = 'Escape';
let ENTER_KEY = 'Enter';
let feedback = document.querySelector('.feedback-modal');
let feedbackOpen = document.querySelector('.contact-information-button');
let feedbackClose = document.querySelector('.feedback-close');
let map = document.querySelector('.map-modal');
let mapOpen = document.querySelector('.contact-information-map');
let mapClose = document.querySelector('.map-close');

// Закрытие окон.

let onModalEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    closeFeedback();
    closeMap();
  }
};

// Форма обратной связи.

let openFeedback = function () {
  feedback.classList.remove('modal-hidden');
  document.addEventListener('keydown', onModalEscPress);
};

let closeFeedback = function () {
  feedback.classList.add('modal-hidden');
  document.removeEventListener('keydown', onModalEscPress);
};

feedbackOpen.addEventListener('click', function (evt) {
  evt.preventDefault();
  openFeedback();
});

feedbackOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openFeedback();
  }
});

feedbackClose.addEventListener('click', function () {
  closeFeedback();
});

feedbackClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closeFeedback();
  }
});

// Карта.

let openMap = function () {
  map.classList.remove('modal-hidden');
  document.addEventListener('keydown', onModalEscPress);
};

let closeMap = function () {
  map.classList.add('modal-hidden');
  document.removeEventListener('keydown', onModalEscPress);
};

mapOpen.addEventListener('click', function (evt) {
  evt.preventDefault();
  openMap();
});

mapOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openMap();
  }
});

mapClose.addEventListener('click', function () {
  closeMap();
});

mapClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closeMap();
  }
});
