//VARIÁVEIS COMPOSTAS (ARRAY)

let pizzas = ['4 queijos, Frango com catupiry, Margerita, Palmito, Banana com Canela'];
console.log ('Menu de sabores: ' +pizzas)

//se eu quiser acrecentar um valor ao array
//1- verificamos o tamanho do array e adicionamos na posição "vazia" após a ultima
pizzas [5] = 'Peito de peru'

//caso se eu coloque um novo valor em uma posição que já está sendo ocupada, ele vai substituir

//posso usar um comando para adicionar automaticamente + 1 elemento dentro de um array na última posição de um array

pizzas.push('Peito de peru')

//adicionamento um valor para ficar automaticamente na primeira posição do array

pizzas.unshift('Bacon com Banana')

//tamanho de um array 
pizzas.length 
console.log(pizzas.length);

//chamar um array em ordem alfabética
console.log(pizzas.sort());

//mostrar um único elemento e a posição dele
console.log(pizzas[1]);

//colocando array dentro de um laço de repetição
for (let index = 0; index < pizzas.length; index += 1){
    console.log(pizzas[index]);
}

//removendo o último valor de um array
pizzas.pop()

//removendo o último item do array
pizzas.shift()

//procurando o indice de um item no array

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let indexOfTask = tasksList.indexOf('Reunião');
console.log(indexOfTask);
