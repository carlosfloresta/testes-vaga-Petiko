// Escreva uma função que converta a data de entrada do usuário formatada como MM/DD/YYYY em um formato exigido por uma API (YYYYMMDD). O parâmetro "userDate" e o valor de retorno são strings.

// Por exemplo, ele deve converter a data de entrada do usuário "31/12/2014" em "20141231" adequada para a API.

function formatDate(userDate) {
  // format from M/D/YYYY to YYYYMMDD
  var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
  if (!date_regex.test(userDate)) {
    return false;
  }
  return new Date(userDate).toLocaleDateString("fr-CA").split("-").join("");
  //ou usando uma expressão regular
  return userDate.replace(/(\d\d)\/(\d\d)\/(\d{4})/, "$3$1$2");
}

console.log(formatDate("12/31/2014"));
