import { apiClient } from "./apiClient";

const calculatorApi = {
  calculateSolar: (data) => {
    return apiClient.post("/calculator/calculate", data);
  },
};

export default calculatorApi;
