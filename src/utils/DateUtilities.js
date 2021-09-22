/*
* Returns the date in dd%mm%yy using the specified separator:%
* @param {Date} d Date object
* @param {String} separator Separator to use
* */
function formatDate(date, separator)  {
    let month = date.getMonth();
    let day = date.getDate().toString();
    let year = date.getFullYear();
    year = year.toString().substr(-2);
    // month is zero-indexed
    month = (month + 1).toString();
    // Pad single digit month/dates with preceding 0
    if (month.length === 1) {
        month = "0" + month;
    }
    if (day.length === 1) {
        day = "0" + day;
    }
    return [day, month, year].join(separator);
}

export { formatDate };
