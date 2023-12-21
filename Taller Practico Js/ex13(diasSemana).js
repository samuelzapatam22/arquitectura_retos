let dia
do{
dia = parseInt(prompt("Ingrese un numero del 1 al 7 segun el dia que desee"))
}while(dia < 1 || dia > 7)
switch (dia){
    case 1: alert("Lunes")
    break;
    case 2: alert("Martes")
    break;
    case 3: alert("Miercoles")
    break;
    case 4: alert("Jueves")
    break;
    case 5: alert("Viernes")
    break;
    case 6: alert("Sabado")
    break;
    case 7: alert("Domingo")
    break;
    
}