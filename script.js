//Variáveis
let tela = document.getElementById("tela");
let resposta = document.getElementById("resposta");
resposta.style.display = 'none';
let painel = document.getElementById("painel");
let pontuacao = document.getElementById("pontos");
let k1 = document.getElementById("k1");
k1.style.display = 'none';
let k2 = document.getElementById("k2");
let rodada = document.getElementById("round");
let k3 = document.getElementById("k3");
k3.style.display = 'none';

//Data Base
const tabuada = [];
for (let i = 1; i < 11; i++) {
    for (let j = 1; j < 11; j++) {
        tabuada.push([`${i}*${j}`, i * j])
    }
} console.log(tabuada);

let pontos = 0;

//Funcionamento
let n = 0;
let m = 0;
let p = "";

function start() {
    p = "";
    tela.classList.remove("green")
    tela.classList.remove("red")
    m += 1
    rodada.innerHTML = `Rodada ${m}`
    pontuacao.innerHTML = `A sua pontuação é: ${pontos}`;
    k3.style.display = '';
    resposta.style.display = ''
    k1.style.display = ''
    let Aleatorio = Math.floor(Math.random() * tabuada.length);
    tela.value = `${tabuada[Aleatorio][0]} = ???`;
    let res = tabuada[Aleatorio][1];
    p += `${tabuada[Aleatorio][0]} = ${res}`;
    n += res;
    k2.innerHTML = '<ion-icon class="try_again" name="reload-outline"></ion-icon>'
}

function teste() {
    if (resposta.value == n) {
        tela.classList.add("green");
        painel.innerHTML = "Certo!";
        pontos += 10;
        pontuacao.innerHTML = `A sua pontuação é: ${pontos}`;
        tela.value = p;
        p = "";
    } else{
        tela.classList.add("red");
        painel.innerHTML = "Errado!";
        pontos -= 10;
        pontuacao.innerHTML = `A sua pontuação é: ${pontos}`;
        tela.value = p;
        p = "";
    } console.log(n);
    n = 0;
    k1.style.display = 'none';
    resposta.style.display = 'none';
    resposta.value = "";
    if (pontos == 100) {
        alert("Parabéns! Você atingiu 100 pontos.")
    } else if (pontos == 200){
        alert("Parabéns! Você atingiu 200 pontos.")
    } else if (pontos == 300){
        alert("Parabéns! Você atingiu 300 pontos.")
    } else if (pontos == 400){
        alert("Você acaba de quebrar o programa! A sua pontuação foi muito alta. Parabéns!!")
    } 
}
