// Funcion para realizar operaciones
function realizarOperaciones(num1,num2,operacion){
    if (operacion == "+"){
        return num1 + num2
    }else if (operacion == "-"){
        return num1 - num2
    }else if (operacion == "*"){
        return num1 * num2
    }else if (operacion == "/"){
        if (num2 != 0){
            return num1 * num2
        }else{
            console.log('No se puede dividir entre cero');
        }
    }else{
        console.log('No se puede efectuar la operación, revise los datos ingresados');
    }
}
