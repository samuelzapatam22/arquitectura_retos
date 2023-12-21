let edad,promedio
do{
edad=parseInt(prompt("Ingrese su edad"))
promedio=parseFloat(prompt("Ingrese su promedio"))
}while(edad < 1 || promedio < 0)
if (edad > 18){
    if(promedio >= 9){
        alert("Su Beca es de 200.000 pesos")
    }else{
        if(promedio >= 7.5){
            alert("Su Beca es de 100.000 pesos")
        }else{
            if(promedio >= 6 && promedio < 7.5){
                alert("Su Beca es de 50.000 pesos")
            }else{
                alert("Debes Estudiar mas.....")
            }
        }
    }
}else{
    if(promedio >= 9){
        alert("Su Beca es de 300.000 pesos")
    }else{
        if(promedio >= 8){
            alert("Su Beca es de 200.000 pesos")
        }else{
            if(promedio >= 6 && promedio < 8){
                alert("Su Beca es de 100.000 pesos")
            }else{
                alert("Debes Estudiar mas.....")
            }
        }
    }
}

