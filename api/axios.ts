import axios from "axios";
import { BASE_URL } from "../constants";

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "User-Agent":
      "Mozilla/5.0 (compatible; WatchNixtoons2/0.1.0; +https://github.com/doko-desuka/plugin.video.watchnixtoons2)"
  }
});

export default axios
