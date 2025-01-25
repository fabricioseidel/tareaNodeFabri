const fs = require("fs");

const registrar = (
  nombreDelAnimal,
  edad,
  tipoDeAnimal,
  colorDeAnimal,
  enfermedad
) => {
  const data = fs.readFileSync("citas.json", "utf-8");
  const citas = JSON.parse(data);

  const nuevaCita = {
    nombreDelAnimal,
    edad,
    tipoDeAnimal,
    colorDeAnimal,
    enfermedad,
  };
  citas.push(nuevaCita);

  fs.writeFileSync("citas.json", JSON.stringify(citas, null, 2), "utf-8");

  console.log("Información del animal registrada con éxito:");
  console.log(nuevaCita);
};

const leer = () => {
  const data = fs.readFileSync("citas.json", "utf-8");
  const citas = JSON.parse(data);
  console.log("Citas registradas:");
  console.log(citas);
};

module.exports = {
  registrar,
  leer,
};
