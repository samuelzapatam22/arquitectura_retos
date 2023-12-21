let descuento,objeto
alert("Ingrese el objeto que desea comprar")
objeto=parseInt(prompt("1. Carro o Moto, 2. Bicicleta o Patineta, 3. Scooter Electrico"))
switch(objeto){
    case 1: descuento = 15
            alert("El descuento sera del "+descuento+" %")
            break;
    case 2: descuento = 10
            alert("El descuento sera del "+descuento+" %")
            break;
    case 3: descuento =  5
            alert("El descuento sera del "+descuento+" %")
            break;
}