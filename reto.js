/*Declara 2 variables numéricas (con el valor que desees), he indica cual es mayor
de los dos. Si son iguales indicarlo también. Ves cambiando los valores para
comprobar que funciona. */
var num1 = 11;
var num2 = 10;

if(num1 > num2){
    console.log('El numero ', num1 ,' es Mayor que ', num2);
}
else if(num1 == num2){
    console.log('Son Iguales');
}
/*Declara un String que contenga tu nombre, después muestra un mensaje de
bienvenida por consola. Por ejemplo: si introduzco “Fernando”, me aparezca
“Bienvenido Fernando”. */

var nombre = 'ISAAC'
console.log('Bienvenido ', nombre);

/**Modifica la aplicación anterior, para que nos pida el nombre que queremos
introducir (recuerda usar prompt). */

var nombre = prompt('Introduce tu nombre');
console.log('Bienvenido ', nombre);

/**Haz una aplicación que calcule el área de un círculo (pi*R2). El radio se pedirá
por teclado (recuerda pasar de String a double con parseDouble). Usa la
constante PI. */

let radio = prompt("Podria facilitarme el radio del circulo");
const pi = 3.14;
let area = pi * (radio ** 2);

console.log("El area es: ", area);

/**Lee un número por teclado e indica si es divisible entre 2 (resto = 0). Si no lo es,
también debemos indicarlo. */

let divisor = 2;
if (divisor%2==0){
    console.log("El numero "+divisor+" es divisible entre 2");
}else{
    console.log("El numero "+divisor+" no es divisible entre 2");
}

/**Lee un número por teclado que pida el precio de un producto (puede tener
decimales) y calcule el precio final con IVA. El IVA sera una constante que sera
del 21% */

let precioProducto = prompt('Introduzca el precio');
const IVA = 0.21;
let precioFinal = precioProducto * IVA;

console.log('El precio final del producto es:',precioFinal);

/**Muestra los números del 1 al 100 (ambos incluidos). Usa un bucle while. */
let numeros = 100;
let index = 0;
while(numeros > 0){
    ++index;
    console.log('Mostrando el numero ', index);
    numeros -= 1;
}

/**Haz el mismo ejercicio anterior con un bucle for. */

for(var i = 1; i <= 100; i++){
    console.log('Mostrando los numeros ', i);
}

/**Muestra los números del 1 al 100 (ambos incluidos) divisibles entre 2 y 3. Utiliza
el bucle que desees. */

for(var i = 1; i <= 100; i++){
    if(i%2==0 || i%3==0 ){
        console.log('la division es ',i);
    }
}

/**Crea una aplicación que nos pida un día de la semana y que nos diga si es un día
laboral o no. Usa un switch para ello. */
var dias = prompt('Introduce el dia de la semana');
switch(dias){
        case "lunes":
        console.log('Dia laboral');
        break;
        case "martes":
        console.log('Dia laboral');
        break;
        case "miercoles":
        console.log('Dia laboral');
        break;
        case "jueves":
        console.log('Dia laboral');
        break;
        case "viernes":
        console.log('Dia laboral');
        break;
        case "sabado":
        console.log('Dia laboral');
        break;
        case "domingo":
        console.log('No, es descanso o festivo');
        break;
}
/**Escribe una aplicación con un String que contenga una contraseña cualquiera.
Después se te pedirá que introduzcas la contraseña, con 3 intentos. Cuando
aciertes ya no pedirá más la contraseña y mostrará un mensaje diciendo
“Enhorabuena”. Piensa bien en la condición de salida (3 intentos y si acierta sale,
aunque le queden intentos). */

let contra = 'laptop1';
var condición = false;

for (i = 0; i < 3 && !condición; i++){
        contra = prompt('Introduce tu contraseña');

        if(password(contra)){
            console.log('Enhorabuena !!.');
            condición=true;
        }
}
//---------------------------------------------
