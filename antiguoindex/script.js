const canvas= document.getElementById('canvas');
const ctx= canvas.getContext('2d');

//texto sin relleno
ctx.letterSpacing="10px"
ctx.font = "bold 10px serif"
ctx.strokeText("Acalli me quiere correr del equipo", 30, 40);

//texto con relleno
ctx.font = "italic 25x serif"
ctx.fillText("Y me van a cambiar por su mejor amiga", 50, 100);

//texto con relleno y sombra


//círculo
ctx.beginPath();
ctx.arc(150, 200, 50, 0, Math.PI * 2, true);
ctx.stroke();