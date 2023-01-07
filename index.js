var Text_encryptado = document.getElementById('Text_encryptado');

var texto = document.getElementById('Texto');

const btn = document.getElementById('Encryptar');

var texto_a_encryptar = [];
var texto_copia = [];
btn.addEventListener('click', function handleClick() {
    texto_copia = texto.value;

    for(var i = 0; i < texto_copia.lenght; i++)
    {
               switch(texto_copia[i]){
               case "a": 
               texto_a_encryptar_encryptado += "ai";
               break;

               default: 
               texto_a_encryptar[i] = texto_copia[i];
               
               }
    }

    Text_encryptado.value = texto_a_encryptar;

});


console.log("Se ha integrado exitosamente el archivo index.js")