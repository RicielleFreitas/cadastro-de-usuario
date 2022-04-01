//console.log('entrou')

//const listName = ['Making Love', 'Lucyus Clayton', 'João do Caminhão', 'Marcelino, Pão e Vinho', 'Boça dos Santos'
// LOOP array de stringa

const clientes = [
  {
    nome: "Making Love",
    idade: "21 anos",
  },
  {
    nome: "Lucyus Clayton",
    idade: "40 anos",
  },
];

const listDom = document.getElementById("list-name");
let setlistDom;
clientes.map((semantico) => {
  setlistDom = setlistDom
    ? setlistDom +
      `<li class="list-group-item">nome: ${semantico.nome}, idade: ${semantico.idade}</li>`
      : `<li class="list-group-item">nome: ${semantico.nome}, idade: ${semantico.idade}</li>`;
    });
listDom.innerHTML = setlistDom;