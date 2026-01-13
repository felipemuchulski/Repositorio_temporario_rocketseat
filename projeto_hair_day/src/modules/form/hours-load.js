import dayjs from "dayjs"
import { openHours } from "../../utils/open-hours.js"
import { hoursClick } from "./hours-click.js";

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

        if(hour === "09:00"){
            hourHeaderAdd("Manhã")
        } else if (hour === "13:00"){
            hourHeaderAdd("Tarde")
        } else if(hour === "18:00") {
            hourHeaderAdd("Noite")
        }

        hours.append(li)
    })

    // Adiciona o evento de click nos horarios disponíveis
    hoursClick()
}

function hourHeaderAdd(title){
    const header = document.createElement("li");
    header.classList.add("hour-period")
    header.textContent = title;

    hours.append(header)
}