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
//Number.parseInt(), Number.parsefloat(), parseInt(), parseFloat(), Number().
