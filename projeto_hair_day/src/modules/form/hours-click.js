export function hoursClick(){
    const hours = document.querySelectorAll('.hour-available');
    
    hours.forEach((available) => {
        available.addEventListener("click", (selected) => {
            
            // Remove a classe hour selected de todas as li não selecionadas
            // Assim pode ter somente uma seleção
            hours.forEach((hour) => {
                hour.classList.remove("hour-selected")
            })

            selected.target.classList.add("hour-selected")
        })
    })
}