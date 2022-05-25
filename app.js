// En node  ya vienen algunas caracterisiticas instalas 
//file sistem es una caracteristica  de Node  para carpetas  y directorios 

//requerir paquetes 

const {crearArchivo} = require('./helpers/multiplicar');// se usa desestructuracion  
                                           // las direciones que se colocan en require es la encargada de regresarme la funcion u objeto 
const argv =require('./config/yargs');

const colors = require('colors');

console. clear (); // limpio la consola terminal. 


//comparacion  entre process.argv  y argv de yargs

// console.log(process.argv);

/* 
console.log(argv);

console.log ('base:yargs', argv.base);
console.log ('hasta:yags ', argv.hasta);
console.log ('listar:yargs', argv.listar); 
 */



//process.argv: captura en la terminal lo escribimos en ella cuando le damos un valor que queremos que reciba nuestra aplicacion. 
//Ejemplo: node app --base=5

// este metodo envia un arreglo con tres elementos , el primero es la ruta donde se instalo node de forma global, el segundo es la ruta donde 
// esta nuestra aplicacion y la tercera viene siendo el valor enviado, ejemplo : '--base=5' 

//explicacion educativa de como se extrae un valor por mdedio de desestructuracion de arreglos (en este caso es el tercer elemento) 

// para utilizar el valor que  mando por la consola desestructuramos el arreglo que se muestra en la terminal ,

/*
const [,,arg3 = 'base=5'] = process.argv;                                                                             
            //esto se asigna por defecto('base=5') <-------------------------------------------------------------------
const [,base]= arg3.split('=');                                                                                   //  |
console.log (base);                                                                                               //  |   
                                                                                                                   // |       
*/                                                                                                                 // |     
                                                                                                                   // |
//cuando se realiza desestructuracion y en la linea de comando (terminal) no envio  ningun valor,  me sale undefined. |
// Para evitar que este undefined, se declara un volor por defecto en caso  de no mandar nada por terminal. -----------


//para extrar este valor de la linea d comando, se xtreaen como si fuera explode en php,desde la variable arg3 donde
// argumento es  

//console.log(arg3);

// const  base = 3; 


/* 
fs.writeFile (`tabla-${base}.txt`, salida , (err)=>{

    if(err) throw err;  //  para poder ver cuando se genera un error, lo podemos ver cuando ponemos permisos de solo lectura en la carpeta donde se almacenan los archivos. 

    console.log(`tabla-${base}.txt creado`)
}); 

*/


// otra forma de crear  el codigo y que nos permita estructurar nuestro codigo de forma mas simple  es de la siguiente forma

 
crearArchivo(argv.base, argv.h, argv.listar)
    .then( nombreArchivo => console.log( nombreArchivo.rainbow, '(Archivo Descargado)') )
    .catch (err => console.log(err) );





//PAQUETE PARA TRABAJAR CON VALORES DESDE LA CONSOLA, HACER DOCUMENTACION, CREAR COMANDOS... 
//ESTE ES EL PAQUETE YARGS 
//Importante, revisar la documentacion de yargs (el home page)!!

/*
VIDEO 35 CONFIGURACION DE YARGS

Pagina Oficial:

http://yargs.js.org/docs/#api-reference-optionkey-opt

Nos vamos a la parte de options(key-[opt])

 


*/
  
