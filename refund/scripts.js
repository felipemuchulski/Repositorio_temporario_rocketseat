// Selecionando itens do formulario
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const expense = document.getElementById("expense");
const category = document.getElementById("category");

// Seleciona os elementos da lista
const expenseList = document.querySelector("ul")
const expensesQuantity = document.querySelector("aside header p span")
const expensesTotal = document.querySelector("aside header h2")

amount.oninput = () => {
    let value = amount.value.replace(/\D/g, ""); // recebe o valor do input e formata

    // Transformar o valor em centavos
    value = Number(value) / 100;

    amount.value = formatCurrencyBRL(value); // passa o valor do input formatado
    
}

function formatCurrencyBRL(value){
    // Formata o valor no padrão BRL (Real Brasileiro)
    return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}

form.onsubmit = (event) => {
    //previne o comportamento padrão de recarregar a 
    event.preventDefault()

    const newExpese = {
        id: new Date().getTime(),
        expense: expense.value,
        category_id: category.value,
        category_name: category.options[category.selectedIndex].text,
        amount: amount.value,
        created_at: new Date(),
    }

    //chama função que adiciona item na lista
    expenseAdd(newExpese)
    
}

// Adiciona um novo item na lista
function expenseAdd(newExpense) {
    try {
        const expenseItem = document.createElement("li");
        expenseItem.classList.add("expense");

        // Cria o icone da categoria
        const expenseIcon = document.createElement("img");
        expenseIcon.setAttribute("src", `img/${newExpense.category_id}.svg`);
        expenseIcon.setAttribute("alt", newExpense.category_name);


        // Cria informação da despesa
        const expenseInfo = document.createElement("div");
        expenseInfo.classList.add("expense-info");

        // Cria o nome da despesa
        const expenseName = document.createElement("strong");
        expenseName.textContent = newExpense.expense;

        // Cria categoria da despesa
        const expenseCategory = document.createElement("span");
        expenseCategory.textContent = newExpense.category_name;

        // Adiciona nome e categoria na div das informações da despesa
        expenseInfo.append(expenseName, expenseCategory);

        // Valor da despesa 
        const expenseAmount = document.createElement("span");
        expenseAmount.classList.add("expense-amount");
        expenseAmount.innerHTML = `<small>R$</small>${newExpense.amount
            .toUpperCase()
            .replace("R$", "")}`

        // Cria o ícone de remover
        const removeIcon = document.createElement("img");
        removeIcon.classList.add("remove-icon");
        removeIcon.setAttribute("src", "img/remove.svg");
        removeIcon.setAttribute("alt", "remover icone");

        // Adiciona as informações no item
        expenseItem.append(expenseIcon, expenseInfo, expenseAmount);

        // Adicionando o item na lista
        expenseList.append(expenseItem);
        

        formClear()
        // atualiza totais
        updateTotals()
    } catch (error) {
        alert("Não foi possível atualizar a lista de despesas.")
        console.log(error)
    }

}

// Atualizar os totais
function updateTotals(){
    try {
        const items = expenseList.children

        // Atualiza a quantidade de itens da lista
        expensesQuantity.textContent = `${items.length} ${items.length > 1 ? "despesas": "despesa"}`

        // Variável para incrementar o total
        let total = 0

        // Percorre cada li da lista (ul)
        for (let item = 0; item < items.length; item++) {
            const itemAmount = items[item].querySelector(".expense-amount");
            
            // Remove caracteres não numéricos e substitui a vírgula pelo ponto.
            let value = itemAmount.textContent.replace(/[^\d,]/g, "").replace(",", ".");

            // Converte o valor para o float
            value = parseFloat(value);
            if(isNaN(value)){
                return alert("Não foi possível calcular o total. O valor não parece ser um número")
            }

            // Incrementar o valor total
            total +=Number(value)
        }

        // Criar a span para adicionar o RS formatado
        const symbolBRL = document.createElement("small");
        symbolBRL.textContent = "R$";

        total = formatCurrencyBRL(total).toUpperCase().replace("R$", "");

        expensesTotal.innerHTML= ""
        expensesTotal.append(symbolBRL, total)
    } catch (error) {
        console.log(error)
        alert("Não foi possível atualizar os totais.")
    }
}

// Captura click nos items da lista
expenseList.addEventListener("click", (event) => {
    // Verifica se foi o ícone de remover
    if(event.target.classList.contains("remove-icon")){
        // Obter a li pai do elemento clicado.
        const item = event.target.closest(".expense")

        // Remove o item da lista
        item.remove()
    }

    updateTotals()
})

function formClear(){
    expense.value = ""
    category.value = ""
    amount.value = ""

    expense.focus()
}