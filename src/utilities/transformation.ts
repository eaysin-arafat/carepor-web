import dayjs from "dayjs";

interface FilterDataType {
  encounterType: number;
  dateCreated: string;
}

/**
 *============================== This Function is used to filter data by encounterId ==============================
 *  @description - This function is used to filter data by encounterId
 */

export const filterByEncounterCopy = <T>(
  data: T[],
  filteredKey: keyof T,
  encounterId: number
) => {
  if (data && Array.isArray(data)) {
    return data?.filter((item) => item[filteredKey] === encounterId);
  }

  return [];
};

export const filterByEncounter = (
  data: FilterDataType[],
  encounterId: number
) => {
  if (data && Array.isArray(data)) {
    return data?.filter((item) => item.encounterType === encounterId);
  }

  return [];
};

/**
 *========= This Function is used to find data which was created within 24 hours ===============
 * @description - This function is used to find data which was created within 24 hours
 *
 */
export const filterBy24HoursCopy = <T extends { dateCreated: string }>(
  data: T[]
) => {
  if (data && Array.isArray(data)) {
    return data?.filter((item) => {
      if (dayjs().diff(new Date(item?.dateCreated), "hour") <= 24) {
        return item;
      }
    });
  }

  return [];
};

export const filterBy24Hours = (data: FilterDataType) => {
  if (data && Array.isArray(data)) {
    return data?.filter((item) => {
      if (dayjs().diff(new Date(item.dateCreated), "hour") <= 24) {
        return item;
      }
    });
  }

  return [];
};
