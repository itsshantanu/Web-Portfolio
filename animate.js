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

