///SABER MI PROMEDIO

/*
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

alert ((nota1 + nota2 + nota3 + nota4) / 4); */

///AGREGANDO, ALUMNOS


class Alumnos{ 
   constructor (id , apellido , nombre , edad , curso){
      this.id = id
      this.apellido = apellido 
      this.nombre = nombre 
      this.edad = edad 
      this.curso = curso 
   }
}

const alumno1 = new Alumnos("1","Miranda","Sara","15","comunicacion")
const alumno2 = new Alumnos("2","Mcraly","Michelle","16","comunicacion")
const alumno3 = new Alumnos("3","Lopez","Irina","12","naturales")
const alumno4 = new Alumnos("4","Perez","Sebastian","18","naturales")
const alumno5 = new Alumnos("5","Alvarez","Benjamin","25","comunicacion")

const alumnos = [alumno1,alumno2,alumno3,alumno4,alumno5]
const profesores = []


console.log(alumnos)
console.log(alumnos.length);
alumnos.pop(alumnos);
console.log(alumnos.length);
alumnos.splice(0,2);
console.log(alumnos.length);
alumnos.push(alumno6 = new Alumnos("6","Rivera","Juan","20","naturales"))
alumnos.unshift(alumno7= new Alumnos("7","Torres","Bruno","3","comunicacion"))
console.log(alumnos)
