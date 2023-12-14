export interface PulseRateItem {
  normal_range: number[];
}

export interface PulseRate {
  [key: string]: PulseRateItem;
}

export const pulseRateData: PulseRate = {
  ">15": {
    normal_range: [60, 100],
  },
  "11-14": {
    normal_range: [60, 105],
  },
  "6-10": {
    normal_range: [70, 110],
  },
  "3-5": {
    normal_range: [80, 120],
  },
  "1-3": {
    normal_range: [80, 130],
  },
  "6-12m": {
    normal_range: [80, 140],
  },
  "1-5m": {
    normal_range: [90, 150],
  },
  "0-1m": {
    normal_range: [100, 160],
  },
};
