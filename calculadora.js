const respuesta = document.getElementById('respuesta')
const btn = document.querySelector("button")

btn.addEventListener("click", solicitarNumeros)

// Funcion para realizar operaciones
function realizarOperaciones(num1,num2,operacion){
    if (operacion == "+"){
        return num1 + num2
    }else if (operacion == "-"){
        return num1 - num2
    }else if (operacion == "*"){
        return num1 * num2
    }else if (operacion == "/" && num2 != 0){
            return num1 / num2
    }else{
        alert('No se puede efectuar la operación, revise los datos ingresados');
    }
}

//Funcion para solicitar valores al usuario
function solicitarNumeros(){
    let operacion=''
    while(operacion != "salir"){
        operacion=prompt("Ingrese el simbolo de la operacion que desea realizar \n sumar: + \n restar: - \n multiplicar: * \n dividir: / \nPara terminar escriba: salir").toLowerCase()
        if (operacion == 'salir'){
            alert('Muchas gracias, ¡Hasta pronto!')
        }else if(operacion == '+'||operacion == '-'||operacion == '*'|| operacion == '/'){
            numero1=parseFloat(prompt("Digite el primer número: "));
            numero2=parseFloat(prompt("Digite el segundo número: "));
            let resultado = realizarOperaciones(numero1,numero2,operacion)
            alert(`El resultado de ${numero1} ${operacion} ${numero2} es : ${resultado}`);
            respuesta.textContent = `El resultado de ${numero1} ${operacion} ${numero2} es : ${resultado}`;
        }else{
            alert('Ingrese una opción valida!')
        }
    }
}

