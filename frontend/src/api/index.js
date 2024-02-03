import apiClient, { handleError } from "@/lib/api-config";

export const getAbout = async () => {
  try {
    const response = await apiClient.get("/about-api/biography");
    return response.data;
  } catch (error) {
    throw handleError(error);
  }
};

export const getTestimonials = async () => {
  try {
    const response = await apiClient.get("/testimonials-api/testimonials");
    return response.data;
  } catch (error) {
    throw handleError(error);
  }
};
