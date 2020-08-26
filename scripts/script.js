

$("#mobile-menu").click(function(){
  $("nav ul").toggleClass("show");
  $("nav ul").toggleClass("enter");
});


/*microscope logic*/
var images = document.getElementsByClassName("images");
var i = 0;
var left_arrow = document.getElementById("left-arrow");
var right_arrow = document.getElementById("right-arrow");

var left_index, center_index, right_index;

images[images.length-1].classList.add("left-image");
images[0].classList.add("center-image");
images[1].classList.add("right-image");


function cleanImages(){
  for(var k = 0; k < images.length; k++){
    images[k].classList.remove("left-image","center-image","right-image");
  }
}

function prevImage(){
    cleanImages();

    i--;
  if(i < 0){
    i = images.length-1;
      images[i-1].classList.add("left-image");
      images[i].classList.add("center-image");
      images[0].classList.add("right-image");
  }else{

    if(i == 0){
      images[images.length-1].classList.add("left-image");
      images[0].classList.add("center-image");
      images[1].classList.add("right-image"); 
    }else{
      images[i-1].classList.add("left-image");
      images[i].classList.add("center-image");
      images[i+1].classList.add("right-image");
    }
  
  }
}

function nextImage(){
    cleanImages();

    i++;
  if(i > images.length-1){
    i = 0;
      images[images.length-1].classList.add("left-image");
      images[i].classList.add("center-image");
      images[i+1].classList.add("right-image");
  }else{

    if(i == images.length-1){
      images[i-1].classList.add("left-image");
      images[i].classList.add("center-image");
      images[0].classList.add("right-image"); 
    }else{
      images[i-1].classList.add("left-image");
      images[i].classList.add("center-image");
      images[i+1].classList.add("right-image");
    }
  
  }


}

left_arrow.addEventListener("click", prevImage);
right_arrow.addEventListener("click", nextImage);




/*scroll animation*/
var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');