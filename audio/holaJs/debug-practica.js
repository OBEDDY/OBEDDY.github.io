const usuarios = [
  { nombre: "Ana", activo: true },
  { nombre: "Luis", activo: false },
  { nombre: "María", activo: true }
];

function obtenerActivos(lista) {
  let activos = [];

  for (let i = 0; i < lista.length; i++) {
    
    if (lista[i].activo = true) {
   
      activos.push(lista[i].nombre);
        
    }
  }

  return activos;
   debugger; // Punto de interrupción para depuración
}

console.log(obtenerActivos(usuarios));