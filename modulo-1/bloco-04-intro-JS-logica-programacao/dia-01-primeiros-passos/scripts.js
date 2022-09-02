// VARIÁVEIS
let age = 20;
age = 23;
let comida = "feijão com calabresa";
//CONSTANTES
const name = "Danilo";
console.log(age);
console.log(comida);
console.log(name);

//EXERCICIOS DE FIXAÇÃO

// Criar uma constante e atribuir seu nome.
const myName = "Lizia";
console.log(myName);

// Criar uma constante para atribuir sua cidade natal.
const birthCity = "Imperatriz";
console.log (birthCity);

// Criar uma variável para atrivuir o ano qure você nasceu.
const birthYear = 1998;
console.log(birthYear);

//TIPOS PRIMITIVOS, TIPAGEM DINÂMICA E OPERAÇÕES ARITMÉTICAS

let movie = 'Avengers'; //string literal, tudo que for uma sequência de caracteres e que esteja entre ""
let score = 10; //number literal, números inteiros ou quebrados
let isValid = true //valor boleano, verdadeiro ou falso
let nam3; //undefined, variável indefinida 
let color = null; // valor nulo, e caso houver nescessidade, atribuir algum valor de acordoc com a nescessidade do código


//typeof me retorna o tipo do valor que foi atribuido para alguma variável

//OPERAÇÕES ARITMÉTICAS
let salary = 3500;
console.log (salary + salary) // console.log consegue executar alguma operação aritmética 
console.log (salary - salary); //subtração
console.log (salary * salary); //multiplicação
console.log (salary / salary); //divisão
console.log (3 ** 3) //exponenciação

++ //acrescentar
salary++;
console.log(salary);
-- //decrementar
comsole.log (salary)

//EXERCÍCIOS DE FIXAÇÃO

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

//imprima no console o tipo de variáveis acima
console.log(typeof patientId)
.
. 
. 

//crie uma constante e uma variável e atribua valores para elas
const base = 5;
const height = 8;

//crie uma constante que receba o resultado da multiplicação das constantes que você criou
const area = base * height

//crie uma constante para atribuir a ela a soma de todos os lados de um retângulo
let lado1 = 5;
let lado2 = 10;
let lado3 = 9;
let lado4 = 11;
const perimeter = lado1 + lado2 + lado3 + lado4;
console.log (perimeter);

//CONDIÇÕES IF E ELSE

//if - se
//else -senão

// if (condição){
    //codigo
//}else if (outraCondição){
    //outra consição
//}
//else{
    //codigo
//}


let horarioAula = 21;
if (horarioAula >= 14 && horarioAula < 14.40){
    console.log ("Inicio da aula")
}
else if (horarioAula >= 16.30 && horarioAula < 17.50) {
    console.log ("Metade da aula")
}
else if (horarioAula >= 19.30 && horarioAula < 20){
    console.log ("Aula ta acabando")
}
else{
    console.log ("Aula acabou")
}

//EXERCÍCIOS DE FIXAÇÃO

//crie uma lógica para saber se a pessoa foi aprovada ou reprovada em um teste.

const nota = 50;
if (nota >= 80){
    console.log ('Parabéns, voce foi aprovado!');
}else if (nota < 80 && nota >= 60){dia-01-primeiros-passos
    console.log ('Você está na nossa lista de espera.');
}else if (nota < 60){
    console.log ('Você foi reprovado');
}

//EXERCICIOS COM OPERADORES LÓGICOS

//crie uma lógica para representar os horários diários de uma pessoa se alimentar

const currentHour = 12;
let message; 
if (currentHour >= 22){
    message = 'Poder comer ainda!'
}else if (currentHour >= 18 && currentHour < 22){
    message = 'Hora de comer!';
}else if (currentHour >= 14 && currentHour < 18){
    message = 'Café da tarde';
}else if (currentHour >= 11 && currentHour < 14){
    message = 'Hora do almoço!';
}else if (currentHour >= 8 && currentHour < 10){
    message = 'Hora do café da manhã!'
}
console.log (message);

//exemplo sobre os dias da semana 

let weekDay = 'sábado'
if (weekDay == 'segunda-feira' || weekDay == 'terça-feira' || weekDay == 'quarta-feira' || weekDay == 'quinta-feira' || weekDay == 'sexta-feira'){
    console.log ('mais um dia de aprendizado.')
}else{
    console.log ('FINALMENTE, descanso merecido.')
}

//SWITCH E CASE 

let semaforo = "pisca";
let acao ;

switch (semaforo){
    case "vermelho":
        acao = 'Pare!'
        console.log (acao)
        break;
    case "amarelo":
        acao = 'Atenção, semáforo prestes a fechar'
        console.log (acao)
        break;
    case "verde":
        acao = 'Pode seguir.'
        console.log (acao)
        break;
    default:
        console.log ('semáforo intermitente.')
}

//logica caso uma pessoa seja aprovada, reprovada ou se está na lista de espera

let aproRepro = 'reprovada';
switch (aproRepro) {
    case 'aprovada':
        console.log ('Você foi aprovada.')
        break
    case 'lista':
        console.log ('Você está na lista de espera.')
        break
    case 'reprovada':
        console.log ('Você foi reprovado.')
        break
    default:
        console.log ('Não se aplica')
}

//EXERCICIOS QUE EMGLOBAM TODOS OS ASSUNTOS VISTOS ATÉ AGORA

//faça cinco porgramas, um para cada operação básica

const a = 10;
const b = 15;
console.log (a + b);
console.log (a - b);
console.log (a * b)
console.log (a / b);
console.log (a % b); 

//programa para retornar o maior de dois números

const a = 10
const b = 20
if (a > b){
    console.log ('a é maior que, b')
}else{
    console.log ('b, é maior que a')
}

//programa para retornar o maior de tres números

const a = 45
const b = 5
const c = 52
let maior ;

if (a > b && a > c){
    maior = a
}else if (b > c){
    maior = b
}else{
    maior = c
}
console.log (maior)

//programa para identificar se os valores de três constantes formam um triângulo, caso algum valor seja negativo o programa deve retornar 'número inválido'.

const a = 100
const b = 30
const c = 50
let result;
if (a <= 0 || b <= 0 || c <= 0){
    console.log ('número inválido')
}
 else if (a + b + c === 180){
    result = true
    console.log (result)
}else{
    result = false;
    console.log (result);
}

//Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.

const a = 21
const b = 81
const c = 51
let result;

if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0){
    result = true
    console.log (result)
}else{
    result = false
    console.log (result)
}





