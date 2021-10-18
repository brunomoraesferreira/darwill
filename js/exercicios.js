//atividade-001
document.getElementById("atividade-001").innerHTML = "Ola Mundo!";
document.getElementById("atividade-001").style.color = "red";
//atividade-002
function pedirMostrarNome() {
    var x = window.prompt("Qual é o seu nome?");
    var y = window.alert("O seu nome é " + x);
    return;
}
//atividade-003
function somarDoisNumeros() {
    var x = Number(window.prompt("Digite um número: ")); 
    var y = Number(window.prompt("Digite outro número: "));
    var soma = x + y;
    window.alert("A soma dos valores é " + soma);
    return;
}
//atividade-004
const numTex = {
    numA: 17,
    numB: 1.8
};
document.getElementById("atividade-004").innerHTML = String(numTex.numA)+5+numTex.numB.toString();
//atividade-005
const conc = {
    pal: 'palavra',
    num: 1981, 
    nome: 'Bruno',
    mon: 17805.5
};
document.getElementById("atividade-005").innerHTML = `concatenando: ${conc.pal} com ${conc.num}`;
//atividade-006
document.getElementById("atividade-006").innerHTML = `Quantas letras tem o nome ${conc.nome}: ${conc.nome.length}<br>
                                                      Escrever o nome ${conc.nome} em caixa alta: ${conc.nome.toUpperCase()}<br>
                                                      Escrever o nome ${conc.nome} em caixa baixa: ${conc.nome.toLowerCase()}`;
//atividade-007
document.getElementById("atividade-007").innerHTML = `Formatar o número ${conc.mon}<br> 
                                                      A primeira formatação ${conc.mon.toFixed(2).replace('.',',')}<br>
                                                      A segunda formatação: ${conc.mon.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`;
//atividade-006
var v1 = 1981;
var v2 = 'brasília';
var v3 = ['a', 'Banana', 1];
