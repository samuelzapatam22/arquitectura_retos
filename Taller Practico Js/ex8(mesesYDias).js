let month
do{
month = parseInt(prompt("ingrese un numero entre 1 y 12, segun el Mes que desee"))
}while(month < 1 || month > 12 )
switch (month){
    case 1: alert("El Mes 1 Es Enero y Tiene 31 Dias")
    break;
    case 2: alert("El Mes 2 Es Febrero y Tiene 28 Dias")
    break;
    case 3: alert("El Mes 3 Es Marzo y Tiene 31 Dias")
    break;
    case 4: alert("El Mes 4 Es Abril y Tiene 30 Dias")
    break;
    case 5: alert("El Mes 5 Es Mayo y Tiene 31 Dias")
    break;
    case 6: alert("El Mes 6 Es Junio y Tiene 30 Dias")
    break;
    case 7: alert("El Mes 7 Es Julio y Tiene 31 Dias")
    break;
    case 8: alert("El Mes 8 Es Agosto y Tiene 31 Dias")
    break;
    case 9: alert("El Mes 9 Es Septiembre y Tiene 30 Dias")
    break;
    case 10: alert("El Mes 10 Es Octubre y Tiene 31 Dias")
    break;
    case 11: alert("El Mes 11 Es Noviembre y Tiene 30 Dias")
    break;
    case 12: alert("El Mes 12 Es Diciembre y Tiene 31 Dias")
    break;
}
