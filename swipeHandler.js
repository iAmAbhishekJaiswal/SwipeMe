         $.fn.slideMaster = function( obj ) {
                 var slideTrack;
                 var range=0;
                 var directionTrack;
                 var previousBgColor;
                 var minRange=(obj.range!=undefined)?obj.range:0.6;
                 
                 
            	$(this).on('touchstart mousedown', function(e) {       	     
                  slideTrack= $(this)[0];
                  slideTrack.style.transition=" transform 0.05s";
                  previousBgColor = window.getComputedStyle(slideTrack).getPropertyValue("background-color");
                 });
                 
                 $(this).slide(function( direction, offset ) {
         	
             var eleWidth = window.getComputedStyle(slideTrack).getPropertyValue("width");
             range=   ((offset.x/  parseInt(eleWidth ))*100)/100;
             
             if(direction.x==="right"){
           	 slideTrack.style.background=hexToRgba(obj.rightSlideColor,range);
                
                directionTrack="right";                               
                 }
             
          else if(direction.x==="left"){
          	directionTrack="left";
          	slideTrack.style.background=hexToRgba(obj.leftSlideColor,Math.abs(range));
              
              
               
               }
            
            slideTrack.style.transform="translateX("+offset.x+"px)";
         });
            
            
            $(this).on('touchend mouseup', function(e) {  
         	    
                     slideTrack.style.transform="translateX(-"+"0px)";
                     slideTrack.style.background=previousBgColor;
                      
                      
                    if(Math.abs(range)>minRange){
                         if(directionTrack==="right"){
                             obj.rightSlideFunction();
                       }
                       
                       else if(directionTrack==="left"){
                             obj.leftSlideFunction();
                       }
                       
                  }
                  
                  
                  
            });
      }
   
    $.fn.slide = function( callback ) {
  var touchDown = false,
    originalPosition = null,
    $el = $( this );

  function swipeInfo( event ) {
    if ('undefined' !== typeof event.originalEvent.pageX) {
      var x = event.originalEvent.pageX,
          y = event.originalEvent.pageY,
          dx, dy;
    }else{
      var x = event.originalEvent.touches[0].pageX,
          y = event.originalEvent.touches[0].pageY,
          dx, dy;
    }

    dx = ( x > originalPosition.x ) ? "right" : "left";
    dy = ( y > originalPosition.y ) ? "down" : "up";

    return {
      direction: {
        x: dx,
        y: dy
      },
      offset: {
        x: x - originalPosition.x,
        y: originalPosition.y - y
      }
    };
  }

  $el.on( "touchstart mousedown", function ( event ) {
    touchDown = true;
    if ('undefined' !== typeof event.originalEvent.pageX) {
      originalPosition = {
        x: event.originalEvent.pageX,
        y: event.originalEvent.pageY
      };
    }else{
      originalPosition = {
        x: event.originalEvent.touches[0].pageX,
        y: event.originalEvent.touches[0].pageY
      };
    }
  } );

  $el.on( "touchend mouseup", function () {
    touchDown = false;
    originalPosition = null;
  } );

  $el.on( "touchmove mousemove", function ( event ) {
    if ( !touchDown ) { return;}
    var info = swipeInfo( event );
    callback( info.direction, info.offset );
  } );

  return true;
};


//function to convert hex to rgba
function hexToRgba(hex,alpha){
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+','+alpha+')';
    }
    throw new Error('Bad Hex');
}




