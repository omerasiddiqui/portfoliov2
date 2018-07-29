/////////////////////////////////
//           wow.js          ///
///////////////////////////////

const wow = new WOW(
    {
        animateClass: 'animated',
        offset: 30,
        mobile: false,
        live: false
    }
)

wow.init();

/////////////////////////////////
//        smooth scroll      ///
///////////////////////////////

$('.smooth a').smoothScroll({
    offset: 15,
    speed: 1000
  });

/////////////////////////////////
//        shrinking nav      ///
///////////////////////////////

//   $(document).on("scroll", function(){
//     if
//   ($(document).scrollTop() > 650){
//       $(".navigation-primary").addClass("fixed");
//     }
//     else
//     {
//         $("navigation-primary").removeClass("fixed");
//     }
// });

// const el = $(document).scrollingElement.children.children.main

// $(document).on("scroll", function() {
//     if

// })

/////////////////////////////////
//        skills modal       ///
///////////////////////////////

const open = $('#modal-open');
const close = $('#modal-exit');

const skills = $('#skills');

open.on("click", function() {
    skills.removeClass('visually-hidden zoomOutRight').addClass('animated zoomInLeft');
})

close.on("click", function() {
    skills.removeClass('zoomInLeft').addClass('animated zoomOutRight');
    setTimeout(function() {
        skills.addClass('visually-hidden');
    }, 700)
})

