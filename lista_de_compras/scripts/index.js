/*
1 - Criar a lógica do botão de adicionar item
    Ao clicar no botão ele deve criar um novo item na lista;
    Deve limpar o conteúdo do input de "Adicionar item"

2 - Criar lógica do botão de remover item
    Ao clicar no botão ele deve remover o item da lista;
    E exibir a mensagem de item removido da lista;


3 - Pesquisar como posso fazer uma mensagem de log aparecer abaixo da lista

*/

// Pega o botao de adicionar o item
const btnAddItem = document.getElementById("add_btn");

// pega o valor do input
const inputItem = document.getElementById("add_item")

// Pega o id da ul
const ul_id = document.getElementById("ul-list");
const novaLi = document.createElement("li")

novaLi.classList.add("list-item");




// Cria o input checkbox
const inputCheckbox = document.createElement("input");
inputCheckbox.type = "checkbox";
inputCheckbox.classList.add("input-checkbox");



// Pega o conteúdo do adicionar item

btnAddItem.addEventListener("click", () => {

})