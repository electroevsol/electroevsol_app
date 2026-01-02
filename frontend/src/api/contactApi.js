import { apiClient } from "./apiClient";

const contactApi = {
  contact: (data) => {
    return apiClient.post("/contact", data);
  },
};

export default contactApi