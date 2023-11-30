export class TypeValidation {
  static isOnlyNumber(value: string): boolean {
    return /^\d+$/.test(value);
  }
  static isZambiaCellphone = (cellphone: string): boolean => {
    return /^0?\d{0,10}$/.test(cellphone);
  };

  static isPhoneNumber(value: string): boolean {
    return /^[0-9]{11}$/.test(value);
  }

  static isOnlyInteger(value: string): boolean {
    return /^\d+$/.test(value);
  }

  static isOnlyFloat(value: string): boolean {
    return /^\d+(\.\d+)?$/.test(value);
  }

  static isOnlyAlphabet(value: string): boolean {
    return /^[a-zA-Z]+$/.test(value);
  }

  static isOnlyAlphaNumeric(value: string): boolean {
    return /^[a-zA-Z0-9]+$/.test(value);
  }

  static isOnlyAlphaNumericWithSpace(value: string): boolean {
    return /^[a-zA-Z0-9 ]+$/.test(value);
  }

  static isOnlyAlphaNumericWithSpaceAndDot(value: string): boolean {
    return /^[a-zA-Z0-9 .]+$/.test(value);
  }

  static isEmail(value: string): boolean {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value);
  }

  static isMobileNumber(value: string): boolean {
    return /^[0-9]{10}$/.test(value);
  }

  static isZipCode(value: string): boolean {
    return /^[0-9]{5}$/.test(value);
  }

  static isPassword(value: string): boolean {
    return /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(value);
  }
}
