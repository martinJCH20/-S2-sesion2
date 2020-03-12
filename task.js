//1) escriba una iteración de bucle que iterará de 0 a 20, para iteración, verificar si el número actual es par o impar e informar en pantalla ("el 4 es par") 
//2) Escriba una iteración de bucle que iterará de 0 a 10, por cada iteración del bucle multiplicar el numero por 9 y imprimir en pantalla el resultado, por ejemplo: "2 * 9 =18"
//3) Bonus: Utilice un bucle anidado para mostrar las tablas para cada multiplicador de 1 a 10 (100 es el resultado total).

//Ejercicio 1:
for(let i = 0; i <= 20; i++){
    if(i%2 === 0){
        console.log(`el ${i} es par`);
    }else{
        console.log(`el ${i} es impar`);
    }    
}

//Ejercicio 2:
let result = 0;
for(let i = 0; i <= 10; i++){
    result = i * 9;
        console.log(`${i} * 9 = ${result}`);
}

//Ejercicio 3:
let multiplicador = 1;

for(let multiplicador = 1; multiplicador <=10; multiplicador++){
    for(let i = 0; i <= 10; i++){
        let resultado = multiplicador * i;
        console.log(` ${multiplicador} * ${i} =  ${resultado}`);
    }
}