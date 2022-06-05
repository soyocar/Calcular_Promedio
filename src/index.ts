import "./styles.css";
function aleatorio(minimo: number, maximo: number): number {
  return Math.floor(Math.random() * (maximo - minimo - 1)) + minimo;
}

function cargarArreglo(numeroArreglo: number[], dimensionArreglo: number) {
  let indice: number;
  for (indice = 0; indice < dimensionArreglo; indice++) {
    numeroArreglo[indice] = aleatorio(3, 7);
  }
}

function mostrarArreglo(numeroArreglo: number[], dimensionArreglo: number) {
  let indice: number;
  let linea: string = "";
  for (indice = 0; indice < dimensionArreglo; indice++) {
    linea += ` ${numeroArreglo[indice]}`;
  }
  console.log(linea);
}

function obtenerPromedio(numArreglo: number[], dimArreglo: number): number {
  let prome: number = 0;
  let sumaTotal: number = 0;
  let indice: number;
  for (indice = 0; indice < dimArreglo; indice++) {
    sumaTotal = sumaTotal + numArreglo[indice];
  }
  prome = sumaTotal / dimArreglo;
  return prome;
}

//Calcula el promedio de las edades de los jugadores de fútbol
let promedio: number = 0;
let dimArreglo: number = Number(prompt(`Indique la cantidad de jugadores: `));
let numArreglo: number[] = new Array(dimArreglo);
cargarArreglo(numArreglo, dimArreglo);
mostrarArreglo(numArreglo, dimArreglo);
promedio = obtenerPromedio(numArreglo, dimArreglo);
console.log(`El promedio las edades es de: ${promedio}`);
