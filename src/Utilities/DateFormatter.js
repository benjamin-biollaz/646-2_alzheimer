class DateFormatter {

formatDate(dateSeconds) {
    let date = new Date(dateSeconds.seconds * 1000);
    //month in js goes from 0-11 that's why one is added for proper display
    return date.getDate() + "/" + (date.getMonth() + 1) + "/" +
        date.getFullYear() + " at " + date.getHours() + ":" + date.getMinutes();
}

}