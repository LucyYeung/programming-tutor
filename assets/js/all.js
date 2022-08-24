"use strict";

var swiper = new Swiper(".class-swiper", {
  slidesPerView: "auto",
  spaceBetween: 16
});
var swiper = new Swiper(".section8-swiper", {
  mousewheel: true,
  keyboard: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
Datepicker.locales["zh-TW"] = {
  days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
  daysShort: ["日", "一", "二", "三", "四", "五", "六", "日"],
  daysMin: ["日", "一", "二", "三", "四", "五", "六", "日"],
  months: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
  monthsShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
  format: 'yyyy/mm/dd',
  titleFormat: "y年MM月",
  today: "今天",
  clear: "清除"
};
var elem = document.querySelector('input[name="datepicker"]');
var datepicker = new Datepicker(elem, {
  autohide: true,
  language: 'zh-TW'
});
//# sourceMappingURL=all.js.map
