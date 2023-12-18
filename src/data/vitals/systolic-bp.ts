export interface SystolicBpItem {
  normal_range: number[];
  high: number | null;
}

export interface SystolicBp {
  [key: string]: SystolicBpItem;
}

export const systolicBpData: SystolicBp = {
  ">17": {
    high: 180,
    normal_range: [90, 140],
  },
  "12-17": {
    normal_range: [110, 131],
    high: null,
  },
  "10-11": {
    normal_range: [102, 120],
    high: null,
  },
  "6-9": {
    normal_range: [97, 115],
    high: null,
  },
  "3-5": {
    normal_range: [89, 106],
    high: null,
  },
  "1-2": {
    normal_range: [86, 106],
    high: null,
  },
  "1-12m": {
    normal_range: [72, 104],
    high: null,
  },
  "0-1m": {
    normal_range: [67, 84],
    high: null,
  },
};
