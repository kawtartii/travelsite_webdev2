var doRandom = false;
var duration = 5000; //time image is shown in milliseconds
var firstImage = 1;
var ImageCount = 8;
var Timer;
var slides = new Array ();
var maxHeight =0;

$( document ).ready(function() {

	//some testing
	for (i = firstImage; i <=ImageCount; i++) {
//		$( "#slideShow" ). append ('<img src="images/slide'+i+'.jpg" alt="" id="slide'+i+'" class="slideShow_image" />');//fill the div with all the images
	}
//var slideshow = $( "#slideShow" );

$('img', $('#slideShow')).each(function () {
   // console.log($(this).height()); //log every element found to console output
});


//console.log();


initSlideShow ("slideShow");



});


function initSlideShow (containerID){
//register some click handlers
$( "#nextSlide" ).click (nextSlide);
$( "#previousSlide" ).click (previousSlide);
	var i = 0;

	$('img', $('#'+ containerID)).each(function () {
		//		console.log($(this).height()); //log every element found to console output
		slides[i] = $(this);
		i++;
		$(this).on('load', handleImgLoad);

		if ($(this).height() > maxHeight){
			maxHeight =$(this).height();
		}

	});
	updateMaxHeight (containerID);
	updateSlideShow (0, slides.length - 1);
}

function updateMaxHeight (containerID){
	var maxHeight =0;
	$('img', $('#'+ containerID)).each(function () {
		//		console.log($(this).height()); //log every element found to console output
		if ($(this).height() > maxHeight){
			maxHeight =$(this).height();
		}

	});

  $( "#" + containerID).css ("height", maxHeight + "px");


}


function handleImgLoad (){
	console.log ("handleImgLoad: " + $(this).attr("id") + ":" +  $(this).height());
	updateMaxHeight ("slideShow");

}

$( window ).resize(function() {
  //$( "#log" ).append( "<div>Handler for .resize() called.</div>" );
updateMaxHeight ("slideShow");
});



function updateSlideShow (slideNumber, previous){
	console.log ("parameters: " +  slideNumber + ":" + previous);
 // $( "slide"+ slideNumber ). css ('<img src="images/slide'+slideNumber+'.jpg" alt="" class="slideShow_image" />');
 // $( "#slide"+ previous ).css ("opacity", 0);
//  $( "#slide"+ slideNumber ).css ("opacity", 1);
//$( "#slideShow" ).css ("height",  $( "#slide"+ slideNumber ).height() + "px");
console.log (slides [slideNumber]);
slides [slideNumber].css ("opacity", 1);
slides [previous].css ("opacity", 0);



console.log ("hieght: " + $( "#slide"+ slideNumber ).height() );



    console.log ("updateSlideShow: " +slideNumber + ":" + previous );
	previous = slideNumber;
  if (doRandom){
	slideNumber = Math.floor((Math.random() * (slides.length - 1))) + firstImage);
  }else{

    if (slideNumber == slides.length - 1){
      slideNumber = firstImage;
    }else{
      slideNumber ++;
    }

  }
    Timer = setTimeout (updateSlideShow, duration, slideNumber, previous);
}


function nextSlide (){
	alert ("you clicked next slide");
}

function previousSlide (){
	alert ("you clicked previous slide");
}
