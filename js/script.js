'use strict';

let ESC_KEY = 'Escape';
let ENTER_KEY = 'Enter';
let feedback = document.querySelector('.feedback-modal');
let feedbackOpen = document.querySelector('.contact-information-button');
let feedbackClose = document.querySelector('.feedback-close');
let map = document.querySelector('.map-modal');
let mapOpen = document.querySelector('.contact-information-map');
let mapClose = document.querySelector('.map-close');
let cartMessage = document.querySelector('.cart-message-modal');
let cartMessageOpen = document.querySelectorAll('.buy-button');
let cartMessageCancel = document.querySelector('.cart-message-cancel');
let modalCheckoutButton = document.querySelector('.modal-checkout-button');
let cartMessageClose = document.querySelector('.cart-message-close');

// Закрытие окон.

let onModalEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    closeFeedback();
    closeMap();
    closeCartMessage();
  }
};

// Форма обратной связи.

let openFeedback = function () {
  feedback.classList.add('modal-show');
  document.addEventListener('keydown', onModalEscPress);
};

let closeFeedback = function () {
  feedback.classList.remove('modal-show');
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
  map.classList.add('modal-show');
  document.addEventListener('keydown', onModalEscPress);
};

let closeMap = function () {
  map.classList.remove('modal-show');
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

// Окно сообщения о добавлении товара в корзину.

let openCartMessage = function () {
  cartMessage.classList.add('modal-show');
  document.addEventListener('keydown', onModalEscPress);
};

let closeCartMessage = function () {
  cartMessage.classList.remove('modal-show');
  document.removeEventListener('keydown', onModalEscPress);
};

for (let i = 0; i < cartMessageOpen.length; i++) {
  cartMessageOpen[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    openCartMessage();
  });
  cartMessageOpen[i].addEventListener('keydown', function (evt) {
    if (evt.key === ENTER_KEY) {
      openCartMessage();
    }
  });
};

cartMessageCancel.addEventListener('click', function () {
  closeCartMessage();
});

cartMessageCancel.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closeCartMessage();
  }
});

modalCheckoutButton.addEventListener('click', function () {
  closeCartMessage();
});

modalCheckoutButton.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closeCartMessage();
  }
});

cartMessageClose.addEventListener('click', function () {
  closeCartMessage();
});

cartMessageClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closeCartMessage();
  }
});
