import axios from "axios";

const client = axios.create({
  baseURL: "https://planejamento-tributario-api.onrender.com",
});

export { client };
