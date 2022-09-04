import { countDaysBetween, generateRates } from './generators';

describe('countDaysBetween: counts the number number of days between 2 days', () => {
  test('returns 1 days between the 2022-01-01 and 2022-01-03', () => {
    const daysCount = countDaysBetween('2022-01-01', '2022-01-03');
    expect(daysCount).toEqual(1);
  });
  test('returns 3 days between the 2022-01-01 and 2022-01-05', () => {
    const daysCount = countDaysBetween('2022-01-01', '2022-01-05');
    expect(daysCount).toEqual(3);
  });
  test('returns 5 days between the 2022-08-22 and 2022-08-26', () => {
    const daysCount = countDaysBetween('2022-08-22', '2022-08-26');
    expect(daysCount).toEqual(5);
  });
});

describe('generateRates: generates Gold (XAU) rates', () => {
  test('returns an object with 1 rate with a start on the "2022-09-01"', () => {
    const rates = generateRates(1, '2022-09-01', 'XAU');
    expect(Object.values(rates)).toHaveLength(1);
  });
  test('returns an object with 5 rates with a start on the "2022-09-01"', () => {
    const rates = generateRates(5, '2022-09-01', 'XAU');
    expect(Object.values(rates)).toHaveLength(3);
  });
  test.only('returns an object with 22 rates with a start on the "2022-08-01"', () => {
    const rates = generateRates(23, '2022-08-01', 'XAU');
    expect(Object.values(rates)).toHaveLength(23);
  });
});

/**
 * {
  "success": true,
  "timeseries": true,
  "start_date": "2022-08-31",
  "end_date": "2022-09-03",
  "base": "EUR",
  "rates": {
    "2022-08-31": {
      "XAU": 1719.1177960575326
    },
    "2022-09-01": {
      "XAU": 1702.0369182776512
    },
    "2022-09-02": {
      "XAU": 1705.7852411177134
    },
    "2022-09-03": {
      "XAU": 1719.9787938834659
    }
  },
  "unit": "per ounce"
}
 * 
 */
