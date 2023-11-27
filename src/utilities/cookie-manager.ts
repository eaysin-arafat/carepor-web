import Cookies from "js-cookie";

export const saveCookie = (name: string, value: any, options: object): void => {
  const parsed = JSON.parse(value);
  Cookies.set(name, parsed, options);
};

// import Cookies from "js-cookie";

// export class CookieManager {
//   constructor(cookie) {
//     this.cookie = cookie;
//   } //

//   saveCookie(name, value, options) {
//     this.cookie.set(name, value, options);
//   }

//   getCookie(name) {
//     return this.cookie.get(name);
//   }

//   removeCookie(name) {
//     this.cookie.remove(name);
//   }

//   parseCookie(name) {
//     const cookie = this.getCookie(name);

//     if (!cookie) return null;

//     return JSON.parse(cookie);
//   }
// }

// export const cookieManager = new CookieManager(Cookies);
