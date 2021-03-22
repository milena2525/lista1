/*Faça um programa que entre com cinco números e imprima o
quadrado de cada número (Looping).*/

let numero = [1,2,3,4,5];
console.log(numero);

let loop = 1;
while(loop!= 0){
    for( let x=0;x<5;x++ ){
        numero[x] = (numero[x]**2);
    }
    console.log(numero);
}
