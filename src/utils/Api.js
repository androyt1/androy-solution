import axios from "axios";

// Change the baseURL to the servers web address
// in production
export default axios.create({
  baseURL: "https://gateway.marvel.com/v1/public/comics",
  withCredentials: true,
  credentials: "include",
});