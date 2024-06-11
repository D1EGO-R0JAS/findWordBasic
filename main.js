let pistas = document.getElementById('pistas');
let input = document.getElementById('word');
let boton = document.getElementById('button');
let vidasDisplay = document.getElementById('lifes');

let palabras = ['pelota','raqueta','leon']
let pistasLeon = ['Tiene dos silabas','Es un animal salvaje','Tiene garras']
let pistasPelota = ['Tiene tres silabas','Los niños juegan con ella','tiene forma geometrica']
let pistasRaqueta = ['Tiene tres silabas','Tiene 4 vocales donde la letra a se repite dos veces','Suele ser mallada']
let vidas = 3

vidasDisplay.innerText = `Tienes ${vidas} vidas`
let numeroPalabra = Math.floor(Math.random()*palabras.length);

let palabraSecreta = palabras[numeroPalabra]
console.log(palabraSecreta);

function elecionPistas(numeroPalabra){
    if(numeroPalabra === 0){
        /*Salio pelota*/
        let numeroPistaPelota = Math.floor(Math.random()*pistasPelota.length)
        pistas.innerText = (`Pista: ${pistasPelota[numeroPistaPelota]}`)
        pistasPelota.splice(numeroPistaPelota, 1)
      }else if(numeroPalabra ===1){
        /*Salio raqueta*/
        let numeroPistaRaqueta = Math.floor(Math.random()*pistasRaqueta.length)
        pistas.innerText = (`Pista: ${pistasRaqueta[numeroPistaRaqueta]}`)
        pistasRaqueta.splice(numeroPistaRaqueta, 1)
      }else{
        /*Salio leon*/
        let numeroPistaLeon = Math.floor(Math.random()*pistasLeon.length)
        pistas.innerText = (`Pista: ${pistasLeon[numeroPistaLeon]}`)
        pistasLeon.splice(numeroPistaLeon, 1)
      }
}
elecionPistas(numeroPalabra)

boton.addEventListener('click' ,confirmar)

function confirmar(){
  let respuesta = input.value;
  input.value = ''
  if(respuesta === palabraSecreta){
    alert('Genial, adivinaste la palabra.')
    location.reload(true);
  }else if( vidas === 1){
    alert(`No adivinaste, la plabra era: ${palabraSecreta}`)
    location.reload(true);
  }else{
    alert('No es la palabra')
    vidas -= 1
    vidasDisplay.innerText = `Tienes ${vidas} vidas`
    elecionPistas(numeroPalabra)
  }
}