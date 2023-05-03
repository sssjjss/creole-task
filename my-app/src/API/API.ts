import axios from "axios";
import endPoints from "./endpoints";

const API = axios.create({
  baseURL: `${endPoints.serverBaseURL}/api`,
});
export default API;
