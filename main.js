window.alert("Informe 3 nomes e 3 ideades.");

let nome1 =prompt("Digite o 1° nome: ");
let idade1 =prompt("Qual idade?: ");


let nome2 =prompt("Digite o 2° nome: ");
let idade2 =prompt("Qual idade?: ");


let nome3 =prompt("Digite o 3° nome: ");
let idade3 =prompt("Qual idade?: ");

document.getElementById("info1").textContent = `Nome: ${nome1}.  Idade: ${idade1}.`;
document.getElementById("info2").textContent = `Nome: ${nome2}.  Idade: ${idade2}.`;
document.getElementById("info3").textContent = `Nome: ${nome3}.  Idade: ${idade3}.`;

var n1 = parseInt(idade1);
var n2 = parseInt(idade2);
var n3 = parseInt(idade3);

let media = parseInt((n1 + n2 + n3) / 3);


document.getElementById("result").textContent = `Media = ${media}.`;
