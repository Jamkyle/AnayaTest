var logoSvg = document.getElementById('logoSvg');
var elems = logoSvg.getElementsByTagName('path'); //list paths logo
var gLogo = document.getElementById('gLogo');

  function drawlogo(anElem){ // dessine un element du logo
    var style = anElem.style;
    style.animation= "draw 0.4s linear forwards"; //start stroke
    if(navigator.userAgent.indexOf("Chrome") != -1 )
    if (anElem.className.animVal.indexOf('blurme')>-1) {
      setTimeout(function(){anElem.style.filter = 'url(#f2)';}, 300) //blur elements
    }
  }

  function fillIt(anElem, i){ //colorie le logo
    //Decomment si image
    //document.getElementById('logo').style.animation = 'transparence 1s linear 1 forwards reverse';
    if (anElem!=null) {
      if(anElem.className.animVal.indexOf('fillme')>-1){
        anElem.style.transition = 'fill-opacity 3s linear';
        anElem.style.fillOpacity= "1";
      }
    }
    if(i<elems.length){
    i++;
    fillIt(elems[i], i);
    }else {
    // i=0;
    // console.log('run');
    setTimeout(function(){logoSvg.style.animation='size 1s linear forwards' }, 1500);
    setTimeout(function(){removeStroke(elems[i],i)}, 3000) //wait 3s before remove stroke
    }
  }

  function fill(){
    gLogo.style.filter='url(#f2)';
  }
  
  function removeStroke(elem,i){
    if(elem!=null){
    elem.style.transition = 'stroke 1.5s linear';
    elem.style.stroke = '#a0a0a0';
    elem.style.strokeWidth = '1px';
  }if(i<elems.length){
    i++;
    removeStroke(elems[i], i);}
  }
  /* Element Loop
    0 : A
    1 : N
    2 : A2
    3 : Y
    4 : A3
    5 : Aa1
    6 : Aa2
    7 : Aa3
    8 : a1
    9 : n
    10 : a2
    11 : y
    12 : a3
    13 : last
  */
  function startDraw(i){ //choisi qu'elle Element Dessiné
    if(i<elems.length){
      if( i == elems.length-1){setTimeout(function(){drawlogo(elems[i]); i=0; fillIt(elems[i], i);},150)
    } //draw last item and fill it
    //  if(i==13){setTimeout(function(){},10)}
      else if( i >= elems.length-2){setTimeout(function(){drawlogo(elems[i]); i++; startDraw(i);},150) }
      else if(i > elems.length-5){setTimeout(function(){drawlogo(elems[i]); i++; startDraw(i)},50)}
      else if(i==elems.length-6){setTimeout(function(){drawlogo(elems[i]); i++; startDraw(i)},400)}
      else if(i>elems.length-9){setTimeout(function(){drawlogo(elems[i]); i++; startDraw(i)},10)}
      else if(i==0){setTimeout(function(){drawlogo(elems[i]); i++; startDraw(i)},100)}
      else setTimeout(function(){drawlogo(elems[i]); i++;startDraw(i)},350);
    }
  }
  setTimeout(function(){startDraw(0)},100);
