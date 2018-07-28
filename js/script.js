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
//       $(".navigation-primary").addClass("shrink");
//     }
//     else
//     {
//         $("header").removeClass("shrink");
//     }
// });

// $(document).scrollingElement.children.children.main.children

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
    skills.removeClass('visually-hidden')
})

close.on("click", function() {
    skills.addClass('visually-hidden')
})

