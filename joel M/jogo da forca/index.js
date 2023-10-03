const palavraAleatoria = "bicicleta"
const palavraspliteed = palavraAleatoria.split("")
console.log(palavraSpliteed)

let tentativas = 6
const letrasPressionada = "i"

const letrasReveladas = Array(palavraspliteed.length).fill("")

function encontrarLetra(letra){
    console.log(`Letra Pressionada: ${letra}`)
    let encontrada = falsa

    for (let index = 0; index < array.length; index++) {
        const element = palavraSpliteed[index];
        if (element == letra){
            letrasReveladas[index] = letra;
        }
        
    }
    if (encontrada == falsa){
        tentativas --;
    }

}

console.log(letrasReveladas)
encontrarlÇetra("i")
console.log(`tentativas: ${tentativas}`)


console.log(letrasReveladas)
encontrarlÇetra("a")
console.log(`tentativas: ${tentativas}`)


console.log(letrasReveladas)
encontrarlÇetra("t")
console.log(`tentativas: ${tentativas}`)


console.log(letrasReveladas)
encontrarlÇetra("u")
console.log(`tentativas: ${tentativas}`)