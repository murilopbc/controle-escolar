let nome = document.getElementById("nome")
let btnCalcular = document.getElementById("btn-calcular")
let resultado = document.getElementById("resultado")


btnCalcular.addEventListener("click", function(e){
    e.preventDefault()

    let nota = parseInt(document.getElementById("nota").value)
    let frequencia = parseInt(document.getElementById("frequencia").value)

    calcular(nota, frequencia)
})

function calcular(nota, frequencia){
    if (frequencia >= 75 && nota < 60) {
        resultado.innerHTML = "Recuperação";
        let rec = document.createElement("div");
        rec.innerHTML = <p id="resultado" class="item-saida" type="number"> </p>

    }
    if (nota >= 60 && frequencia >= 75){
        resultado.innerHTML = "Aprovado";
        
    }
    else {
        resultado.innerHTML = "Reprovado";
    }
}