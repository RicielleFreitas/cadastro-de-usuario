//console.log('entrou')
const listName = ['Making Love', 'Lucyus Clayton', 'João do Caminhão', 'Marcelino, Pão e Vinho', 'Boça dos Santos'
]
const listDom = document.getElementById('list-name');
let setlistDom;
listName.map((name) => {
    setlistDom = setlistDom? setlistDom + `<li class="list-group-item">${name}</li>` : `<li class="list-group-item">${name}</li>`
})

listDom.innerHTML = setlistDom; 
