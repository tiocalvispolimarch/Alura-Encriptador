var Text_encryptado = document.getElementById('Text_encryptado');

var texto = document.getElementById('Texto');

const btn = document.getElementById('Encryptar');


btn.addEventListener('click', function handleClick() {
    Text_encryptado.value += texto.value;
});


console.log("Se ha integrado exitosamente el archivo index.js")