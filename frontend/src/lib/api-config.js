import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const handleError = (error) => {
  if (error.response) {
    throw new Error(
      `Sunucu hatası: ${
        error.response.data.message || error.response.statusText
      }`
    );
  } else if (error.request) {
    throw new Error("Sunucudan yanıt alınamadı.");
  } else {
    throw new Error(`İstek hatası: ${error.message}`);
  }
};

export { apiClient as default, handleError };
