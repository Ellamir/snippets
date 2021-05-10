// ejercicio 2, operaciones con numeros diferentes distintos de 0

    //Pidiendo primer número
    var num1 = parseInt(prompt('Ingrese un número entero, mayor a 0'));
    //Pidiendo segundo número
    var num2 = parseInt(prompt('Ingrese un segundo número entero, mayor a 0'));
    //Se comprueba si los números cumplen con el primer requisito (Ser mayor que 0)
    if ((num1 != '') && (num1 >= 0) && (num2 != '') && (num2 >= 0 )) {
    //Si se cumple la primera condición se comprueba si cumplen con el segundo requisito (Ser diferentes entre sí)
        if (num1 != num2) {
            console.log(num1);
            console.log(num2);
            // imprime numeros recibidos
            document.write(`Dados los números ${num1} y ${num2},<br>`);
            //suma de ambos números
            var suma = num1 + num2;
            console.log(suma);
            document.write(`La suma de ambos es ${suma} <br>`);
            //resta de ambos números
            var resta = num1 - num2;
            console.log(resta);
            document.write(`La resta ${num1} - ${num2} es ${resta} <br>`);
            //división de ambos números
            var division = num1 / num2;
            console.log(division);
            document.write(`La división de ${num1} / ${num2}  es ${division} <br>`);
            //multiplicación de ambos números
            var multiplica = num1 * num2;
            console.log(multiplica);
            document.write(`La multiplicación de ambos números es ${multiplica} <br>`)
            //módulo de ambos números
            var modulo = num1 % num2;
            console.log(modulo);
            document.write(`El módulo de los números es ${modulo} <br>`)
        } else {
            document.write('Los números ingresados son iguales.'); //Si no se cumple el segundo requisito aparecerá este mensaje.
        }
    //Si no se cumple el primer requisito aparecerá este mensaje.
    } else {
        document.write('Ingresó un número negativo.');
    }

// ejercicio 3 - celcius a fahrenheit y a kelvin
    var celcius = parseFloat(prompt('Ingrese grados Celcius'));
    var farenheit=(1.8*celcius)+32
    document.write(`<p>El valor de ${celcius} Celcius en Farenheit es ${farenheit}</p>`);
    
    var celcius = parseFloat(prompt('Ingrese grados Celcius'));
    var kelvin=(celcius+273.15)
    document.write(`<p>El valor de ${celcius} Celcius en Kelvin es ${kelvin}</p>`);

// ejercicio 4, pedir cantidad de días e indicar años, semanas y días
    var dias =parseFloat(prompt('Ingrese una cantidad de días'))
    var years=Math.floor(dias/365)
    var weeks = Math.floor((dias%365)/7);
    var days = Math.floor (((dias%365)%7)/1);
    document.write(`<p>${dias} equivalen a ${years} años, ${weeks} semanas y ${days} días</p>`)

// ejercicio 5 - suma y promedio de 5 numeros
    var num1 = parseInt(prompt('Ingrese un número'));
    var num2 = parseInt(prompt('Ingrese un segundo número'));
    var num3 = parseInt(prompt('Ingrese un tercer número'));
    var num4 = parseInt(prompt('Ingrese un cuarto número'));
    var num5 = parseInt(prompt('Ingrese un quinto número'));
    var suma=(num1+num2+num3+num4+num5);
    var promedio=(suma/5);
    document.write(`<p>Dados los números ${num1}, ${num2}, ${num3}, ${num4} y ${num5},<br> la suma de todos es ${suma} y el promedio ${promedio}</p>`);
