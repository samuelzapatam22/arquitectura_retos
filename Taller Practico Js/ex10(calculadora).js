let number1,number2,opcion
number1=parseFloat(prompt("Ingrese un numero"))
number2=parseFloat(prompt("Ingrese otro numero"))
opcion=parseInt(prompt("¿Que operacion desea realizar?. 1.Suma, 2.Resta, 3.Multiplicacion, 4.Division"))
switch(opcion){
    case 1: alert("El Resultado de la Suma es "+suma(number1,number2))
    break;
    case 2: alert("El Resultado de la Resta es "+resta(number1,number2))
    break;
    case 3: alert("El Resultado de la Multiplicacion es "+multiplicacion(number1,number2))
    break;
    case 4: alert("El Resultado de la Division es "+division(number1,number2))
    break;
}
function suma(n1,n2){
    return n1 + n2
}
function resta(n1,n2){
    return n1 - n2
}
function multiplicacion(n1,n2){
    return n1 * n2
}
function division(n1,n2){
    if(n2 === 0){
        alert("No se pueden realizar Divisiones por 0")
    }else{
        return n1 / n2
    }
    return
}