import { cookieManager } from "@/utilities/cookie-manager";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface PublicKey {
  PUBLIC_KEY: string;
  API_URL: string;
}

export const API = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl: cookieManager.parseCookie<PublicKey>("carepro_public_key")
    //   ?.API_URL as string,
    baseUrl: "https://staging-sc.api.arcapps.org/carepro-api",
    prepareHeaders: (headers) => {
      const token = cookieManager.parseCookie<PublicKey>("carepro_public_key");
      if (token) {
        headers.set("authorization", `Bearer ${token?.PUBLIC_KEY}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: [],
});
