/*
Desenvolva uma página web para o controle de alunos de uma escola 
a partir dos seguintes requisitos:
-> Leia o nome, nota final e frequência do aluno
   Obs.: A frequancia será lida como um número real, porém, considerada como uma porcentagem.
         Exemplo: 75.00 equivale a 75%
-> A frequência mínima para aprovação é de 75% (caso contrário o aluno estará reprovado).
-> A nota final mínima para aprovação é 6.0
-> Caso o aluno tenha frequência satisfatória e não atinja a nota mínima, será lida uma nota de recuperação
   que também deverá ser igual ou superior a 6.0

*/


// Acessando os elementos

let btnCalcular = document.getElementById("btn-calcular");
let resultado = document.getElementById("resultado");

// Adicionando um escutador no botão para calcular a nota do aluno

btnCalcular.addEventListener('click', function(e){
   e.preventDefault();

   // Capturando os valores contidos nos elementos

   let nome = document.getElementById("nome").value;
   let nota = parseInt(document.getElementById("nota").value);
   let frequencia = parseInt(document.getElementById("frequencia").value);

   // Passando os parâmetros para a função 'calcular' 

   calcular(nome, nota, frequencia);

});

// Função para calcular se o aluno está de recuperação, aprovado ou reprovado

function calcular(nome, nota, frequencia) { 

    if (nota < 60 && frequencia >= 75){
        resultado.innerHTML = `O aluno ${nome} está de recuperação`;

        // Criei um 'input' para armazenar a nota de recuperação do aluno

        let input = document.createElement("input");
        input.type = "number";
        input.placeholder = "Digite sua nota de recuperação";

        // Criei um botão para calcular a nota de recuperação adicionando um escutador de evento
        // Captura a nota de recuperação e exibe se está 'Aprovado' ou 'Reprovado'

        let btnRecuperacao = document.createElement("button");     
        btnRecuperacao.innerHTML = "Calcular Recuperação";
        btnRecuperacao.addEventListener('click', function(){
            let notaRecuperacao = parseInt(input.value);
            if (notaRecuperacao >= 60) {
                resultado.innerHTML = `O aluno ${nome} foi Aprovado!`;
            } else {
                resultado.innerHTML = `O aluno ${nome} foi Reprovado!`;
            }
        });

        // Adicionando o 'input' para digitar a recuperação e o 'button' para calcular recuperação

        resultado.appendChild(input);
        resultado.appendChild(btnRecuperacao);
    }

    // Condição para 'Aprovado' ou 'Reprovado' 

    else if (nota >= 60 && frequencia >= 75){
        resultado.innerHTML = `O aluno ${nome} foi Aprovado`;
   }

   else {
        resultado.innerHTML =  `O aluno ${nome} foi Reprovado`;
   }
}
