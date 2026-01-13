import dayjs from "dayjs"
import { openHours } from "../../utils/open-hours.js"

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
    console.log(opening)
}