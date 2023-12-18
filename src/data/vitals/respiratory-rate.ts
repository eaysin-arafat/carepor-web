export interface RespiratoryRateItem {
  normal_range: number[];
}

export interface RespiratoryRate {
  [key: string]: RespiratoryRateItem;
}

export const respiratoryRateData: RespiratoryRate = {
  ">12": {
    normal_range: [12, 20],
  },
  "6-11": {
    normal_range: [18, 25],
  },
  "3-5": {
    normal_range: [20, 28],
  },
  "1-2": {
    normal_range: [22, 37],
  },
  "1-12m": {
    normal_range: [30, 53],
  },
  "0-1m": {
    normal_range: [40, 60],
  },
};
