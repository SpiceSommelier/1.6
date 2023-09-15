const brandButtonShowHide = document.querySelector(
  '.repair-brand-section__button-show-hide'
)

const brandShowAll = function (list) {
  for (let i = 0; i < list.length; i++) {
    list[i].classList.remove('repair-brand-section__swiper-card--hidden')
  }
}

brandButtonShowHide.addEventListener('click', function () {
  const brandCardList = document.querySelectorAll(
    '.repair-brand-section__swiper-card'
  )
  brandShowAll(brandCardList)

  if (brandButtonShowHide.textContent === 'Показать все') {
    brandButtonShowHide.textContent = 'Скрыть все'
  } else {
    brandButtonShowHide.textContent = 'Показать все'
    calcNeededBrandCard()
  }
})

const cardBrandRemover = function (list, count) {
  for (let i = count; i < list.length; i++) {
    list[i].classList.add('repair-brand-section__swiper-card--hidden')
  }
}

const calcNeededBrandCard = function () {
  const mobileMatch = window.matchMedia('(max-width: 767px)')
  const tabletMatch = window.matchMedia(
    '((min-width: 768px) and (max-width: 1119px))'
  )
  const normalMatch = window.matchMedia('(min-width: 1120px)')

  let neededBrandCard

  if (tabletMatch.matches) {
    neededBrandCard = 6
  }
  if (normalMatch.matches) {
    neededBrandCard = 8
  }

  const brandCardList = document.querySelectorAll(
    '.repair-brand-section__swiper-card'
  )

  cardBrandRemover(brandCardList, neededBrandCard)
}

calcNeededBrandCard()

window.addEventListener('resize', function () {
  calcNeededBrandCard()
})
