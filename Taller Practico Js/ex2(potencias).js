let number1, number2
number1=parseFloat(prompt("Ingrese un numero"))
number2=parseFloat(prompt("Ingrese otro numero"))
alert("El cuadrado de "+number1+" es "+cuadrado(number1)+" y El cuadrado de "+number2+" es "+cuadrado(number2))

function cuadrado(numero){
    return numero * numero
}
