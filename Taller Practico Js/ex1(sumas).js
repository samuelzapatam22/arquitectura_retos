let num1, num2, suma
num1=parseFloat(prompt("Ingrese el primer numero"))
num2=parseFloat(prompt("Ingrese el segundo numero"))
suma= num1 + num2
if (suma > 0){
    alert("La suma es positiva (+): "+suma)

}else{
    if(suma < 0){
        alert("La suma es negativa (-): "+suma)
    }else{
        if (suma === 0){
            alert("La suma es igual a cero (0): "+suma)
        }
    }
}




