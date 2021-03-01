// matriz construida manual mente

// const matriz = [
//     "Willmer",
//     41,
//     true,
//     ()=>{
//         let data = 2 + 2;
//         return `${data}`;
//     },
//     8%2,
//     [
//         [
//             "Txllagts",
//             "andrea"
//         ]
//     ]
// ];

// console.log(matriz[5][0][1]);

//Declarar matrices perfectas

const nro = 10;
let array1 = new Array(nro);
for (let i = 0; i < nro; i++) {
    array1[i] = new Array(nro).fill(null);
}
array1[0][0] = 'Willmer';
array1[1][1] = 'Funeme';
array1[2][2] = 41;
array1[3][3] = false;
array1[3][3] = "CL 103 # 13 13".toLowerCase;


console.log(array1);

//Rellenar array

let array2 = new Array(5).fill(null);
array2.fill('Willmer',1,4);
console.log(array2)

//Otra manera de rellenar array
let array3 = new Array(5).fill(()=>{return `USUARIO NO ENVIO NADA`;});
array3.fill('Willmer',1,4);

let id = 3;
if(typeof(array3[id])!="function"){
    console.log(array3[id]);
}else{
    console.log(array3[id]());
}

//LIBRERÍA MATEMÁTICA - Métodos matemáticos
let RaizCuadrada1 = Math.sqrt(9); //Raiz cuadrada de 9
console.log(RaizCuadrada1); //Valor esperado = 3
let RaizCuadrada2 = Math.sqrt(1_2); //Raiz cuadrada de 1/2
console.log(RaizCuadrada2); //Valor esperado = ?
let RaizCubica = Math.cbrt(81); //Raiz cúbica de 81
console.log(RaizCubica); //Valor esperado = 9
let potencia = Math.exp(2);
console.log(potencia); //Valor esperado = ?
let NroMayor = Math.max(1,4,2,6,9,3,2);
console.log(NroMayor); //Valor esperado = 9
let NroMenor = Math.min(1,4,2,6,9,3,2);
console.log(NroMenor); //Valor esperado = 9
let VrAbsoluto = Math.abs(-5); 
console.log(VrAbsoluto); //Valor esperado = 5
let SignoDelNumero = Math.sign(-5); //1 es positivo y -1 es negativo
console.log(SignoDelNumero); //Vr esperado = -1
let e_a_la_X = Math.exp(1); // eleva e (número de euler) a la X
console.log(e_a_la_X); //Vr esperado = 2.718281828459045
let e_a_la_X_Menos_Uno = Math.expm1(1);  // eleva e (número de euler) a la X, menos uno
console.log(e_a_la_X_Menos_Uno); //Vr esperado = 1.718281828459045
let X_a_la_Y = Math.pow(2, 10); // Base = 1er numero. Potencia = 2o numero
console.log(X_a_la_Y); //Vr esperado = 1024

let aleatorio = Math.random()*100;
document.write(" Numero aleatorio <br>"+aleatorio.toString());
document.write("<br> Redondear despues de 5<br>"+Math.round(aleatorio));
document.write("<br> Redondear antesde de 5<br>"+Math.floor(aleatorio));
document.write("<br> Tomar el numero entero<br>"+Math.trunc(aleatorio));

//Constantes de Math
console.log(Math.E);        //Devuelve el numero de Euler (e)
console.log(Math.LN2);      //Calcula logaritmo natural en base 2
console.log(Math.LN10);     //Calcula logaritmo en base 10
console.log(Math.LOG2E);    //Calcula logaritmo en base 2 de e
console.log(Math.LOG10E);   //Calcula logaritmo en base 10 de e
console.log(Math.PI);       //Calcula valor de Pi
console.log(Math.SQRT1_2);  //Calcula raiz de 1/2
console.log(Math.SQRT2);    //Calcula raiz de 2