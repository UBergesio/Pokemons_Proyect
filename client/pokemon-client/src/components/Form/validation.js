const regexNombre = /^[^0-9]*$/;
const regexNombreCaracteres = /^(?=\D)[A-Za-z\s]{3,35}$/;
const regexImagen = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
const regexVariosObli = /^\d{1,3}$/;

const validate = (pokeData) => {
  const errors = {};
  if (!pokeData) {
    // Asegúrate de que pokeData no sea nulo o indefinido
    return errors;
  }
  // ? ERRORES DE NOMBRE
  if (!pokeData.nombre) {
    errors.nombre = "*Se requiere un nombre";
  } else if (!regexNombre.test(pokeData.nombre)) {
    errors.nombre = "*El nombre no puede contener numeros";
  } else if (!regexNombreCaracteres.test(pokeData.nombre)) {
    errors.nombre = "*El nombre puede contener entre 3 y 35 caracteres";
  }

  // ? ERRORES DE IMAGEN
  if (!pokeData.imagen) {
    errors.imagen = "*Se requiere la URL de una imagen";
  } else if (!regexImagen.test(pokeData.imagen)) {
    errors.imagen = "*Solo se admite la imagen a travez de URL";
  }

  // ? ERRORES DE VARIOS OBLIGATORIOS
  if (!pokeData.vida) {
    errors.vida = "*Debe asignar la vida de su Pokemon";
  } else if (!regexVariosObli.test(pokeData.vida)) {
    errors.vida = "*La vida debe ser numerica y no mayor a 3 cifras";
  }
  if (!pokeData.ataque) {
    errors.ataque = "*Debe asignar el ataque de su Pokemon";
  } else if (!regexVariosObli.test(pokeData.ataque)) {
    errors.ataque = "*El ataque debe ser numerico y no mayor a 3 cifras";
  }
  if (!pokeData.defensa) {
    errors.defensa = "*Debe asignar la defensa de su Pokemon";
  } else if (!regexVariosObli.test(pokeData.defensa)) {
    errors.defensa = "*La defensa debe ser numerica y no mayor a 3 cifras";
  }

  // ? ERRORES DE VARIOS NO OBLIGATORIOS

  if (!regexVariosObli.test(pokeData.velocidad)) {
    errors.velocidad = "*La velocidad debe ser numerica y no mayor a 3 cifras";
  }
  if (!regexVariosObli.test(pokeData.altura)) {
    errors.altura = "*La altura debe ser numerica y no mayor a 3 cifras";
  }
  if (!regexVariosObli.test(pokeData.peso)) {
    errors.peso = "*El peso debe ser numerico y no mayor a 3 cifras";
  }

  return errors;
};

export default validate;
