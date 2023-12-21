let month
do{
month = parseInt(prompt("ingrese un numero entre 1 y 12, segun el Mes que desee"))
}while(month < 1 || month > 12 )
switch (month){
    case 1: alert("El Mes Es Enero y sus signos son Capricornio-Acuario")
    break;
    case 2: alert("El Mes Es Febrero y sus signos son Acuario-Piscis")
    break;
    case 3: alert("El Mes Es Marzo y sus signos son Piscis-Aries")
    break;
    case 4: alert("El Mes Es Abril y sus signos son Aries-Tauro")
    break;
    case 5: alert("El Mes Es Mayo y sus signos son Tauro-Geminis")
    break;
    case 6: alert("El Mes Es junio y sus signos son Geminis-Cancer")
    break;
    case 7: alert("El Mes Es Julio y sus signos son Cancer-Leo")
    break;
    case 8: alert("El Mes Es Agosto y sus signos son Leo-Virgo")
    break;
    case 9: alert("El Mes Es Septiembre y sus signos son Virgo-Libra")
    break;
    case 10: alert("El Mes Es Octubre y sus signos son Libra-Escorpio")
    break;
    case 11: alert("El Mes Es Noviembre y sus signos son Escorpio-Sagitario")
    break;
    case 12: alert("El Mes Es Diciembre y Sus signos son Sagitario-Capricornio")
    break;
}
