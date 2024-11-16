const ej1 = document.querySelector(".ejercicio1")
const ej2 = document.querySelector(".ejercicio2")
const ej3 = document.querySelector(".ejercicio3")
const ej4 = document.querySelector(".ejercicio4")
const ej5 = document.querySelector(".ejercicio5")

const buttons = document.querySelectorAll("button")

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
    const base = ej1.querySelector("#base").value
    const altura = ej1.querySelector("#altura").value
    const parrafo = ej1.querySelector(".resultado")
    
    const area = calcularAreaRectangulo(base,altura)
    const texto = `El área calculada según los datos ingresados es ${area} unidades cuadradas`;
    parrafo.textContent = texto;
    
    console.log("Resultados del ejercicio 1:")
    console.log(texto)
    console.log("------------------------------------------------")
    console.log("")
}

function calcularAreaRectangulo(base,altura) {
    return base*altura;
}



////////////////////////////////Ejercicio 2////////////////////////////////
function ejercicio2(){
    const frase = ej2.querySelector("#frase").value;
    const parrafo = ej2.querySelector(".resultado")
    
    const cantidadPalabras = contarPalabras(frase);
    const texto = `La frase "${frase}" tiene un total de ${cantidadPalabras} palabras`;
    parrafo.textContent = texto;
    console.log("Resultados del ejercicio 2:")
    console.log(texto)
    console.log("------------------------------------------------")
    console.log("")
}

function contarPalabras(frase){
    if(frase.length){return frase.trim().split(" ").filter(palabra=>palabra != "").length}
    return 0;
}


////////////////////////////////Ejercicio 3////////////////////////////////
function ejercicio3(){
    const frase = ej3.querySelector("#frase").value;
    const parrafo = ej3.querySelector(".resultado");

    const invertida = invertirFrase(frase)
    const texto = `La frase "${frase}" invertida queda "${invertida}"`;
    parrafo.textContent = texto;
    console.log("Resultados del ejercicio 3:")
    console.log(texto)
    console.log("------------------------------------------------")
    console.log("")
}

function invertirFrase(frase) {
    return frase.split("").reverse().join("");
}



////////////////////////////////Ejercicio 4////////////////////////////////
function ejercicio4(){
    const frase = ej4.querySelector("#frase").value;
    const parrafo = ej4.querySelector(".resultado");

    const texto = `La frase "${frase}"  ${resultado = esPalindromo(limpiarFrase(frase))? "es": "no es "} palindromo`;
    parrafo.textContent = texto;
    console.log("Resultados del ejercicio 4:")
    console.log(texto)
    console.log("------------------------------------------------")
    console.log("")
}

function esPalindromo(frase) {
    console.log(frase)
    for (let index = 0; index < Math.floor(frase.length/2); index++) {
        if(frase[index]!=frase[frase.length -index -1]){
            return false
        }
    }
    return true
}

function limpiarFrase(frase){
    return frase.replace("á","a").replace("é","e").replace("í","i").replace("ó","o").replace("ú","u").trim().split("").filter(palabra=>palabra != " ");
}



////////////////////////////////Ejercicio 5////////////////////////////////
function ejercicio5(){
    const parrafo = ej5.querySelector(".resultado");
    const edad = prompt("Ingrese la edad de su perro");
    const texto = `La edad canina de su perro es ${7*edad} años`
    parrafo.textContent = texto;
    console.log("Resultados del ejercicio 5:")
    console.log(texto)
    console.log("------------------------------------------------")
    console.log("")
}

