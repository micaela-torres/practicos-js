///SABER MI PROMEDIO

const conductamuybuena = 10;
const conductabuena = 7;
const conductamala = 4;

do {
    nota1 = parseFloat(prompt("Ingrese la nota examen 1")); 
    nota2 = parseFloat(prompt("Ingrese la nota examen 2"));
    nota3 = parseFloat(prompt("Ingrese la nota examen 3"));
    nota4 = prompt("Ingrese conducta. Muy Buena, Buena o Mala").toLowerCase();
     if (nota4 === "muy buena"){
        nota4 = conductamuybuena;
     }else if (nota4 === "buena"){
        nota4 = conductabuena;
     }else if (nota4 === "mala"){
        nota4 = conductamala;
     }else{
        alert ("Ingrese una conducta valida")
     }

     

}while(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4));

alert ((nota1 + nota2 + nota3 + nota4) / 4);
