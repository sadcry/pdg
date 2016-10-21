/*$(document).ready( function() {
  // init Masonry after all images have loaded
  var $grid = $('.jekyll-grid').imagesLoaded( function() {
   
    $grid.masonry({
      itemSelector: '.jekyll-item',
      percentPosition: true,
      gutter: 20,
      columnWidth: '.grid-sizer'
    });
  });
});

*/
$('.grid').masonry({
  itemSelector: '.grid-item',
  percentPosition: true
});