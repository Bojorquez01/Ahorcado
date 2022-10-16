var boton = document.querySelector(".btn-guardar").addEventListener("click", () => {

            var text = document.getElementById("new-word").value;
            text = text.toUpperCase();
            if(text.length < 7 ){
                if(palabras.find(text)){
                    alert("La palabra ya existe." );
                }else{
                    palabras.push(text);
                    text = " ";
                }
            }else{
                alert("Solo se pueden introducir palabras que maximo tengan 6 letras" );
            }
});