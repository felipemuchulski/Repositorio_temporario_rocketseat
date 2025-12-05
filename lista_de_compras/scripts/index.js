/*
1 - Criar a lógica do botão de adicionar item
    Ao clicar no botão ele deve criar um novo item na lista;
    Deve limpar o conteúdo do input de "Adicionar item"

2 - Criar lógica do botão de remover item
    Ao clicar no botão ele deve remover o item da lista;
    E exibir a mensagem de item removido da lista;


3 - Pesquisar como posso fazer uma mensagem de log aparecer abaixo da lista

*/

// Pega os elementos
const btnAddItem = document.getElementById("add_btn");
const inputItem = document.getElementById("add_item");
const ul_id = document.getElementById("ul-list");
const footerAlert = document.getElementById("footer-alert");



btnAddItem.addEventListener("click", () => {
    const valorInput = inputItem.value.trim();
    
    // Limpa o input sempre
    inputItem.value = "";
    
    // Validação para evitar itens vazios
    if (valorInput === "") return;
    
    // Cria a Li
    const novaLi = document.createElement("li");
    novaLi.classList.add("list-item");

    // Cria o input checkbox
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.classList.add("input-checkbox");

    // Cria o label para o texto do item
    const labelItem = document.createElement("label");
    labelItem.textContent = valorInput;

    // Botão de remover
    const btnRemove = document.createElement("button");
    btnRemove.classList.add("btn-delete");
    btnRemove.textContent = "🗑️";
    btnRemove.addEventListener("click", () => {
        novaLi.remove();

        const divAlert = document.createElement("div");
        divAlert.classList.add("alert-item", "flex", "items-center");

        const iconAlert = document.createElement("span");
        iconAlert.classList.add("alert-icon");
        iconAlert.textContent = "⚠️";

        const textoRemovido = document.createElement("p");
        textoRemovido.classList.add("alert-text");
        textoRemovido.textContent = "O item foi removido da lista";

        const btnRemoveAlert = document.createElement("button");
        btnRemoveAlert.classList.add("btn-delete");
        btnRemoveAlert.textContent = "❌";

        divAlert.appendChild(iconAlert);
        divAlert.appendChild(textoRemovido);
        divAlert.appendChild(btnRemoveAlert);

        footerAlert.appendChild(divAlert);

        btnRemoveAlert.addEventListener("click", () => {
            divAlert.remove();
        });

        
    });

    novaLi.appendChild(inputCheckbox);
    novaLi.appendChild(labelItem);
    novaLi.appendChild(btnRemove);

    ul_id.appendChild(novaLi);
})