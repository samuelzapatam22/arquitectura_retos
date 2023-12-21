let peso,altura
do{
peso=parseFloat(prompt("ingrese su peso (en kg)"))
altura=parseFloat(prompt("ingrese su altura (en metros)"))
}while(peso < 1 || altura < 1)
alert("Su indice de masa corporal (IMC) es "+imc(peso,altura))
function imc(peso,altura){
    return peso /(altura * altura) 
}
