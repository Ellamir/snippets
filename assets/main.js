//Pidiendo primer número
var num1 = parseInt(prompt('Ingrese un número'));
//Pidiendo segundo número
var num2 = parseInt(prompt('Ingrese otro número'));
//Se comprueba si los números cumplen con el primer requisito (Ser mayor que 0)
if ((num1 != '') && (num1 >= 0) && (num2 != '') && (num2 >= 0 )) {
 //Si se cumple la primera condición se comprueba si cumplen con el segundo requisito (Ser diferentes entre sí)
    if (num1 != num2) {
        console.log(num1);
 
        console.log(num2);
        //suma de ambos números
        var suma = num1 + num2;
        console.log(suma);
        document.write(`La suma de los número es ${suma}`);
        //resta de ambos números
        var resta = num1 - num2;
        console.log(resta);
        document.write(`La resta de los número es ${resta}`);
        //división de ambos números
        var division = num1 / num2;
        console.log(division);
        document.write(`La división de los número es ${division}`);
        //multiplicación de ambos números
        var multiplica = num1 * num2;
        console.log(multiplica);
        document.write(`La multiplicación de los número es ${multiplica}`)
        //módulo de ambos números
        var modulo = num1 % num2;
        console.log(modulo);
        document.write(`El módulo de los números es ${modulo}`)
    } else {
        document.write('Los números ingresados son iguales.'); //Si no se cumple el segundo requisito aparecerá este mensaje.
    }
 //Si no se cumple el primer requisito aparecerá este mensaje.
} else {
    document.write('Ingresó un número negativo.');
}
