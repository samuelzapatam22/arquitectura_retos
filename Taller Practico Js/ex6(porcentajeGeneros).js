let hombres,mujeres,total
do{
hombres=parseInt(prompt("Ingrese la cantidad de hombres"))
mujeres=parseInt(prompt("Ingrese la cantidad de mujeres"))
}while(hombres < 1 || mujeres < 1)
total = hombres + mujeres
alert ("El porcentaje de hombres en el salon es "+porcentaje(hombres,total)+"% y el porcentaje de mujeres es "+porcentaje(mujeres,total)+"%")
function porcentaje(genero,total){
        return (genero/total)*100
}
