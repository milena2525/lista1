/*Peça ao usuário para digitar várias idades separadas por vírgula
em um input e exiba quantas pessoas são maior de idade (18
anos) e quantas são menores.*/

let idade = prompt("Digite idades separadas por vi­rgula",0);
console.log(idade);
maior18(idade);

function maior18(contaAdulto){
    let compara = contaAdulto.split(",");
    var adulto = 0;
    var crianca = 0;
    let maioridade = 18;

    for ( var i=0; i<compara.length; i++ ){
        if( Number(compara[i]) >= maioridade){
            console.log("sim");
            adulto++;
        }else{
            console.log("nao");
            crianca++;
        }
    }
    console.log("O numero de pessoas maior que 18 anos é de: "+ adulto);
    console.log("O numero de pessoas menores que 18 anos é de: "+ crianca);
}