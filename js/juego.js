var palabras = ['CSS','HTML','ALURA','ORACLE','JAVA','CIVICA','SILLA','COHETE','MAR','LUNA','SOL','SQL','PERL'];
var tablero = document.getElementById('ahorcado').getContext('2d');
var letras = []; 
var palabraCorrecta = "";
var vidas = 0;

iniciar();
tablero.moveTo(500,10);
tablero.lineTo(500,300);

tablero.moveTo(500,300);
tablero.lineTo(450,330);

tablero.moveTo(500,300);
tablero.lineTo(550,330);

tablero.moveTo(500,10);
tablero.lineTo(800,10);

tablero.moveTo(800,10);
tablero.lineTo(800,60);
tablero.stroke();

function escogerPalabraSectreta(){
    var palabra =  palabras[Math.floor(Math.random()*palabras.length)]
    palabraSecreta = palabra;
    return palabraSecreta;
}
function dibujarLineas(){
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#0A3871";
    tablero.beginPath();

    var ancho = 600/palabraSecreta.length;
    for(let i = 0; i < palabraSecreta.length; i++){
        tablero.moveTo(500+(ancho*i),400);
        tablero.lineTo(550+(ancho*i),400);
    }
    tablero.stroke();
    tablero.closePath();
}dibujarLineas(escogerPalabraSectreta())

function escribirLetraCorrecta(index){
    if (vidas < 7){
        tablero.font = 'bold 52px Arial';
        tablero.lineWidth = 6;
        tablero.lineCap = "round";
        tablero.lineJoin = "round";
        tablero.fillStyle = "#0A3871";
    
        var ancho = 600/palabraSecreta.length;
        tablero.fillText(palabraSecreta[index], 506+(ancho*index),400);
        correcta--
        if(letras.length === palabraSecreta.length){
            tablero.fillStyle = "gold";
            tablero.font = "40px Arial";
            tablero.fillText("Felicidades,acertaste la palabra!!!",600,300);
        }
    }
}

function escribirLetraIncorrecta(letra, errorsLeft){
    tablero.font = 'bold 40px Arial';
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#FF0000";

    tablero.fillText(letra, 480+(40*(10 + errorsLeft)),100, 40);
}

function verificarLetra(key){
    if(letras.length < 1 || letras.indexOf(key) < 0){
        letras.push(key);
        return false;
    }else{
        letras.push(key);
        return true;
    }
}

function ponerLetraCorrecta(i){
    palabraCorrecta += palabraSecreta[i].toUpperCase();
}

function ponerLetraIncorrecta(letter){
    if(palabraSecreta.indexOf(letter) <= 0){
        vidas++;
        switch(vidas){
            case 1: 
                 iniciar();
                 tablero.arc(800,80,20,0,2*Math.PI);
                 terminar();
            break;
            case 2:
                iniciar();
                tablero.moveTo(800,100);
                tablero.lineTo(800,150);
                terminar();
            break;
            case 3:
                iniciar();
                tablero.moveTo(800,140);
                tablero.lineTo(755,120);
                terminar();
            break;
            case 4:
                iniciar();
                tablero.moveTo(800,140);
                tablero.lineTo(840,120);
                terminar();
            break;
            case 5:
                iniciar();
                tablero.moveTo(800,140);
                tablero.lineTo(800,190);
                terminar();
            break;
            case 6:
                iniciar();
                tablero.moveTo(800,190);
                tablero.lineTo(770,230);
                terminar();
            break;
            case 7:
                iniciar();
                tablero.moveTo(800,190);
                tablero.lineTo(830,230);
                tablero.fillStyle = "gold";
                tablero.font = "40px Arial";
                tablero.fillText("Haz perdido,vuelve a intentarlo!!!",600,300);
                tablero.font = "25px Arial";
                tablero.fillText("Palabra escondida: "+ palabraSecreta,850,200);
                terminar();
                
            break;
        }
    }
}

document.onkeydown = (e) => {
    let letra = e.key.toUpperCase();
    if(!verificarLetra(e.key)){
        if(palabraSecreta.includes(letra)){
            ponerLetraCorrecta(palabraSecreta.indexOf(letra))
            for(let i = 0; i < palabraSecreta.length; i++){
                if(palabraSecreta[i] ===letra){
                    escribirLetraCorrecta(i);
                }
            }
        }else{
            if(!verificarLetra(e.key)) return 
            ponerLetraIncorrecta(letra);
            escribirLetraIncorrecta(letra,vidas);
        }
    }
}

function iniciar(){
    tablero.lineWidth = 5;
    tablero.fillStyle = "#0A3871";
    tablero.strokeStyle = "#0A3871";
    tablero.beginPath();
}
function terminar(){
    tablero.stroke();
}