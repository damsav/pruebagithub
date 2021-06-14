var nombre = "";
while (nombre == "")  {
    nombre = prompt("Ingrese el nombre del alumno");
}

console.log(nombre);
var total = 0;
for (let i = 0; i < 3; i++) {
    var nota = Number(prompt("Ingrese Nota"));
    total = total + nota ;    
}

alert("El promedio de las notas del alumno " + nombre + " es de : " + total/3);