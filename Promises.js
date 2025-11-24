// Nota: Promise es parecido a Task de de c# para representar tareas asincronas pero funcionan diferente
// pueden estar en 3 estados: pendiente (pending), cumplida (fulfilled) o rechazada (rejected)




/* //creando promesa
const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const exito = true; 
        if (exito) {
            resolve( console.log("HOLALALLAA"),console.log("fasdfasdfad" ));
        } else {
            reject("error en la operación.");
        }
    }, 2000);
});




setTimeout(() => {

    console.log("hola despues de dos segundos")
    
}, 2000);

console.log("hola desde antes que se ejecute el setimeout")

 */




// ejemplo de como crear un promise

const promesaSimple = new Promise((resolve, reject) => {
  console.log("La promesa está pendiente...");

  setTimeout(() => {
    const exito = true; // cambia a false para probar el rechazo

    if (exito) {
      resolve("La operación terminó bien");
    } else {
      reject("Hubo un problema en la operación");
    }
  }, 2000);
});

console.log("Promesa creada:", promesaSimple);

// Consumir la promesa
promesaSimple
  .then((mensaje) => {
    console.log("✔️ Se resolvió:", mensaje);
  })
  .catch((error) => {
    console.log("❌ Se rechazó:", error);
  });



//  Función que crea una Promise según un parámetro

function crearPromesa(exito) {
  return new Promise((resolve, reject) => {
    console.log("Procesando...");

    setTimeout(() => {
      if (exito) {
        resolve("Todo salió correctamente");
      } else {
        reject("Algo salió mal");
      }
    }, 3000);
  });
}


// -----------------------------------------------------
// 3. Consumir la promesa exitosa + encadenamiento de .then()
// -----------------------------------------------------

crearPromesa(true)
  .then((resultado) => {
    console.log("Resultado:", resultado);
    return resultado.toUpperCase(); // transformamos el valor
  })
  .then((resultadoTransformado) => {
    console.log("Transformado:", resultadoTransformado);
  })
  .catch((error) => {
    console.log("Error:", error); // con exito=true no entra aquí
  });


//consumir promesa fallida

crearPromesa(false)
  .then((resultado) => {
    console.log("Resultado:", resultado);
  })
  .catch((error) => {
    console.log("Error capturado:", error);
  });
