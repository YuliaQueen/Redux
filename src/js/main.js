import './vendor/focus-visible.min.js';
import './_vars';
import {resizeContent} from './functions/resize';
import {scrollTo} from './functions/smooth-scroll';
import {disableScroll, enableScroll} from './functions/stop-scroll';

//disableScroll(fix) // fix -> class of element with position: fixed

$(document).ready(function () {
  $('.slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="../../images/arrow-left.png" alt="Назад"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../../images/arrow-right.png" alt="Вперед"></button>',
  });
});
