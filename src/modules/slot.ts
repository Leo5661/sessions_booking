export const nextSlotDates = () => {
    const dayOfWeek = 4; //Thur
    let date = new Date();
    let date2 = new Date();
    const diff = (date.getDay() - dayOfWeek);
    
    if (diff >= 0) {
        date.setDate(date.getDate() + (7 - diff));
    }
    else if (diff < 0) {
        date.setDate(date.getDate() + (-1 * diff))
    }

    date2.setDate(date.getDate() + 1);
    
    // format
    const firstDate = date.toDateString();
    const secondDate = date2.toDateString();

    return [{date: firstDate, time: "10:00:00"}, {date: secondDate, time: "10:00:00"}];
}

 
