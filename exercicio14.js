/*Escreva uma condição IF para checar se o valor de um produto está entre 100 e 200
reais de forma inclusiva.*/

let valor = prompt("Informe o valor do produto",0);
validaentre100e200(valor);

function validaentre100e200(valida){
    
    if( Number(valida) >= 100 && Number(valida)<=200){
        console.log("O produto custa entre 100 e 200 reais");
    }else{
        console.log("O produto não custa entre 100 e 200 reais");
    }
}