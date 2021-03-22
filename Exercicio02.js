/*Solicite o usuário a inserção de notas via prompt e calcule a
média de diversas notas digitadas em um input, separados por
vírgula, pelo usuário*/

function calcularMedia(notas_string){
    let notas = notas_string.split(",");
}

function calcularMedia(notas){
    let somas = 0;

    for(let i=0; i<notas.length; i++){
        somas = somas + Number(notas[i]);
    }
    let media = somas/notas.length;
    return media;
}

let notas = prompt("Digite notas separadas por vírgula",0);//exibe na tela uma mensagem para o usuário em uma caixa de texto, e insere o número 0 como valor default dentro da caixa texto
console.log(calcularMedia(notas));//invoca a funcao calcularMedia e exibe no console o resultado da funcao