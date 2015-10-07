//Create ELements Svg
function initCadre(){
var section = new Section(document.getElementById("section-video")); //create Section Video
section.buttonClose.click(function(){section.fermer()});

// Elements Cadres
var s = Snap("#audio"); //audio
var g = document.getElementById('g');
var audio = new Cadre(s, 'audio', g, "#2050a7", 'audio');
audio.soon(true);

var videoSvg = Snap('#video');//video
var gVideo = document.getElementById('gVideo');
var play = document.getElementById('play');
var video = new Cadre(videoSvg, 'video', gVideo, "#207073",'video');

var photoSvg = Snap('#photo');
var gPhoto = document.getElementById('gPhoto');
var photo = new Cadre(photoSvg, 'galerie', gPhoto, "#17a250",'photo');

var evenSvg = Snap('#event');
var gEven = document.getElementById('gEven');
var even = new Cadre(evenSvg, 'event', gEven, "#9E0E40",'event');

var contactSvg = Snap('#contact');
var gContact = document.getElementById('gContact');
var contact = new Cadre(contactSvg, 'contact', gContact, "#091B29",'contact');

// Actions souries sur les objets svg
s.mouseover(function(e){audio.make(); animateCadre(e.target,true)});
s.mouseout(function(e){audio.unMake(); animateCadre(e.target,false)});
s.click(function(){audio.click()});

video.add(play);
videoSvg.mouseover(function(e){video.make(), animateCadre(e.target,true)});
videoSvg.mouseout(function(e){video.unMake(), animateCadre(e.target,false)});
videoSvg.click(function(){video.click(section)});

photoSvg.mouseover(function(e){photo.make();animateCadre(e.target,true)});
photoSvg.mouseout(function(e){photo.unMake();animateCadre(e.target,false)});
photoSvg.click(function(){photo.click()});

evenSvg.mouseover(function(){even.make()});
evenSvg.mouseout(function(){even.unMake()});
evenSvg.click(function(){even.click()});

contactSvg.mouseover(function(){contact.make()});
contactSvg.mouseout(function(){contact.unMake()});
contactSvg.click(function(){contact.click()});
//fermer si click overlay
var overlay = document.getElementById('overlay');
overlay.addEventListener('click', function(event){ if(event.target == overlay)section.fermer(); });
}
