let numero = 8

console.log(esPrimo(numero));

function esPrimo(num){
    let cont = 0
    for (let i = 0; i <= num ; i++) {
        if (num == 0){
            cont = cont + 1 
            //cont ++
        }
    }
    if (cont ==2){
        return true
    }
    return false
}