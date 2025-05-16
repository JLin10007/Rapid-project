//For Product Tabs
const Tabs = document.querySelectorAll(".Tabs");
const Tabbtns = document.querySelectorAll(".Tab-btn");

const tab_Nav = function(TabbtnsClick){
    Tabbtns.forEach((Tabbtn) => {
        Tabbtn.classList.remove("active")
    })

    Tabs.forEach((tab) => {
        tab.classList.remove("active")
    })

    Tabbtns[TabbtnsClick].classList.add("active");
    Tabs[TabbtnsClick].classList.add("active");
}

Tabbtns.forEach((Tabbtn,i) => {
    Tabbtn.addEventListener("click",() =>{
        tab_Nav(i)
    })
}); 


function initParadoxWay(){
  "use strict";
  if($(".testimonials-carousel").length > 0){
    var j2 = new Swiper(".testimonials-carousel .swiper-container",{
      preloadImages:false,
      slidesPerView:1,
      spaceBetween:20,
      loop:true,
      autoplay:true,
      grabCursor:true,
      mousewheel:false,
      centeredSlides:true,
      pagination:{
        el:'.tc-pagination',
        clickable:true,
        dynamicBullets:true,
      },
      navigation:{
        nextEl:'.listing-carousel-button-next',
        prevEl:'.listing-carousel-button-prev',
      },
      breakpoints:{
        1024:{
          slidesPerView:3,
        },
      }
    });
  }
}
$(document).ready(function (){
  initParadoxWay();
})