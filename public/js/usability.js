window.onload=function(){document.body.style.zIndex="1",document.body.style.position="relative",document.body.appendChild(test),mouseMove()};var coords=readCookie("coords"),coords_array=coords.split(",");console.log(coords_array);var load_bolean=!1,test=document.createElement("test"),timeout=0,widthX=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,heightY=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;function readCookie(c){for(var a,g=c+"=",d=document.cookie.split(";"),e=0;e<d.length;e++){for(a=d[e];" "==a.charAt(0);)a=a.substring(1,a.length);if(0==a.indexOf(g))return a.substring(g.length,a.length)}return null}function mouseMove(){if(load_bolean=!0)for(var g,h=0;h<coords_array.length;h++)if(g=coords_array[h],-1!==g.indexOf("|")){var i=g.indexOf("|");g=g.slice(i+1);var c=g.indexOf(":"),j=g.slice(0,c),k=g.slice(c+1);movePointer(j,k,timeout,!0)}else{var c=g.indexOf(":"),j=g.slice(0,c),k=g.slice(c+1);timeout+=100,movePointer(j,k,timeout)}}function movePointer(e,a,b,c){setTimeout(function(){console.log(e+" : "+a),test.style.position="absolute",test.style.zIndex="2",test.style.width="12px",test.style.height="19px",test.style.marginTop=a+"px",test.style.marginLeft=e+"px",test.style.backgroundImage="url(\"./img/pointer-red.png\")",a>heightY/2&&window.scrollTo(0,a-heightY/2),a<heightY&&window.scrollTo(0,a-heightY/2),!0===c&&(test.style.width="26px",test.style.height="33px",test.style.marginTop=a-7+"px",test.style.marginLeft=e-7+"px",test.style.backgroundImage="url(\"./img/pointer-yellow2.png\")")},b)}