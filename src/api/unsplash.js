import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID if61S6_BwHJePWHKro3Ho_QFGH8QjPr6AZWUE478Rrk ",
  },
});
