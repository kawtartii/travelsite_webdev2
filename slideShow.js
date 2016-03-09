//some global variables
var doRandom = false; //change to true to make the order random
var duration = 5000; //time image is shown in milliseconds
var firstImage = 1;
var imageCount;
var Timer;
var slides = new Array ();
var maxHeight =0;

$( document ).ready(function() {//lets wait for the page to render before we start anything

/*
some debug code
$('img', $('#slideShow')).each(function () {
    console.log($(this).height()); //log every element found to console output
});
*/
	initSlideShow ("slideShow"); //start the slideshow
});

//this handles the resize event, and is what makes the slide show responsive
$( window ).resize(function() {
	updateMaxHeight ("slideShow");
});


function initSlideShow (containerID){
//register some click handlers
$( "#nextSlide" ).click (nextSlide);
$( "#previousSlide" ).click (previousSlide);
	var i = 0;
	$('img', $('#'+ containerID)).each(function () {
		slides[i] = $(this);
		i++;
		$(this).on('load', handleImgLoad);//register an onload handler, just incase the image is not done loading
/*
		if ($(this).height() > maxHeight){
			maxHeight =$(this).height();
		}
*/
	});
	imageCount = slides.length - 1;
	updateMaxHeight (containerID);
	updateSlideShow (0, imageCount);
}

function updateMaxHeight (containerID){
//this function looks at the height of each image in the container and determines the largest
	$('img', $('#'+ containerID)).each(function () {
		//		console.log($(this).height()); //log every element found to console output
		if ($(this).height() > maxHeight){
			maxHeight =$(this).height();
		}
	});
  $( "#" + containerID).css ("height", maxHeight + "px"); //set the container to the size of the max
}


function handleImgLoad (){
	console.log ("handleImgLoad: " + $(this).attr("id") + ":" +  $(this).height());
	updateMaxHeight ("slideShow");

}





function updateSlideShow (slideNumber, previous){
//	console.log ("parameters: " +  slideNumber + ":" + previous);

slides [slideNumber].css ("opacity", 1); //fade in
slides [previous].css ("opacity", 0); //fade out

/* some debug output
console.log (slides [slideNumber]);
console.log ("hieght: " + $( "#slide"+ slideNumber ).height() );
console.log ("updateSlideShow: " +slideNumber + ":" + previous );
*/
	previous = slideNumber;
  if (doRandom){
	slideNumber = Math.floor((Math.random() * imageCount) + firstImage);
  }else{
    if (slideNumber == imageCount){
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
