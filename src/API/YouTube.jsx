import axios from "axios";

const KEY = "AIzaSyBHilVE3-wTsya509Pv80CeE4ZwtqyAHg4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY
  }
});
