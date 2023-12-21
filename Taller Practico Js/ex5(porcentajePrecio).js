let price,percentage
do{
price=parseInt(prompt("Ingresa el valor de tu producto"))
percentage=parseFloat(prompt("¿que porcentaje del Precio anterior deseas conocer?"))
}while(price < 1 || percentage < 1)
alert("El "+percentage+"% de "+price+ " Es: "+porcentaje(price,percentage))

function porcentaje (price,porcentaje){
    return price * (porcentaje/100)
}
