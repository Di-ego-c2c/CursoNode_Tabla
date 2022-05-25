 
const fs = require('fs'); // manejador de archivos , se le puede poner cualquier nombre pero por documentacion de node es recomendable asi 
                            // en fs tengo todo lo que necesito para grabar un archivo. 
                            //esta funcion esta centralizada, con el  fin de reutilizarla y tambien tiene un feedback  de cuando algo sale bien o sale mal 
 
const colors =require('colors');

colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
  });

 
const crearArchivo = async (base = 5, hasta = 10, listar) => {
    try{
        
        let salida = '';
        let consola = '';

        //Tabla de multiplicar 

        for(let i=1 ; i <= hasta; i++){
            consola += `${base} x ${i} = ${base * i}\n`
            salida += `${base} ${'x'.red} ${i} ${'='.red} ${base * i}\n`; 
        }
        //Imprimir en pantalla 
        if(listar == true){

            console.log("=========================".info); 
            console.log ('tabla del'.info, colors.blue.underline(base)); 
            console.log ('========================'.info);

            console.log (salida);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, consola);


        return (`tabla-${base}.txt creado !!`) // la salida de la promesa debe ser el nombre del archivo. 
           
        // reject(`hubo un ERROR al crear la tabla-${base}.txt`)


     }catch(err){
        throw err;

    }

        
   
 }

 /* Esta funcion que se acaba de crear es privada , es decir, que solo se ve dentro del archivo.
  Para poder usarlo  en otros archvos del  proyecto es necesatio exportarlo*/

  module.exports = { // module.exports hace que la funcion "crearArchivo" de nuestro archivo multiplacar.js se pueda exportar  e importar en otros archivos. 
      crearArchivo
  } 
//crearArchivo: crearArchivo// esto es una redundancia 

// con las llaves {} indicamos que lo que queremos exportar es una propiedad, entonces crearArchivo es un objeto  
//module es un objeto global de node. 
