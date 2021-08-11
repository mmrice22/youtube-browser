import axios from "axios";

const KEY = "AIzaSyCkdc_dE46tfGqOG6UEHhnx796OlCV1cfs";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
