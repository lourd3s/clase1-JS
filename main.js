let miEdad = 35;
let miNombre = "Lourdes";

console.log("mi nombre es " + miNombre + " y tengo " + miEdad + " años ");

let nombre = prompt("Ingresa tu nombre");
let apellido = prompt("Ingresa tu apellido");
let edad = Number(prompt("Ingresa tu edad"));

let alerta = alert("Estimado/a " + nombre + " " + apellido + ", usted tiene " + edad + " años");

if (nombre =="") {
alert("Nombre no ingresado");
    }
 // es decir que si no coloca el nombre tira alerta "nombre no ingresado"

if (edad >= 18) {
    console.log("Mayor de edad");
    alert("Bienvenido")
} else if (edad >= 150){
    alert("Record Guinnes");
} else {
    alert("No puede ingresar");
}

 // puedo adicionar otro condicional por ej:
 // && = significa and
 // if (edad >= 18 && edad < 50) {
 // alert("Tenes menos de 50")
 // también se puede usar el "or" = ||


 // valores falsy: string vacio, numero 0, Nan, undefined, null = van a dar false  