//exercicio-001
document.getElementById("exercicio-001").innerHTML = "Ola Mundo!";
document.getElementById("exercicio-001").style.color = "red";
//exercicio-002
function pedirMostrarNome() {
    var x = window.prompt("Qual é o seu nome?");
    var y = window.alert("O seu nome é " + x);
    return;
}
//exercicio-003
function somarDoisNumeros() {
    var x = Number(window.prompt("Digite um número: ")); 
    var y = Number(window.prompt("Digite outro número: "));
    var soma = x + y;
    window.alert("A soma dos valores é " + soma);
    return;
}
//exercicio-004
const numTex = {
    numA: 17,
    numB: 1.8
};
document.getElementById("exercicio-004").innerHTML = String(numTex.numA)+5+numTex.numB.toString();
//exercicio-005
const conc = {
    pal: 'palavra',
    num: 1981, 
    nome: 'Bruno',
    mon: 17805.5
};
document.getElementById("exercicio-005").innerHTML = `concatenando: ${conc.pal} com ${conc.num}`;
//exercicio-006

document.getElementById("exercicio-006").innerHTML = `Quantas letras tem o nome ${conc.nome}: ${conc.nome.length}<br>
                                                      Escrever o nome ${conc.nome} em caixa alta: ${conc.nome.toUpperCase()}<br>
                                                      Escrever o nome ${conc.nome} em caixa baixa: ${conc.nome.toLowerCase()}`;

document.getElementById("exercicio-007").innerHTML = `Formatar o número ${conc.mon}<br> 
                                                      A primeira formatação ${conc.mon.toFixed(2).replace('.',',')}<br>
                                                      A segunda formatação: ${conc.mon.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`;