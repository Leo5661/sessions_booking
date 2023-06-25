export const nextSlotDates = () => {
    const dayOfWeek = 4; //Thur
    let date = new Date();
    let secondDate = new Date();
    const diff = (date.getDay() - dayOfWeek);
    
    if (diff >= 0) {
        date.setDate(date.getDate() + (7 - diff));
    }
    else if (diff < 0) {
        date.setDate(date.getDate() + (-1 * diff))
    }

    secondDate.setDate(date.getDate() + 1);
    return [date, secondDate];
}

 
