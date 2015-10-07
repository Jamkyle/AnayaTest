function cadreSize(){
  var size = window.innerWidth*0.1;
  var cadres = document.getElementsByClassName('cadre');
  for(var i = 0; i< cadres.length ; i++){
    cadres[i].style.width = size;
    cadres[i].style.height = size;
  }
}
cadreSize();
window.addEventListener('resize', cadreSize, true);
//Class d'un cadre
  function Cadre(snap, text, icon, color, url){
    // this.position = {x:0,y:0}
    this.s = snap;
    this.color = color;
    this.url = url;
    this.bool;
    // console.log(this.s.attr('class'));
    if(this.s.attr('class').indexOf("_circle")>-1)
    this.cadre = this.s.circle(300,300,297)
      .attr({
        form: 'circle',
        pointerEvents:"none",
        strokeWidth:2,
        stroke: "#101010",
        fill: this.color,
        // fill: "0a0a0a",
        fillOpacity: 0,
        strokeDasharray:50,
        strokeDashoffset:600
      });
      if(this.s.attr('class').indexOf("_formless")>-1)
      this.cadre = this.s.rect(1,1,600,600)
      .attr({
        form: 'formless',
        pointerEvents:"none",
        strokeWidth:2,
        stroke: "#101010",
        fill: this.color,
        // fill: "0a0a0a",
        fillOpacity: 0,
        strokeDasharray:30,
        strokeDashoffset:600
      });
      if(this.s.attr('class').indexOf("_rect")>-1)
      this.cadre = this.s.rect(1,1,598,599)
      .attr({
        form: 'rect',
        pointerEvents:"none",
        strokeWidth:2,
        stroke: "#101010",
        fill: this.color,
        // fill: "0a0a0a",
        fillOpacity: 0,
        strokeDasharray:300,
        strokeDashoffset:750
      });
      if(this.s.attr('class').indexOf("_door")>-1)
      this.cadre = this.s.rect(1,1,598,599)
      .attr({
        form: 'door',
        pointerEvents:"none",
        strokeWidth:2,
        stroke: "#101010",
        fill: "#fafafa",
        // fill: "0a0a0a",
        fillOpacity: 0.7,
        strokeDasharray:300,
        strokeDashoffset:750
      });
    this.attributes = {'stroke':this.cadre.attr('stroke'), 'strokeDasharray':this.cadre.attr('strokeDasharray'), 'strokeDashoffset':this.cadre.attr('strokeDashoffset'), 'fill':this.cadre.attr('fill'), 'fillOpacity':this.cadre.attr('fillOpacity')};
    this.icon = this.s.append(icon);

    this.innerRect = this.icon.rect(0,200,600,170)
    .attr({
      class:'innerRect',
      pointerEvents:'none',
      fill:'#303030',
      stroke:'none',
      transform: 'rotate(-45,-200,400)'
    });
    this.text = this.icon.text(170,350,text)
      .attr({fontSize:100, fillOpacity:0, fill:color, stroke:'none',
    transform: 'rotate(-45,-450,400)', pointerEvents:'none'
    });
    this.make = function(){this.bool=true;cadre(this); glow(this,this.icon);
      if(this.soonCheck)this.mess.animate({fillOpacity:1},500);
    };
    this.unMake = function(){this.bool=false;resetCadre(this); unGlow(this.icon);
      if(this.soonCheck)this.mess.animate({fillOpacity:0},500);
    };
    this.add = function(el){this.s.append(el)};
  }
  Cadre.prototype.click= function(section){
    // var section = document.getElementById("section-"+this.url);
    if(section!=null)
    section.make(this.url);

  }
  Cadre.prototype.soon = function(a){
    this.soonCheck = a;
    this.mess = this.s.text(150,500,'Prochainement!')
      .attr({
        pointerEvents: 'none',
        fontSize:"50px",
        fill:'#faaa10',
        fillOpacity:0
      });
  }

  //animation du cadre
  function cadre(el){
    // console.log(el.attributes.strokeDasharray);
    if(el.cadre.attr('form')=='rect' || el.cadre.attr('form')=='door')
      el.cadre.animate({strokeDasharray: 600, strokeDashoffset: 0, stroke: "#959595", strokeWidth:'10px',fill:el.color, fillOpacity:0.89}, 500, mina.linear);
    if(el.cadre.attr('form')=='circle')
      el.cadre.animate({strokeDasharray: 0, strokeDashoffset: 0, stroke: "#959595", strokeWidth:'10px',fill:el.color, fillOpacity:0.89}, 500, mina.linear);
    if(el.cadre.attr('form')=='formless')
      el.cadre.animate({strokeDasharray: 0, strokeDashoffset: 0, stroke: "#959595", strokeWidth:'10px',fill:el.color, fillOpacity:0.89}, 500, mina.linear);
  }
  //remise à zero du cadre
  function resetCadre(el){
    // console.log(el.attributes);
    el.cadre.animate({strokeDasharray: el.attributes.strokeDasharray, strokeDashoffset: el.attributes.strokeDashoffset, stroke:el.attributes.stroke, strokeWidth:'2px', fill:el.attributes.fill, fillOpacity:el.attributes.fillOpacity},500);
  }
  //animation inner cadre
  function glow(s, el){
    if(s.bool){
      el.select('text').animate({fillOpacity:1, transform:'rotate(-45,-10,420)'},500);
      el.select('.innerRect').animate({transform:'rotate(-45,0,400)', fill:'#eaeaea'},500);
      // if(el.select('.red')!=null)
        // el.selectAll('.red').animate({fill:"#aa2032"},500);
      // el.select(".child").animate({stroke:'#232323'},500);
      el.selectAll(".beat").animate({fill:'#959595'},500,function(){if(s.bool)el.selectAll(".beat").animate({fill:'#d9d9d9'},500,function(){glow(s, el)})});
    }
  }
  //reset inner
  function unGlow(el){
    // el.animate({fill:"#525252", stroke:'#525252'},500);
    // el.select(".child").animate({stroke:'#525252'},500);
    el.select('.innerRect').animate({transform:'rotate(-45,-200,400)', fill:'#303030'},500,mina.easein);
    if(el.selectAll('.beat')!=null)
      el.selectAll(".beat").animate({fill:'#232323'},500);
      el.selectAll(".red").animate({fill:'#232323'},500);
    el.select('text').animate({fillOpacity:0, transform:'rotate(-45,-250,420)'},500,mina.easein);
  }

  function afficheCadre(){
    var cadres = document.getElementsByClassName('cadre');
    for(var i =0;i<cadres.length; i++){
      cadres[i].style.display='inline-block';
      // cadres[i].style.opacity='0';
      // cadres[i].style.animation='show_left 1s ease-in forwards, transparence 0.5s 0.2s linear reverse forwards';
    }
    initCadre();
  }
  setTimeout(function(){afficheCadre()}, 4000);
 // animation Cadre
function animateCadre(svg, over){

  // var cadres = document.getElementsByClassName('cadre');
  var elem = svg.parentElement;
  // elem.style.transition = 'transform 0.5s linear forwards';
    if(over){
      // console.log(svg.getAttribute('id'));
      if(svg.getAttribute('id')=='video')
      // elem.style.transform='rotate('+10+'deg)';
      elem.style.animation='rotation 1s 0.4s ease-out infinite';
      if(svg.getAttribute('id')=='audio')
      elem.style.animation='jump 1s 0.4s ease-out infinite';

      if(svg.getAttribute('id')=='photo')
      elem.style.animation='ring 1s 0.5s ease-out infinite';
    }
    // else elem.style.transform='rotate(0deg)';
    else elem.style.animation='';
}
