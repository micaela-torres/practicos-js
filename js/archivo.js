///SABER MI PROMEDIO

const conductamuybuena = 10;
const conductabuena = 7;
const conductamala = 4;

let alumno = document.getElementById('idname')
let nota1 = document.getElementById('idnota1')
let nota2 = document.getElementById('idnota2')
let nota3 = document.getElementById('idnota3')
let nota4 = document.getElementById('idconducta')
const botonpromedio = document.getElementById('idbotonpromedio')


botonpromedio.addEventListener('click', () => {
   
   do {
      alumno =  document.getElementById('idname').value;
      nota1 = + document.getElementById('idnota1').value; 
      nota2 = + document.getElementById('idnota2').value;
      nota3 = + document.getElementById('idnota3').value;
      
   }while(isNaN(nota1) || isNaN(nota2) || isNaN(nota3));
    
      function promediofinal (nota1 , nota2, nota3){
         return (nota1 + nota2 + nota3)/3;
      } 
      alert ("El/la alumno/a " + alumno + " tiene un promedio de " + promediofinal(nota1 , nota2, nota3));
   
})

/*
do {
      alumno = document.getElementById('idname')
      nota1 = document.getElementById('idnota1') 
      nota2 = document.getElementById('idnota2')
      nota3 = document.getElementById('idnota3')
   }while(isNaN(nota1) || isNaN(nota2) || isNaN(nota3));
    
      function promediofinal (nota1 , nota2, nota3){
         return (nota1 + nota2 + nota3)/3;
      } 
      alert ("El/la alumno/a " + alumno + " tiene un promedio de " + promediofinal(nota1,nota2,nota3));
*/

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
const alumno6 = new Alumnos("6","Rivera","Juan","20","naturales")
const alumno7 = new Alumnos("7","Torres","Bruno","3","comunicacion")
