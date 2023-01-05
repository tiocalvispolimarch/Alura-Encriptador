const textarea = document.getElementById('message');


textarea.value += 'Appended text';

const btn = document.getElementById('btn');


btn.addEventListener('click', function handleClick() {
  textarea.value += 'Appended text';
});


console.log("Se ha integrado exitosamente el archivo index.js")