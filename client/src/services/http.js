import axios from "axios";

const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api"
});

export const getOverview = () => http.get("/overview");
export const addMoneyApi = (payload) => http.post("/transactions/add-money", payload);
export const cashOutApi = (payload) => http.post("/transactions/cash-out", payload);
export const addBankApi = (payload) => http.post("/accounts/bank", payload);
export const getActivityApi = (params) => http.get("/transactions", { params });
export const deleteActivityApi = (id) => http.delete(`/transactions/${id}`);

export default http;