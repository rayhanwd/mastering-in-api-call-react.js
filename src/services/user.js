import axios from "axios";

const api = axios.create({
  baseURL: process.env.API_BASE_URL
});

const handleError = (error) => {
  if (error.response) {
    console.error(`Error: ${error.response.data.message}`);
  } else {
    console.error(`Error: ${error.message}`);
  }
  throw error;
};

const userService = {
  getAll: async (url) => {
    try {
      const response = await api.get(url);
      return response;
    } catch (error) {
      handleError(error);
    }
  },
  getOne: async (url) => {
    try {
      const response = await api.get(url);
      return response;
    } catch (error) {
      handleError(error);
    }
  },
  post: async (url, data) => {
    try {
      const response = await api.post(url, data);
      return response;
    } catch (error) {
      handleError(error);
    }
  },
  put: async (url, data) => {
    try {
      const response = await api.put(url, data);
      return response;
    } catch (error) {
      handleError(error);
    }
  },
  delete: async (url) => {
    try {
      const response = await api.delete(url);
      return response;
    } catch (error) {
      handleError(error);
    }
  }
};

export default userService;
