/* IDENTIFICACIÓN DE LOS DISTINTOS EJERCICIOS, CONTENIDOS POR UN DIV CADA UNO */
const ej1 = document.querySelector(".ejercicio1")
const ej2 = document.querySelector(".ejercicio2")
const ej3 = document.querySelector(".ejercicio3")
const ej4 = document.querySelector(".ejercicio4")
const ej5 = document.querySelector(".ejercicio5")

/* IMPORTACION DE TODOS LOS BOTONES */
const buttons = document.querySelectorAll("button")

/* LISTENERs DE LOS BOTONES Y Y LLAMADA A LAS FUNCIONES CORRESPONDIENTES */
buttons.forEach(button=> {
    button.addEventListener("click", ()=>{
        switch (button.id) {
            case "1":
                ejercicio1();
                break;
            case "2":
                ejercicio2();
                break;
            case "3":
                ejercicio3();
                break;
            case "4":
                ejercicio4();
                break;
            case "5":
                ejercicio5();
                break;
            
            default:
                break;
        }
    })
});




////////////////////////////////Ejercicio 1////////////////////////////////
function ejercicio1(){
    /* IDENTIFICACIÓN DE LOS ELEMENTOS DEL EJERCICIO */
    const base = ej1.querySelector("#base").value
    const altura = ej1.querySelector("#altura").value
    const parrafo = ej1.querySelector(".resultado")
    
    const area = calcularAreaRectangulo(base,altura)
    const texto = `El área calculada según los datos ingresados es ${area} unidades cuadradas`;

    /* INSERCIÓN DE LA RESPUESTA EN EL DOCUMENTO */
    parrafo.textContent = texto;
    
    /* IMPRESIÓN DE LA RESPUESTA POR CONSOLA */
    console.log("Resultados del ejercicio 1:")
    console.log(texto)
    console.log("------------------------------------------------")
    console.log("")
}

function calcularAreaRectangulo(base,altura) {
    //Se devuelve el area del rectangulo, resultado de multiplicar base por altura
    return base*altura;
}



////////////////////////////////Ejercicio 2////////////////////////////////
function ejercicio2(){
    /* IDENTIFICACIÓN DE LOS ELEMENTOS DEL EJERCICIO */
    const frase = ej2.querySelector("#frase").value;
    const parrafo = ej2.querySelector(".resultado")
    
    const cantidadPalabras = contarPalabras(frase);
    const texto = `La frase "${frase}" tiene un total de ${cantidadPalabras} palabras`;

    /* INSERCIÓN DE LA RESPUESTA EN EL DOCUMENTO */
    parrafo.textContent = texto;

    /* IMPRESIÓN DE LA RESPUESTA POR CONSOLA */
    console.log("Resultados del ejercicio 2:")
    console.log(texto)
    console.log("------------------------------------------------")
    console.log("")
}

function contarPalabras(frase){
    // Si la extencion de la frase es > 0 se corta la misma por los espacios, se eliminan los espacios duplicados y se devuelve la cantidad de palabras resultante
    if(frase.length){return frase.split(" ").filter(palabra=>palabra != "").length}
    return 0;
}


////////////////////////////////Ejercicio 3////////////////////////////////
function ejercicio3(){
    /* IDENTIFICACIÓN DE LOS ELEMENTOS DEL EJERCICIO */
    const frase = ej3.querySelector("#frase").value;
    const parrafo = ej3.querySelector(".resultado");

    const invertida = invertirFrase(frase)
    const texto = `La frase "${frase}" invertida queda "${invertida}"`;

    /* INSERCIÓN DE LA RESPUESTA EN EL DOCUMENTO */
    parrafo.textContent = texto;
    console.log("Resultados del ejercicio 3:")
    console.log(texto)
    console.log("------------------------------------------------")
    console.log("")
}

function invertirFrase(frase) {
    // Se convierte la frase en un arreglo, se lo invierte y se lo retorna unido como una cadena
    return frase.split("").reverse().join("");
}



////////////////////////////////Ejercicio 4////////////////////////////////
function ejercicio4(){
    /* IDENTIFICACIÓN DE LOS ELEMENTOS DEL EJERCICIO */
    const frase = ej4.querySelector("#frase").value;
    const parrafo = ej4.querySelector(".resultado");

    // Se invocan las funciones de limpieza y verificación con la cadena convertida a minusculas para evitar es diferencia entre letras
    const texto = `La frase "${frase}"  ${resultado = esPalindromo(limpiarFrase(frase.toLowerCase()))? "es": "no es "} palindromo`;

    /* INSERCIÓN DE LA RESPUESTA EN EL DOCUMENTO */
    parrafo.textContent = texto;

    /* IMPRESIÓN DE LA RESPUESTA POR CONSOLA */
    console.log("Resultados del ejercicio 4:")
    console.log(texto)
    console.log("------------------------------------------------")
    console.log("")
}

function esPalindromo(frase) {
    // Se recorre la cadena hasta la mitad y se compara con su "opuesto" si es distinto, se interrumpe la iteración y se retorna falso
    for (let index = 0; index < Math.floor(frase.length/2); index++) {
        if(frase[index]!=frase[frase.length -index -1]){
            return false
        }
    }
    // Si la iteración no se vio interrumpida por el "return"(es decir, no se encontraron diferencias entre opuestos), se retorna verdadero
    return true
}

function limpiarFrase(frase){
    // Se devuelve una version limpia de la cadena: se eliminan acentos y espacios.
    return frase.replace("á","a").replace("é","e").replace("í","i").replace("ó","o").replace("ú","u").split("").filter(palabra=>palabra != " ");
}



////////////////////////////////Ejercicio 5////////////////////////////////
function ejercicio5(){
    /* IDENTIFICACIÓN DE LOS ELEMENTOS DEL EJERCICIO */
    const parrafo = ej5.querySelector(".resultado");
    let edad;
    do{
        // Se pide el ingreso de datos al usuario y se repite el proceso hasta que el dato ingresado sea correcto
        edad = prompt("Ingrese la edad de su perro, la misma debe ser un número positivo");
    }while(edad != Numero(edad) && edad < 0)

    
    
    const texto = `La edad canina de su perro es ${7*edad} años`

    /* INSERCIÓN DE LA RESPUESTA EN EL DOCUMENTO */
    parrafo.textContent = texto;
    
    
    /* IMPRESIÓN DE LA RESPUESTA POR CONSOLA */
    console.log("Resultados del ejercicio 5:")
    console.log(texto)
    console.log("------------------------------------------------")
    console.log("")
}

