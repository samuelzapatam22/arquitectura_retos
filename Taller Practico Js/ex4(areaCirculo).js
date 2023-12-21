let radio
do{
radio=parseFloat(prompt("Ingresa el Radio del cirulo"))
}while (radio < 1)
alert("Un circulo con Radio "+radio+" tiene un Area de: "+area(radio)+" cm2")
function area(radio){
    const pi = 3.14159265359
    return pi * (radio * radio)
}
