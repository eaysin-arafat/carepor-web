export class DateFunc {
  static formatDate(dateString: string) {
    // Convert the input date string to a Date object
    const dateObj = new Date(dateString);
    // Define month names to be used for formatting
    // prettier-ignore
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    // Format the date in the desired format
    const day = dateObj.getDate();
    const month = monthNames[dateObj.getMonth()];
    const year = dateObj.getFullYear();

    const formattedDate = `${day}-${month}-${year}`;

    // Return the formatted date
    return year && month && year ? formattedDate : "";
  }

  static convertDateToDateObject = (dateString: string) => {
    const dateObj = new Date(dateString);
    return dateObj;
  };

  static convertDateObjectToDateString = (dateObj: Date) => {
    const dateString = dateObj?.toISOString();
    return dateString;
  };

  static isDateInFuture(givenDateStr: string) {
    const givenDate = new Date(givenDateStr);
    const now = new Date();
    return givenDate > now;
  }

  static isOverYears(inputDate: string, years: number) {
    const currentDate = new Date().getTime();
    const inputDateObj = new Date(inputDate).getTime();

    const differenceMillisecond = currentDate - inputDateObj;
    const eighteenYearsMillisecond = years * 365 * 24 * 60 * 60 * 1000;

    return differenceMillisecond >= eighteenYearsMillisecond;
  }

  static isBetweenHours(inputDate = new Date(), hours: number) {
    const currentDate = new Date().getTime();
    const inputDateObj = new Date(inputDate).getTime();

    const differenceMillisecond = currentDate - inputDateObj;
    const twentyFourHoursMillisecond = hours * 60 * 60 * 1000;

    return differenceMillisecond <= twentyFourHoursMillisecond;
  }
}
