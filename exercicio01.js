/*Crie um array de notas e calcule a média de todas essas notas e
exiba no console.*/

function calcularMedia(notas){
    let somas = 0;

    for(let i=0; i<notas.length; i++){
        somas = somas + notas[i];
    }
    let media = somas/notas.length;
    return media;

let notas = [7,8,9,10,2];
media1 = calcularMedia(notas);
console.log(media1);

let notas2 = [5,7,9,12,15];
media2 = calcularMedia(notas);
console.log(media2);