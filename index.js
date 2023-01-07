var Text_encryptado = document.getElementById('Text_encryptado');

var texto = document.getElementById('Texto');

const btn = document.getElementById('Encryptar');

var texto_a_encryptar = [];
var texto_copia = [];
btn.addEventListener('click', function handleClick() {
    texto_copia = texto.value;


    for (var i = 0; i < texto_copia.length; i++) {
       
        if (texto_copia[i] == "a")
        {
            texto_a_encryptar += "ai"
        }
        else{
            texto_a_encryptar += texto_copia[i];
        }
     } 

    Text_encryptado.value = texto_a_encryptar;

});


console.log("Se ha integrado exitosamente el archivo index.js")