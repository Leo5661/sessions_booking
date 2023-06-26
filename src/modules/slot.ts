const {DateTime} = require("luxon");
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
    const formatedDate1 = DateTime.local(date.getFullYear(), date.getMonth() + 1, date.getDate(), 10, 0, 0); 
    const formateddate2 = DateTime.local(date2.getFullYear(), date2.getMonth() + 1, date2.getDate(), 10, 0, 0);
    
    // console.log([DateTime.fromObject(formatedDate1.c), formateddate2.toString()]);
    const ms = formateddate2.toUnixInteger();

    console.log(ms);
    
    return [{dateTime: formatedDate1}, {dateTime: formateddate2}];
}

 export const getMillsByISODateTime = (date) => {
    const dateHeader = date.split("T");
    const dateComponents = dateHeader[0].split("-")
    
    const year = parseInt(dateComponents[0]);
    const month = parseInt(dateComponents[1]);
    const day = parseInt(dateComponents[2]);

    const dateMs = DateTime.local(year, month, day, 10, 0, 0);

    return dateMs.ts
}

export const getMillsByDateTime = (date) => {
    const year = parseInt(date.getFullYear());
    const month = parseInt(date.getMonth()) + 1;
    const day = parseInt(date.getDate());

    const dateMs = DateTime.local(year, month, day, 10, 0, 0);
    
    return dateMs.ts
}

export const getDateTimeFromMills = (ms) => {
    const date = DateTime.fromMillis(ms).toString();

    return date;
}

// nextSlotDates();

// pass string fromat date in DD/MM/YYYY use single digit month for >10
// const compareDate = (date, ms) => {
//     const dateArr = date.split("/")

//     const datefromMs = new Date();
//     const dt = datefromMs.getDate();

//     console.log([dateArr, datefromMs, dt]);

// }

// compareDate("29/6/2023", 1687977000)
 
// const custom = DateTime.local(date);
//     const custumMs = custom.toUnixInteger();
//     // const custumMs2 = custom.getMilliseconds();
//     console.log([custom, custumMs]);
//     console.log([date.toLocaleString(), date2]);