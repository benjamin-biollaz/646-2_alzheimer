import { DateFormatter } from "../../Utilities/DateFormatter.js";

describe('formatDate', () => {

    const df = new DateFormatter();

    const dateSeconds = { seconds: 1642591498, nanoseconds: 123456789 };
    const expectedDate = '19/1/2022';
  
    it('returns empty string when dateSeconds is falsy', () => {
      expect(df.formatDate(null)).toBe('');
      expect(df.formatDate(undefined)).toBe('');
    });
  
    it('returns empty string when dateSeconds.seconds is falsy', () => {
      expect(df.formatDate({ nanoseconds: 123 })).toBe('');
      expect(df.formatDate({ seconds: null, nanoseconds: 123 })).toBe('');
      expect(df.formatDate({ seconds: undefined, nanoseconds: 123 })).toBe('');
    });
  
    it('returns formatted date when dateSeconds is valid', () => {
      expect(df.formatDate(dateSeconds)).toBe(expectedDate);
    });
  });

describe('calculateAge', () => {
    const df = new DateFormatter();
    
    it('returns an empty string if birthDate is undefined or has no seconds property', () => {
        expect(df.calculateAge()).toEqual('');
        expect(df.calculateAge({})).toEqual('');
        expect(df.calculateAge({ nanoseconds: 0 })).toEqual('');
    });

    it('returns the correct age based on the birthDate', () => {
        const birthDate = { seconds: 1000000000, nanoseconds: 0 }; // 09/09/2001
        jest.spyOn(Date, 'now').mockImplementation(() => new Date('2023-03-14T00:00:00.000Z'));
        expect(df.calculateAge(birthDate)).toEqual(21);
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });
});