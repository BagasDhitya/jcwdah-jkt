import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://quirkypassenger-us.backendless.app/",
});

export default axiosInstance;
