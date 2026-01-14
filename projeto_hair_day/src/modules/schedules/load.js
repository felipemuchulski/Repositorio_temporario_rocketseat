import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { hoursLoad } from "../form/hours-load.js"

// Seleciona o input de data
const selectedDate = document.getElementById("date")

export async function scheduleDay(){
    // Obtém a data do input
    const date = selectedDate.value

    // Buscar na API os agendamentos
    const dailySchedules = await scheduleFetchByDay({ date })

    // Renderiza as horas disponiveis
    hoursLoad({date});


    // Os horários disponíveis (horário futuro + não agendado) do lado esquerdo da tela
}