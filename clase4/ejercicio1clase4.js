//Ejercicio 1: "Calculadora de Potencias"
//Implementa una función que calcule potencias usando recursividad.
//El programa debe:
//- Crear una función que reciba base y exponente
//- Usar recursividad para calcular la potencia
//- Manejar casos especiales (exponente 0, negativo)

let base1 = 2
let exponente1 = 4



function calcularPotencia(base,exponente){
    if (exponente = 0){
        return 1
    }
    if(exponente = 1){
        return base
    }
    else if(exponente > 1){
        return base * calcularPotencia(base, exponente - 1)
    }
    else(exponente < 0)

    return 1/(base * calcularPotencia(base, exponente - 1))
}