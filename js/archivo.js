///SABER MI PROMEDIO
do {
    nota1 = parseFloat(prompt("Ingrese la nota numero 1")); 
    nota2 = parseFloat(prompt("Ingrese la nota numero 2"));
    nota3 = parseFloat(prompt("Ingrese la nota numero 3"));
}while(isNaN(nota3) || isNaN(nota2) || isNaN(nota3));

alert ((nota1 + nota2 + nota3) / 3);