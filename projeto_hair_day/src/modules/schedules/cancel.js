const periods = document.querySelectorAll(".period");

// Gera um evento click para cada lista (manha, tarde, noite)
periods.forEach((period) => {
    // Capturo o evento de clique na lista.
    period.addEventListener("click", (event) => {
        if (event.target.classList.contains("cancel-icon")) {
            // Obtem a li pai do evento clicado
            const item = event.target.closest("li");
            const { id } = item.dataset
            

            if(id) {
                const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?")

                if(isConfirm){
                    console.log("Removido")
                }
            }

        }
    });
});
