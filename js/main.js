// Atualizar Dia - Mês - Ano
let agora = new Date();
let dia = agora.getDate();
let mes = agora.toLocaleString('default', {month:'long'});
let ano = agora.getFullYear();
document.querySelector('.data-dia').innerHTML = dia;
document.querySelector('.data-mes').innerHTML = mes;
document.querySelector('.data-ano').innerHTML = ano;
