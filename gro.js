console.log ("javascript running");
// start carrousel
let('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: false
 });


 // move next carousel
 let('.moveNextCarousel').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.carousel').carousel('next');
 });

 // move prev carousel
 let('.movePrevCarousel').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.carousel').carousel('prev');
 });
