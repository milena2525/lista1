/*Remova o primeiro valor do array e exiba ele no console.*/

var tipomusical = ['Rock', 'Pagode'];

var adicionar = tipoomusical.push('Funk');
var copiararray = tipomusical.slice();
console.log("Estilo musical 1: " + tipomusical);
console.log("Backup Array: "+ copiararray);
var buffer = [];
var conta = 0;

console.log("Backup array: "+copiararray)

let tamanho = (tipomusical.length)-1;
console.log(tamanho);

if(tamanho%2==0){
    for( let i=0; i<((copiararray.length+1)/2)-1;i++){//1
        adicionar = buffer.push(tipomusical[0]);
        var removeprimeiro = tipomusical.shift();
        conta++;
    }
    var removeprimeiro = tipomusical.shift();
    var adicionar = tipomusical.unshift('Axe');
    console.log(tipomusical);

    for( let i=0; i<conta;i++){//2
        tipomusical.unshift(buffer[i]);
    }
}

console.log("Estilo musical: " + tipomusical);

var primeiro = tipomusical.shift();
console.log("Removido primeiro valor: " + tipomusical);