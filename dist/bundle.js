(()=>{var a={208:(a,e,n)=>{"use strict";n.d(e,{A:()=>s});var r=n(601),t=n.n(r),o=n(314),i=n.n(o)()(t());i.push([a.id,'*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\nbody{\n    width: 100%;\n    height: 100vh;\n    background-image: linear-gradient(to right top, #6fdce3, #00bdea, #0099f2, #006ee9, #5c2fc2);\n    padding: 10px;\n}\n.flexCenter{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\nmain{\n    width: 420px;\n    height: 500px;\n    border: 1px solid white;\n    border-radius: 15px;\n    padding: 10px;\n    flex-direction: column;\n    gap: 30px;\n    text-align: center;\n    box-shadow: 10px 10px 48px -7px rgba(0,0,0,0.75);\n}\nh1{\n    color: white;\n    text-shadow:\n        -1px -1px 0 #000, /* Top left */\n        1px -1px 0 #000, /* Top right */\n        -1px 1px 0 #000, /* Bottom left */\n        1px 1px 0 #000; /* Bottom right */\n}\ninput{\n    width: 220px;\n    height: 40px;\n    text-align: center;\n    border-radius: 10px;\n}\nbutton {\n    text-decoration: none;\n    position: relative;\n    border: 1px solid white;\n    font-size: 14px;\n    font-family: inherit;\n    cursor: pointer;\n    color: #fff;\n    width: 9em;\n    height: 3em;\n    line-height: 2em;\n    text-align: center;\n    background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);\n    background-size: 300%;\n    border-radius: 30px;\n    z-index: 1;\n  }\n  \n  button:hover {\n    animation: ani 8s linear infinite;\n    border: none;\n  }\n  \n  @keyframes ani {\n    0% {\n      background-position: 0%;\n    }\n  \n    100% {\n      background-position: 400%;\n    }\n  }\n  \n  button:before {\n    content: "";\n    position: absolute;\n    top: -5px;\n    left: -5px;\n    right: -5px;\n    bottom: -5px;\n    z-index: -1;\n    background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);\n    background-size: 400%;\n    border-radius: 35px;\n    transition: 1s;\n    border: 1px solid white;\n  }\n  \n  button:hover::before {\n    filter: blur(20px);\n  }\n  \n  button:active {\n    background: linear-gradient(32deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);\n  }\n  p{\n    color: purple;\n    font-size: 24px;\n    font-weight: bold;\n  }',""]);const s=i},314:a=>{"use strict";a.exports=function(a){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=a(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(a,n,r,t,o){"string"==typeof a&&(a=[[null,a,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var p=0;p<a.length;p++){var c=[].concat(a[p]);r&&i[c[0]]||(void 0!==o&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),t&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=t):c[4]="".concat(t)),e.push(c))}},e}},601:a=>{"use strict";a.exports=function(a){return a[1]}},954:(a,e,n)=>{const{getRandomNumber:r}=n(61),t=[{palabra:"balon",pistas:["Instrumento o elemento usado en un deporte","Es un objeto redondo con dos sílabas","Normalmente puede ser de forma circular con cuadrados hexagonales de color blanco y negro"]},{palabra:"guitarra",pistas:["Instrumento musical","Tiene cuerdas","Se toca con las manos"]},{palabra:"computadora",pistas:["Dispositivo electrónico","Se usa para procesar información","Tiene teclado y pantalla"]},{palabra:"perro",pistas:["Animal doméstico","Ladra","Es conocido como el mejor amigo del hombre"]},{palabra:"bicicleta",pistas:["Medio de transporte","Tiene dos ruedas","Se usa pedaleando"]},{palabra:"televisión",pistas:["Aparato electrónico","Se usa para ver programas","Tiene una pantalla grande"]},{palabra:"libro",pistas:["Objeto para leer","Tiene páginas","Puede contar historias"]},{palabra:"mesa",pistas:["Mueble","Tiene patas","Se usa para comer o trabajar"]},{palabra:"avión",pistas:["Medio de transporte","Vuela","Se usa para viajar largas distancias"]},{palabra:"ventana",pistas:["Abertura en una pared","Deja pasar la luz","Puede tener vidrio"]},{palabra:"teléfono",pistas:["Dispositivo de comunicación","Se usa para llamar","Puede ser móvil o fijo"]},{palabra:"zapato",pistas:["Prenda de vestir","Se usa en los pies","Puede ser de diferentes estilos"]},{palabra:"lámpara",pistas:["Objeto que da luz","Puede ser de mesa o de techo","Se usa para iluminar"]},{palabra:"pluma",pistas:["Instrumento de escritura","Usa tinta","También puede referirse a una parte de un ave"]},{palabra:"refrigerador",pistas:["Electrodoméstico","Mantiene los alimentos fríos","Tiene una puerta y compartimentos"]},{palabra:"carro",pistas:["Medio de transporte","Tiene cuatro ruedas","Se usa para desplazarse por carretera"]},{palabra:"reloj",pistas:["Objeto que indica la hora","Se lleva en la muñeca o se cuelga en la pared","Puede ser analógico o digital"]},{palabra:"sofá",pistas:["Mueble","Se usa para sentarse","Generalmente tiene cojines"]},{palabra:"pintura",pistas:["Arte visual","Se realiza con pinceles y colores","Puede estar en un lienzo"]},{palabra:"cuchara",pistas:["Utensilio de cocina","Se usa para comer","Tiene una forma cóncava"]},{palabra:"camiseta",pistas:["Prenda de vestir","Se usa en la parte superior del cuerpo","Puede ser de manga corta o larga"]},{palabra:"coche",pistas:["Medio de transporte","Tiene cuatro ruedas","Se usa para viajar por carretera"]},{palabra:"pelota",pistas:["Instrumento de juego","Es redonda","Se usa en muchos deportes"]},{palabra:"mariposa",pistas:["Insecto","Tiene alas coloridas","Empieza como una oruga"]},{palabra:"sombrero",pistas:["Prenda de vestir","Se usa en la cabeza","Puede tener ala"]},{palabra:"león",pistas:["Animal salvaje","Es conocido como el rey de la selva","Tiene una melena"]},{palabra:"piano",pistas:["Instrumento musical","Tiene teclas","Se toca con las manos"]},{palabra:"manzana",pistas:["Fruta","Puede ser roja, verde o amarilla",'Es conocida por el dicho "una al día, mantiene al doctor en la lejanía"']},{palabra:"tijeras",pistas:["Herramienta de corte","Tiene dos hojas","Se usa para cortar papel o tela"]},{palabra:"flor",pistas:["Parte de una planta","Es colorida y fragante","Se encuentra en jardines"]},{palabra:"mochila",pistas:["Accesorio","Se usa para llevar cosas en la espalda","Tiene correas"]},{palabra:"barco",pistas:["Medio de transporte","Navega en el agua","Puede ser de vela o motor"]},{palabra:"lluvia",pistas:["Fenómeno meteorológico","Consiste en la caída de agua","Ocurre en nubes"]},{palabra:"estrella",pistas:["Objeto celeste","Brilla en la noche","El sol es un ejemplo cercano"]},{palabra:"montaña",pistas:["Elevación natural del terreno","Puede ser alta y escarpada","Es parte del paisaje"]},{palabra:"escalera",pistas:["Objeto para subir o bajar","Tiene peldaños","Se usa en casas y edificios"]},{palabra:"puerta",pistas:["Abertura en una pared","Permite el paso de personas","Tiene una manija o pomo"]},{palabra:"cepillo",pistas:["Instrumento de aseo","Se usa para peinar el cabello","Tiene cerdas"]},{palabra:"radio",pistas:["Dispositivo de comunicación","Se usa para escuchar música o noticias","Funciona con ondas"]},{palabra:"almuerzo",pistas:["Comida del mediodía","Es una de las comidas principales del día","Se toma después del desayuno"]},{palabra:"chaqueta",pistas:["Prenda de vestir","Se usa en la parte superior del cuerpo","Proporciona abrigo"]},{palabra:"jabón",pistas:["Producto de limpieza","Se usa para lavar","Puede ser líquido o en barra"]},{palabra:"cine",pistas:["Lugar de entretenimiento","Se proyectan películas","Tiene una pantalla grande"]},{palabra:"gato",pistas:["Animal doméstico","Maúlla","Es conocido por su agilidad y curiosidad"]},{palabra:"cuchillo",pistas:["Herramienta de corte","Tiene una hoja afilada","Se usa para cortar alimentos"]},{palabra:"árbol",pistas:["Planta grande","Tiene tronco y ramas","Proporciona sombra"]},{palabra:"pescado",pistas:["Animal acuático","Se encuentra en ríos y mares","Es una fuente de alimento"]},{palabra:"globo",pistas:["Objeto de fiesta","Se infla con aire o helio","Puede ser de colores diversos"]},{palabra:"periódico",pistas:["Publicación diaria","Contiene noticias e información","Se imprime en papel"]}];a.exports={word:function(){const a=r(0,50);return{laPalabra:t[a].palabra,pistas:t[a].pistas}}}},61:a=>{a.exports={getRandomNumber:function(a,e){return Math.floor(Math.random()*(e-a+1))+a},getAnyNumber:function(){return Math.floor(Math.random()*Math.random()+(new Date).getMilliseconds()*(new Date).getFullYear())},getRandomFloat:function(a,e){return Math.random()*(e-a)+a},getRandomBoolean:function(){return Math.random()<.5},getRandomWord:function(a){let e="";for(let n=0;n<a;n++)e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62*Math.random()));return e},shuffleArray:function(a){const e=[...a];for(let a=e.length-1;a>0;a--){const n=Math.floor(Math.random()*(a+1));[e[a],e[n]]=[e[n],e[a]]}return e},getRandomElementFromArray:function(a){return 0===a.length?null:a[Math.floor(Math.random()*a.length)]}}},72:a=>{"use strict";var e=[];function n(a){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===a){n=r;break}return n}function r(a,r){for(var o={},i=[],s=0;s<a.length;s++){var l=a[s],p=r.base?l[0]+r.base:l[0],c=o[p]||0,d="".concat(p," ").concat(c);o[p]=c+1;var u=n(d),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var b=t(m,r);r.byIndex=s,e.splice(s,0,{identifier:d,updater:b,references:1})}i.push(d)}return i}function t(a,e){var n=e.domAPI(e);return n.update(a),function(e){if(e){if(e.css===a.css&&e.media===a.media&&e.sourceMap===a.sourceMap&&e.supports===a.supports&&e.layer===a.layer)return;n.update(a=e)}else n.remove()}}a.exports=function(a,t){var o=r(a=a||[],t=t||{});return function(a){a=a||[];for(var i=0;i<o.length;i++){var s=n(o[i]);e[s].references--}for(var l=r(a,t),p=0;p<o.length;p++){var c=n(o[p]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}o=l}}},659:a=>{"use strict";var e={};a.exports=function(a,n){var r=function(a){if(void 0===e[a]){var n=document.querySelector(a);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(a){n=null}e[a]=n}return e[a]}(a);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:a=>{"use strict";a.exports=function(a){var e=document.createElement("style");return a.setAttributes(e,a.attributes),a.insert(e,a.options),e}},56:(a,e,n)=>{"use strict";a.exports=function(a){var e=n.nc;e&&a.setAttribute("nonce",e)}},825:a=>{"use strict";a.exports=function(a){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=a.insertStyleElement(a);return{update:function(n){!function(a,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var t=void 0!==n.layer;t&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,t&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,a,e.options)}(e,a,n)},remove:function(){!function(a){if(null===a.parentNode)return!1;a.parentNode.removeChild(a)}(e)}}}},113:a=>{"use strict";a.exports=function(a,e){if(e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}}},e={};function n(r){var t=e[r];if(void 0!==t)return t.exports;var o=e[r]={id:r,exports:{}};return a[r](o,o.exports,n),o.exports}n.n=a=>{var e=a&&a.__esModule?()=>a.default:()=>a;return n.d(e,{a:e}),e},n.d=(a,e)=>{for(var r in e)n.o(e,r)&&!n.o(a,r)&&Object.defineProperty(a,r,{enumerable:!0,get:e[r]})},n.o=(a,e)=>Object.prototype.hasOwnProperty.call(a,e),n.nc=void 0,(()=>{"use strict";var a=n(72),e=n.n(a),r=n(825),t=n.n(r),o=n(659),i=n.n(o),s=n(56),l=n.n(s),p=n(540),c=n.n(p),d=n(113),u=n.n(d),m=n(208),b={};b.styleTagTransform=u(),b.setAttributes=l(),b.insert=i().bind(null,"head"),b.domAPI=t(),b.insertStyleElement=c(),e()(m.A,b),m.A&&m.A.locals&&m.A.locals;const{word:f}=n(954),g=f(),h=g.laPalabra,v=g.pistas;console.log(g),console.log({palabra:h,clues:v});let x=document.getElementById("pistas"),y=document.getElementById("word"),S=document.getElementById("button"),T=document.getElementById("lifes"),j=3;T.innerText=`Tienes ${j} vidas`;let M=h;function P(){let a=Math.floor(Math.random()*v.length);x.innerText=`Pista: ${v[a]}`,v.splice(a,1)}P(),S.addEventListener("click",(function(){let a=y.value;y.value="",a===M?(alert("Genial, adivinaste la palabra."),location.reload(!0)):1===j?(alert(`No adivinaste, la plabra era: ${M}`),location.reload(!0)):(alert("No es la palabra"),j-=1,T.innerText=`Tienes ${j} vidas`,P())}))})()})();