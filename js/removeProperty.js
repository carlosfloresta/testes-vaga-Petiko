// Implemente a função removeProperty, que recebe um objeto e o nome de uma propriedade.

// Faça o seguinte:

// Se o objeto obj tiver uma propriedade prop, a função removerá a propriedade do objeto e retornará true;
// em todos os outros casos, retorna falso.

function removeProperty(obj, prop) {
  if (prop in obj) {
    delete obj[prop];
    return true;
  }

  return false;
}

var objeto = { teste: 1, teste2: 2 };

console.log(removeProperty(objeto, "teste"));
