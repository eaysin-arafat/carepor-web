import { format } from "date-fns";

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
  static toDay() {
    const date = new Date().toISOString();

    return date;
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

  // format human readable date
  static toFormatted = (dateString: string) => {
    return format(new Date(dateString), "dd-MMM-yyyy ");
  };
}

export const getAgeMessage = (dateString: string) => {
  const DOB = new Date(dateString);
  const now = new Date();

  // if date is error select
  if (now.getTime() - DOB.getTime() < 0) {
    return { error: true, ageMessage: "Invalid date of birth" };
  } else {
    const yearNow = now.getFullYear();
    const monthNow = now.getMonth();
    const dateNow = now.getDate();

    const dob = new Date(dateString);

    const yearDob = dob.getFullYear();
    const monthDob = dob.getMonth();
    const dateDob = dob.getDate();

    let yearAge = yearNow - yearDob;
    let monthAge: number;

    if (monthNow >= monthDob) {
      monthAge = monthNow - monthDob;
    } else {
      yearAge--;
      monthAge = 12 + monthNow - monthDob;
    }

    let dateAge: number;
    if (dateNow >= dateDob) {
      dateAge = dateNow - dateDob;
    } else {
      monthAge--;
      dateAge = 31 + dateNow - dateDob;

      if (monthAge < 0) {
        monthAge = 11;
        yearAge--;
      }
    }

    const age = { years: yearAge, months: monthAge, days: dateAge };

    // PLURAL STRING RETURN
    const formatYearString = yearAge > 1 ? " years " : " year ";
    const formatMonthString = monthAge > 1 ? " months " : " month ";
    const formatDayString = age.days > 1 ? " days" : " day";

    // IF VALUE ZERO THEN EMPTY RETURN
    const showYear = yearAge > 0 ? yearAge + formatYearString : "";
    const showMonth = monthAge > 0 ? monthAge + formatMonthString : "";
    const showDays = dateAge > 0 ? dateAge + formatDayString : "";

    const ageMessage = showYear + showMonth + showDays;

    return {
      ageMessage,
      error: false,
      age,
    };
  }
};

export const datePickerToString = (picker: Date | null) => {
  if (!picker) {
    return undefined;
  } else {
    const currentDate = new Date().toISOString();
    const currentSub = currentDate.substring(10);
    //
    const pickerDate = new Date(picker);
    const day = pickerDate.getDate().toString().padStart(2, "0");
    const month = (pickerDate.getMonth() + 1).toString().padStart(2, "0");
    const year = pickerDate.getFullYear();
    const pickedCustom = `${year}-${month}-${day}`;
    //
    const returnDate = pickedCustom + currentSub;
    return returnDate;
  }
};
