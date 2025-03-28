function calcularFactorial (numero) {
    if (numero ==1){
        return 1
    }
    else if (numero < 0){
        return console.log ("El numero es negativo");
    }
    else(numero > 1)
        return numero *calcularFactorial(numero-1);
    
}

console.log(calcularFactorial(4))