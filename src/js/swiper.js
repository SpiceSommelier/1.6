import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'
import '../../node_modules/swiper/swiper.scss'
import '../../node_modules/swiper/modules/pagination.scss'

const breakpointSwiper = window.matchMedia('(min-width: 768px)')

if (!breakpointSwiper.matches) {
  const swiper = new Swiper('.swiper', {
    modules: [Pagination],
    loop: false,
    slidesPerView: 1.2,
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })
}
