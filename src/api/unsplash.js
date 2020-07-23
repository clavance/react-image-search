import axios from "axios";

// create base axios call for unsplash
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID " + process.env.UNSPLASH_API_KEY
  }
});
