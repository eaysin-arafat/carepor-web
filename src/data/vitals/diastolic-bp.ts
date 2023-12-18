export interface DiastolicBpItem {
  high: number | null;
  normal_range: number[];
}

export interface DiastolicBp {
  [key: string]: DiastolicBpItem;
}

export const diastolicBpData: DiastolicBp = {
  ">17": {
    high: 120,
    normal_range: [60, 90],
  },
  "12-17": {
    normal_range: [64, 83],
    high: null,
  },
  "10-11": {
    normal_range: [60, 80],
    high: null,
  },
  "6-9": {
    normal_range: [57, 76],
    high: null,
  },
  "3-5": {
    normal_range: [46, 76],
    high: null,
  },
  "1-2": {
    normal_range: [42, 63],
    high: null,
  },
  "1-12m": {
    normal_range: [37, 56],
    high: null,
  },
  "0-1m": {
    normal_range: [35, 53],
    high: null,
  },
};
