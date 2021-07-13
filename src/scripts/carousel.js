import Swiper, {Navigation, Pagination, Thumbs} from 'swiper';
Swiper.use([Navigation, Pagination, Thumbs])
const swiperSlider = new Swiper('.slider', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1000: {      
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
    }
  }
});

var swiperThumb = new Swiper(".product__thumb", {
  spaceBetween: 10,
  slidesPerView: 'auto',
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var swiperProduct = new Swiper(".product__carousel", {
  spaceBetween: 10,
  thumbs: {
    swiper: swiperThumb,
  },
});