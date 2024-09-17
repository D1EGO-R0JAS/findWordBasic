import './style.css';
import { palabra, clues} from './generateWord';

// const { word } = require('guess-word-random');

// const resultado = word();
// const palabra = resultado.laPalabra;
// const clues = resultado.pistas;


console.log({palabra,clues});

let pistas = document.getElementById('pistas');
let input = document.getElementById('word');
let boton = document.getElementById('button');
let vidasDisplay = document.getElementById('lifes');

let vidas = 3

vidasDisplay.innerText = `Tienes ${vidas} vidas`;

let palabraSecreta = palabra;

function elecionPistas(){
    let numeroClue = Math.floor(Math.random()*clues.length);
    pistas.innerText = (`Pista: ${clues[numeroClue]}`)
    clues.splice(numeroClue, 1)
}
elecionPistas()

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
    elecionPistas()
  }
}