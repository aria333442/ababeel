import Axios from "axios";
const token = localStorage.getItem("token");
const axiosInstance = Axios.create({
  baseURl: "http://localhost:5000/api",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default axiosInstance;
