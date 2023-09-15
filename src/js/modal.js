const menuBtn = document.querySelector('.header__button--menu')
const menu = document.querySelector('.menu')
const menuBtnClose = menu.querySelector('.menu-header__button--close')
const messageBtn = menu.querySelector('.menu-footer__button--message')
const modalFeedback = document.querySelector('.feedback')
const modalMessageClose = modalFeedback.querySelector('.feedback__close-button')
const callBtn = menu.querySelector('.menu-footer__button--call')
const modalCall = document.querySelector('.call-order')
const modalCallClose = modalCall.querySelector('.call-order__button-close')

menuBtn.addEventListener('click', function () {
  menu.classList.add('menu--visible')
})
menuBtnClose.addEventListener('click', function () {
  menu.classList.add('menu--hide')
  setTimeout(function () {
    menu.classList.remove('menu--visible')
    menu.classList.remove('menu--hide')
  }, 200)
})

messageBtn.addEventListener('click', function () {
  modalFeedback.classList.add('modal-visible')
})

modalMessageClose.addEventListener('click', function () {
  modalFeedback.classList.add('modal-hide')
  setTimeout(function () {
    modalFeedback.classList.remove('modal-visible')
    modalFeedback.classList.remove('modal-hide')
  }, 200)
})

callBtn.addEventListener('click', function () {
  modalCall.classList.add('modal-visible')
})

modalCallClose.addEventListener('click', function () {
  modalCall.classList.add('modal-hide')
  setTimeout(function () {
    modalCall.classList.remove('modal-visible')
    modalCall.classList.remove('modal-hide')
  }, 200)
})
