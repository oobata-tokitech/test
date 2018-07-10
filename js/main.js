var imgset = [
   "img/hoshi.jpg" ,
   "img/ie.jpg" ,
   "img/niku.jpg" ,
   "img/machi.jpg"
];
var counter = 0;
function slideimage() {
   if( counter >= imgset.length ) {
      counter = 0;
   }
   document.getElementById('slideshow').src = imgset[counter];
   counter++;
}
var slideid = 0;
function startstopshow() {
   if( slideid == 0 ) {
      slideid = setInterval(slideimage,1000);   // 1000は切替秒数(ミリ秒)
   }
   else {
      clearInterval(slideid);
      slideid = 0;
   }
}
document.getElementById('startstopbutton').onclick = startstopshow;
