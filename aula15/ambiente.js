let num = [5, 8, 2, 9, 3]
num.sort()
//num[3] = 6 => substui o elemento da posição 3 pelo numero 6.
//num.push(1) => acrescenta um numero e uma posição ao final da array.
//num.length => informa o comprimento.
//num.sort() => colo os elementos em ordem crescente.
/*num.sort()
console.log(`Nosso vetor é o ${num}.`);
console.log(`O primeiro valor do vetor é ${num[0]}`)*/
console.log(num)
let p = num.indexOf(7)
if(p == -1){
    console.log('Valor não encontrado!')
} else {
    console.log(`O valor 9 está na posição ${p}`)
}

//for(let pos = 0; pos < num.length; pos++){
//    console.log(`A posição ${pos} tem o valor ${num[pos]}.`)
//}
// o uso in em for só feito em objetos
for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}.`)
}

