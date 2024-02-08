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

export const getNavlinks = async () => {
  try {
    const response = await apiClient.get("/links-api/links");
    return response.data;
  } catch (error) {
    throw handleError(error);
  }
};

export const getProjects = async () => {
  try {
    const response = await apiClient.get("/projects-api/projects");
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw handleError(error);
  }
};

export const getProjectBySlug = async (slug) => {
  try {
    const response = await apiClient.get(`/projects-api/projects/${slug}`);
    return response.data;
  } catch (error) {
    throw handleError(error);
  }
};
