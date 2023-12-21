let cantidad,precio,descuento
do{
cantidad=parseInt(prompt("ingrese la Cantidad de Huevos"))
}while(cantidad < 1)
precio = cantidad * 250
if (cantidad >= 1 && cantidad <= 100){
    descuento = precio - (precio * 0.03)
    alert("El total a pagar por "+cantidad+" Huevos, es: "+descuento+" Pesos")
}else{
    if (cantidad >= 101 && cantidad <= 200){
        descuento = precio - (precio * 0.05)
        alert("El total a pagar por "+cantidad+" Huevos, es: "+descuento+" Pesos")
    } else{
        if (cantidad >= 201 && cantidad <= 300){
            descuento = precio - (precio * 0.08)
            alert("El total a pagar por "+cantidad+" Huevos, es: "+descuento+" Pesos")
        }else{
            if (cantidad >= 301){
                descuento = precio - (precio * 0.1)
                alert("El total a pagar por "+cantidad+" Huevos, es: "+descuento+" Pesos")
            }
        }
    }
}