const variousCardsList = document.querySelectorAll(
  '.repair-various-section__swiper-card'
)

const buttonVariousShowHide = document.querySelector(
  '.repair-various-section__button-show-hide'
)

const cardBrandRemover = function (list, count) {
  for (let i = count; i < list.length; i++) {
    list[i].classList.add('repair-various-section__swiper-card--hidden')
  }
}

const calcNeededVariousCard = function () {
  const mobileMatch = window.matchMedia('(max-width: 767px)')
  const tabletMatch = window.matchMedia(
    '((min-width: 768px) and (max-width: 1119px))'
  )
  const normalMatch = window.matchMedia('(min-width: 1120px)')
  let neededVariousCard

  if (tabletMatch.matches) {
    neededVariousCard = 3
  }
  if (normalMatch.matches) {
    neededVariousCard = 4
  }

  cardBrandRemover(variousCardsList, neededVariousCard)
}

calcNeededVariousCard()

const variousShowAll = function () {
  for (let i = 0; i < variousCardsList.length; i++) {
    variousCardsList[i].classList.remove(
      'repair-various-section__swiper-card--hidden'
    )
  }
}

buttonVariousShowHide.addEventListener('click', function () {
  if (buttonVariousShowHide.textContent === 'Показать все') {
    variousShowAll()
    buttonVariousShowHide.textContent = 'Скрыть все'
  } else {
    calcNeededVariousCard()
    buttonVariousShowHide.textContent = 'Показать все'
  }
})

window.addEventListener('resize', function () {
  calcNeededVariousCard()
})
