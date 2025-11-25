//definimos la url base de la api
const urlBase = "https://jsonplaceholder.typicode.com/todos";

//funcion para obtener todos los datos
async function GetAllData() {
  try {
    //hacemos fetch a la url base
    let response = await fetch(urlBase);
    let data = await response.json();

    return data;
  } catch (error) {
    throw new Error("Ocurrio un error al obtener los datos " + error.message);
  }
}

//funcion para cambiar el color del body
function changeBodyColor() {
  const body = document.getElementById("body");
  body.style.backgroundColor = "gray";
}

function cambiarTexto() {
  const titulo = document.getElementById("titulo");
  titulo.textContent = "¡Texto cambiado desde JS!";
  titulo.style.color = "blue";
  titulo.style.backgroundColor = "red";
}
//funcion para cargar los datos y mostrarlos en tarjetas
async function loadData() {
  const data = await GetAllData();

  const container = document.getElementById("container");

  //iteramos sobre los datos y creamos tarjetas para cada uno
  for (const element of data) {
    const card = document.createElement("div");
    card.classList.add("todo-card");

    //cambiamos a innerhtml para no estar creando manualmente con createlement
    card.innerHTML = ` 
  <p><strong>ID:</strong> ${element.id}</p>
  <p><strong>User:</strong> ${element.userId}</p>
  <p><strong>Título:</strong> ${element.title}</p>
  <p><strong>Completado:</strong> ${element.completed}</p>
`;

    //agregamos la tarjeta al contenedor
    container.appendChild(card);
  }
}

//aqui centralizamos la llamada de los metoodos
async function Main() {
  await loadData();
  changeBodyColor();
  cambiarTexto();
}

Main();
