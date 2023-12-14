import { cookieManager } from "@/utilities/cookie-manager";
import dayjs from "dayjs";

export interface CookieClient {
  oid: string;
  dob: string;
  sex: number;
}

const gender = {
  1: "male",
  2: "female",
};

const useClientAge = () => {
  // get client from cookie
  const cookieClient = cookieManager.parseCookie<CookieClient>("client");

  // get age in months, years, and days
  const ageInMonths = dayjs().diff(dayjs(cookieClient?.dob), "month");
  const ageInYears = dayjs().diff(dayjs(cookieClient?.dob), "year");
  const ageInDays = dayjs().diff(dayjs(cookieClient?.dob), "day");
  const ageInWeeks = dayjs().diff(dayjs(cookieClient?.dob), "week");

  // gender
  const clientGender = gender[cookieClient?.sex];

  // return age
  return {
    ageInMonths,
    ageInYears,
    ageInDays,
    clientGender,
    ageInWeeks,
  };
};

export default useClientAge;
