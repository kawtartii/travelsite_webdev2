var bgimages=new Array()
bgimages[0]="images/background.jpg"
bgimages[1]="images/background1.jpg"
bgimages[2]="images/background2.jpg"
bgimages[3]="images/background3.jpg"
bgimages[4]="images/background4.jpg"

//preload images
var pathToImg=new Array()
for (i=0;i<bgimages.length;i++){
pathToImg[i]=new Image()
pathToImg[i].src=bgimages[i]
}

var inc=-1

function bgSlide(){
if (inc<bgimages.length-1)
inc++
else
inc=0
document.body.background=pathToImg[inc].src
}

if (document.all||document.getElementById)
window.onload=new Function('setInterval("bgSlide()",3000)')