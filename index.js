const { registrar, leer } = require("./operaciones");
const argumentos = process.argv.slice(2);
const operacion = argumentos[0];

if (operacion === "registrar") {
  const nombreDelAnimal = argumentos[1];
  const edad = argumentos[2];
  const tipoDeAnimal = argumentos[3];
  const colorDeAnimal = argumentos[4];
  const enfermedad = argumentos[5];
  registrar(nombreDelAnimal, edad, tipoDeAnimal, colorDeAnimal, enfermedad);
} else {
  leer();
}
