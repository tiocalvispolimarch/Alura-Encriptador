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
       //Desencriptar letra "a":
        if (letra == "a" )
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
        //Desencriptar letra "e":
        else if (letra == "e")
         {  contador++;
            letra  = texto_copia[contador];
            if (letra == "n"){
                contador++;
                letra  = texto_copia[contador];
                if (letra == "t"){
                    contador++;
                    letra  = texto_copia[contador];
                    }
                    if (letra == "e"){
                        contador++;
                        letra  = texto_copia[contador];
                        }
                        if (letra == "r"){ 
                            texto_a_encryptar += "e";
                            }
            }
            else{
                texto_a_encryptar += texto_copia[contador];
            }
         } 
         //Desencriptar letra "i":
        else if (letra == "i")
        {  contador++;
           letra  = texto_copia[contador];
           if (letra == "m"){
               contador++;
               letra  = texto_copia[contador];
               if (letra == "e"){
                   contador++;
                   letra  = texto_copia[contador];
                   }
                    if (letra == "s"){ 
                        texto_a_encryptar += "i";
                    }
           }
           else{
               texto_a_encryptar += texto_copia[contador];
           }
        } 

        //Desencriptar letra "o":
        else if (letra == "o")
        {  contador++;
           letra  = texto_copia[contador];
           if (letra == "b"){
               contador++;
               letra  = texto_copia[contador];
               if (letra == "e"){
                   contador++;
                   letra  = texto_copia[contador];
                   }
                    if (letra == "r"){ 
                        texto_a_encryptar += "o";
                    }
           }
           else{
               texto_a_encryptar += texto_copia[contador];
           }
        } 

        //Desencriptar letra "u":
        else if (letra == "u")
        {  contador++;
           letra  = texto_copia[contador];
           if (letra == "f"){
               contador++;
               letra  = texto_copia[contador];
               if (letra == "a"){
                   contador++;
                   letra  = texto_copia[contador];
                   }
                    if (letra == "t"){ 
                        texto_a_encryptar += "u";
                    }
           }
           else{
               texto_a_encryptar += texto_copia[contador];
           }
        } 

        else{
            texto_a_encryptar += texto_copia[contador];
        }
        contador++;     
    }
    Text_encryptado.value = texto_a_encryptar;
    texto_a_encryptar = [];
});


Copiar_botton.addEventListener('click', function handleClick() {
    Text_encryptado.select();
    document.execCommand('copy');
    texto.value = Text_encryptado.value; 
    alert("Contenido copiado al portapapeles");
});