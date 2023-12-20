import dayjs from "dayjs";

interface FilterDataType {
  encounterType: number;
  dateCreated: string;
}

/**
 *============================== This Function is used to filter data by encounterId ==============================
 *  @description - This function is used to filter data by encounterId
 */

export function filterByEncounterCopy<T>(
  data: T[],
  filteredKey: keyof T,
  encounterId: number
) {
  if (data && Array.isArray(data)) {
    return data?.filter((item) => item[filteredKey] === encounterId);
  }

  return [];
}

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
export function filterBy24HoursCopy<T extends { dateCreated: string }>(
  data: T[]
) {
  if (data && Array.isArray(data)) {
    return data?.filter((item) => {
      if (dayjs().diff(new Date(item?.dateCreated), "hour") <= 24) {
        return item;
      }
    });
  }

  return [];
}

export const filterBy24Hours = (data) => {
  if (data && Array.isArray(data)) {
    return data?.filter((item) => {
      if (dayjs().diff(new Date(item.dateCreated), "hour") <= 24) {
        return item;
      }
    });
  }

  return [];
};

/**
 * =====Filter data by encounter type and combined based on dateCreated, encounterId, createdIn and createdBy
 * @description - This function is used to filter data by encounter type and combined based on dateCreated, encounterId, createdIn and createdBy
 */

interface CommonType {
  encounterDate: string;
  encounterId: number;
  createdIn: number;
  createdBy: string;
  encounterType: number;
}

export function filterByEncounterTypeAndCombine<T extends CommonType>(
  dataArrayOne: T[],
  dataArrayTwo: T[],
  encounterType: number
) {
  if (
    dataArrayOne &&
    Array.isArray(dataArrayOne) &&
    dataArrayTwo &&
    Array.isArray(dataArrayTwo)
  ) {
    const filteredDataOne = dataArrayOne?.filter(
      (item) => item.encounterType === encounterType
    );

    const filteredDataTwo = dataArrayTwo?.filter(
      (item) => item.encounterType === encounterType
    );

    const combinedData = [];

    filteredDataOne?.forEach((item) => {
      const found = filteredDataTwo?.find(
        (data) =>
          dayjs(item.encounterDate).isSame(data.encounterDate, "day") &&
          data.encounterDate === item.encounterDate &&
          data.encounterId === item.encounterId &&
          data.createdIn === item.createdIn &&
          data.createdBy === item.createdBy
      );

      if (found) {
        combinedData.push({
          ...item,
          ...found,
        });
      }
    });

    return combinedData;
  }

  return [];
}
