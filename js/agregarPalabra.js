var texto = document.getElementsByClassName('text-input').value;
var boton = document.getElementsByClassName('.btn-guardar').onclick = function(){
    palabras = [];
    palabras.push(texto.value);
    console.log(texto);
    texto = "";
}