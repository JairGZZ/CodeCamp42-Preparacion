//ejemplo de un servidor web simple en Node.js

import { createServer } from "http";


let products = [
  { id: 1, name: "Producto A", price: 10.0 },
  { id: 2, name: "Producto B", price: 20.0 },
  { id: 3, name: "Producto C", price: 30.0 },
];

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(products));
});

server.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
