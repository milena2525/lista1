/*Peça ao usuário para digitar 5 números em uma caixa de texto,
separados por vírgula, Verifique qual é o maior número e exiba-o.*/

let listanum = prompt("Digite os numeros separando-os por vírgula",0);
console.log("O maior valor: "+ max(listanum));

function max(num_string){
    var maior = listanum[0];
    var j=1; 

    do{
        if(listanum[j]>maior){
            maior = listanum[j];
            j++;
        }
        j++;
    }while(j<listanum.length);

    return maior;
}