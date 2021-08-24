/*jshint esversion: 6 */
$(document).ready(function(){
//      //setInterval(function (){
//     //     $(".slide-wrap span").each(function(i, obj) {
//     //         // console.log(obj);
//     //         // console.log(i);
//     //         if($(obj).hasClass("is-visible")){
//     //             // console.log(obj);
//     //             setTimeout(function (){
//     //                 $(obj).removeClass("is-visble").addClass("is-hidden");
    
//     //             }, 5000);
//     //             $(obj).next("span").removeClass("is-hidden").addClass("is-visible");
                 
//     //         }    
//     //         else if($(i=1).hasClass("is-hidden")){ 
//     //              $(this).removeClass("is-hidden").addClass("is-visible");
//     //             // console.log("does not has class");
//     //         }
            
//     //     });
//     //   //}, 300);   

$(window).scroll(function() {

    var height = $('.fnav-container').height();
    var scrollTop = $(window).scrollTop();

    if (scrollTop >= height - 2) {
        $('.fnav-container').addClass('solid-nav');
    } else {
        $('.fnav-container').removeClass('solid-nav');
    }

});
  

});

var scroll = window.requestAnimationFrame || function(callback) {
    window.setTimeout(callback, 1000/60);
};

var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop(){

    elementsToShow.forEach(function (element) {
        if(isElementInViewport(element)){
            element.classList.add('is-visible');
        }else {
            element.classList.remove('is-visible');
        }
    });
    scroll(loop);
}

loop();

function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0 && rect.bottom >= 0) ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))||
      (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
  }

