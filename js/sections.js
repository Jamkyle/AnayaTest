function close(){ //fermer les sections
  var sections = document.getElementsByTagName('section');
  for(var i=0;i<sections.length;i++)
    sections[i].style.display='none';
}

//Class Section
function Section(section){
  this.section = section;
  this.s = Snap(section.getElementsByTagName("svg")[0]);
  this.buttonClose = this.s.text("100%","20","fermer") //button fermer
    .attr({
      fill: '#a0a0a0',
      fillOpacity:'0',
      cursor:'pointer',
      transform: 'translate(-50%,0)'
  });
  var g = this.s.gradient("l(0, 0, 1, 1)#000:30-#fff:40-#000:90"); //noir to blanc to noir -- glass effect
  this.rect = this.s.rect(0,0,"100%","100%");
  this.rect.attr({
    stroke : 'none',
    transform:'matrix(1,0,0,1,0,0)',
    pointerEvents:'none',
    // fill: "#5a5a5a",
    fill:g, // gradient
    // stroke: '#aeaeae',
    // fillOpacity:1,
    fillOpacity:0
  });
  this.g = this.s.g(this.rect, this.buttonClose);
  }

Section.prototype.make = function(url){
  var overlay = document.getElementById("overlay");
  overlay.style.display = 'block';
  if(this.section.id == 'section-'+url){
    this.section.style.display='block';
    this.section.style.border='0.5px solid #202020';

  }
  this.rect.animate({fillOpacity:0.1},300,mina.easeout);
  this.buttonClose.animate({fillOpacity:1},300);
  var loop = this.section.getElementsByClassName('video');
  for(var i=0; i<loop.length; i++)
    afficheElem(loop[i], i);


}
Section.prototype.fermer = function(){
  this.rect.animate({fillOpacity:0},100,function(){close()});
  this.buttonClose.attr({fillOpacity:0});
  var loop = this.section.getElementsByClassName('video');
  for(var i=0; i<loop.length; i++)
    fermerElem(loop[i], i);
}
Section.prototype.add = function(el){
  this.s.add(el);
}

function afficheElem(el, time){
  el.style.animation='reset 1s '+0.1*time+'s linear forwards, transparence 1s '+0.1*time+'s ease reverse forwards';
}

function fermerElem(el, time){
  el.style.animation='reset 1ms linear reverse forwards';
  el.style.opacity='0';
}
