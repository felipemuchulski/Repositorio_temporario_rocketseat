import dayjs from "dayjs"
import { openHours } from "../../utils/open-hours.js"

const hours = document.getElementById("hours");

export function hoursLoad({ date }){
    const opening = openHours.map((hour) => {
        const [scheduleHour] = hour.split(":")
        

        // Adiciona a hora na date e verifica se está no passado
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())
        
        
        // Define se o horário está disponível
        return {
            hour,
            available: isHourPast,
        }
    })
    
    // Renderiza os horários
    opening.forEach(({hour, available}) => {
        const li = document.createElement("li");

        li.classList.add("hour");
        li.classList.add(available ? "hour-available" : "hour-unvailable")

        li.textContent = hour;
        hours.append(li)
    })
}