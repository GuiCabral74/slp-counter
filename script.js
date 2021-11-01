/* BOTÕES DE VITORIA E DERROTA */
const vitorias = document.getElementById("quantidadeVitorias");
const derrotas = document.getElementById("quantidadeDerrotas");

vitorias.innerHTML = 0;
derrotas.innerHTML = 0;

var count = 0;
function acrescentar () {
    count++;
    vitorias.innerHTML = count;
}
function subtrair () {
    count--;
    vitorias.innerHTML = count;
}

var count2 = 0;
function acrescentar2 () {
    count2++;
    derrotas.innerHTML = count2;
}
function subtrair2 () {
    count2--;
    derrotas.innerHTML = count2;
}

/*CALCULO DE SLP */

const btn = document.querySelector("#calcular");

btn.addEventListener("click", function(e) {
    e.preventDefault();

    const inicio = document.querySelector("#init").value;
    const final = document.querySelector("#final").value;
    const resultado = document.querySelector(".resultado");
    
    console.log(inicio);
    console.log(final);
    console.log(final - inicio);
    
    let calculo = document.createTextNode(final - inicio);

    resultado.appendChild(calculo);
    
    btn.addEventListener("click", function () {
        resultado.removeChild(calculo);
    })
})
