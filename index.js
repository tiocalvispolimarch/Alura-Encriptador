var Text_encryptado = document.getElementById('Text_encryptado');

var texto = document.getElementById('Texto');

const Encryptar_botton = document.getElementById('Encryptar');
const Desencryptar_botton = document.getElementById('Desencriptar');
const Copiar_botton = document.getElementById('Copiar');

var texto_a_encryptar = [];
var texto_copia = [];

Encryptar_botton.addEventListener('click', function handleClick() {
    texto_copia = texto.value;


    for (var i = 0; i < texto_copia.length; i++) {
       var letra  = texto_copia[i];
        switch (letra){
            case "a":
                texto_a_encryptar += "ai"
            break;

            case "e":
                texto_a_encryptar += "enter"
            break;

            case "i":
                texto_a_encryptar += "imes"
            break;

            case "o":
                texto_a_encryptar += "ober"
            break;

            case "u":
                texto_a_encryptar += "ufat"
            break;

            default:        
                texto_a_encryptar += texto_copia[i];
        }
     } 

    Text_encryptado.value = texto_a_encryptar;
    texto_a_encryptar = [];
});


Desencryptar_botton.addEventListener('click', function handleClick() {
    texto_copia = texto.value;
    var contador = 0;
    while(contador<texto_copia.length){
       var letra  = texto_copia[contador];
        if (letra == "a")
         {
            contador++;
            letra  = texto_copia[contador];
            if (letra == "i"){
                texto_a_encryptar += "a";
            }
            else{
                texto_a_encryptar += texto_copia[contador];
            }
         }
        else{
            texto_a_encryptar += texto_copia[contador];
        }
        contador++;


           /* case "e":
                texto_a_encryptar += "enter"
            break;

            case "i":
                texto_a_encryptar += "imes"
            break;

            case "o":
                texto_a_encryptar += "ober"
            break;

            case "u":
                texto_a_encryptar += "ufat"
            break;

            default:        
                texto_a_encryptar += texto_copia[i];*/
        
    
    }
    Text_encryptado.value = texto_a_encryptar;
    texto_a_encryptar = [];
});


