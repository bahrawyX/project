let aboutOffset = $("#about-us").offset().top;



// $(document).ready(function(){
//     $(window).scroll(function() {
//         var scrollPos = $(document).scrollTop() ;
//         $('a').each(function () {
//             var currLink = $(this);
//             var refElement = $(currLink.attr("href"));
//             if (refElement.length && refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//                 $('a').removeClass("special");
//                 currLink.addClass("special");
//             }
//         });
//     });
// });


$(window).scroll(()=>{
    let scrollTop = $(window).scrollTop();
    console.log('====================================');
    console.log(scrollTop);
    console.log('====================================');
    if(scrollTop>aboutOffset){
        $('.navbar').css('translate','0px 0px !important');
        $('.navbar').css('backgroundColor','#1c1c1c    !important');
    }else if(scrollTop<=150){
        $('.navbar').css('translate','0px 0px   !important')
    }else{
        $('.navbar').css('translate','0px -80px  !important')
    $('.navbar').css('backgroundColor','   !important');
    }
}) 