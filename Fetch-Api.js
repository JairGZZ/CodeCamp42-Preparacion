const url = "https://jsonplaceholder.typicode.com/todos/";

//asyn / await es igual a la programacion asincrona en c# asi que estoy familiarizado
//fetch get usando async/await

async function GetUser(url,id) {
    try{
   
        let response = await fetch(url+id);
        let data = await response.json();
        return data;
    }catch(error){
        console.log("el error es :".toUpperCase(),error)
    }
}

///normalmente no se puede usar await fuera de una funcion asincrona pero estoy usando el modo "module" y no "commonjw"

console.log("Respues usando async/await    ",await GetUser(url,5));

console.log(import.meta);


//fetch usando la forma tradicional
fetch(url+5)
.then((response)=> response.json())
.then((data) => console.log("respuesta usando la forma tradicional" ,data))
.catch((error) => console.log("el error es", error))




function UserThen (url,id){
    return fetch(url+id);
}

UserThen(url,5)
.then((response) =>response.json())
.then((data) => console.log(data))

async function Paralelo(url,id) {
    const [usuario,usuario2] = await Promise.all([
        await GetUser(url,id),
        await GetUser(url,id)
    ])
    return {usuario,usuario2}
    
    
}

Paralelo(url,5).then(
    response => 
        console.log("AAAAAAAAAAAAAAAAAA",response.usuario)
).then(response => console.log("BBBBBBBBBBB", response.usu))


Paralelo(url,5).then(
    response =>{
        console.log("AAAAAAAAAAAAAAAAAA",response.usuario)
        console.log("BBBBBBBBBBB", response.usuario2)
    }
)