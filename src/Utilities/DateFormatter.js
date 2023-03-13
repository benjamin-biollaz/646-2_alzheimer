export class DateFormatter {

formatDate(dateSeconds) {
    if (!dateSeconds || !dateSeconds.seconds) {
      return '';
    }
    let date = new Date(dateSeconds.seconds * 1000 + dateSeconds.nanoseconds / 1000000);
    //month in js goes from 0-11 that's why one is added for proper display
    return date.getDate() + "/" + (date.getMonth() + 1) + "/" +
        date.getFullYear()
}

calculateAge(birthDate) {
    if (!birthDate || !birthDate.seconds) {
      return '';
    }
    const today = new Date();
    const birthDateObj = new Date(birthDate.seconds * 1000 + birthDate.nanoseconds / 1000000);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
      age--;
    }
    return age;
  }
}