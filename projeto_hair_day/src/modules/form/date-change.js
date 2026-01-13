import { scheduleDay } from "../schedules/load.js"
// Seleciona o input de data
const selectedDate = document.getElementById("date")

// Recarrega a lista de horário quando o input de dada mudar.
selectedDate.onchange = () => scheduleDay()