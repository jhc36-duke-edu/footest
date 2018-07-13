// $(document).ready(function() {
//   console.log('flexslider-fix.js document.ready');
//   function setAria(el) {

//       var $flexsliderObjectSlides = $(el).find('.slides > li');
//       $flexsliderObjectSlides.each(function () {
//           if ($(this).attr('style').indexOf("opacity: 0") !== -1) {
//               $(this).attr('aria-hidden', 'true');
//           } else {
//               $(this).attr('aria-hidden', 'false');
//           }
//       });
//   }
//   // Use Flexsider APIs 'start' callback for our setAria function when the slider loads
//   $('.flexslider').bind('start', function (e, slider) {
//       console.log('flex init');
//       $flexsliderObject = $(this);
//       setAria($flexsliderObject);
//       $(this).find('.slides > li:first-child').attr('aria-hidden', 'false'); // make 100% sure aria is correct on first slide
//   });
//   // Use Flexsider APIs after' callback for our setAria() function when each slide advance
//   $('.flexslider').bind('after', function (e, slider) {
//       $flexsliderObject = $(this);
//       setAria($flexsliderObject);
//   });
// });