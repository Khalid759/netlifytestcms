export const API_URL = "https://api.kraftshala.com";

let convexApiUrl =
  typeof window !== "undefined"
    ? window.location.hostname == "www.kraftshala.com"
      ? "https://service.kraftshala.com"
      : "https://testservice.kraftshala.com"
    : "";

export const CONVEX_API_URL = convexApiUrl;

export const EMAIL_REGEX = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
