const { word } = require('guess-word-random');

const resultado = word();
export const palabra = resultado.laPalabra;
export const clues = resultado.pistas;