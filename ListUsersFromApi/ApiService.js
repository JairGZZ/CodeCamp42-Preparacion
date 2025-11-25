
const urlBase = "https://jsonplaceholder.typicode.com/todos/";


async function GetAllData() {

  try {
    let response = await fetch(urlBase)
    let data = await response.json()

    return data;
    
  } catch (error) {
    throw new Error("Ocurrio un error al obtener los datos",error)
    
  }
}
function changeBodyColor(){
  const body = document.getElementById("body");
  body.style.backgroundColor = "gray";
}

function cambiarTexto() {
  const titulo = document.getElementById("titulo");
  titulo.textContent = "¡Texto cambiado desde JS!";
  titulo.style.color = "blue";
  titulo.style.backgroundColor = "red"
}
async function loadData() {
  

  const data = await GetAllData()


       const container = document.getElementById("container")

  for (const element of data) {
        const p = document.createElement("p")
                const p1 = document.createElement("p")
        const p2 = document.createElement("p")
        const p3 = document.createElement("p")

        p.textContent = element.title
        p1.textContent= element.id
    p2.textContent= element.userId
    p3.textContent= element.completed



  container.appendChild(p)
    container.appendChild(p1)
  container.appendChild(p2)
  container.appendChild(p3)


  /*   container.appendChild(p.textContent = element.title)
  container.appendChild(p.textContent = element.userId)
  container.appendChild(p.textContent = element.completed) */


  }
}
 



async function Main(){
  
  await loadData()
  changeBodyColor();
  cambiarTexto();
}

Main();