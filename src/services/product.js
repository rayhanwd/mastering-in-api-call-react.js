import { axios } from "../utils/lib";

const api = axios.create({
  baseURL: process.env.API_BASE_URL
});

const productService = (() => {
  let token = null;

  const handleError = (error) => {
    if (error.response) {
      console.error(`Error: ${error.response.data.message}`);
    } else {
      console.error(`Error: ${error.message}`);
    }
    throw error;
  };

  const getToken = async () => {
    try {
      const response = await api.get("/token");
      token = response.data.accesstoken;
    } catch (error) {
      handleError(error);
    }
  };

  // getToken(); you call it when you are use your own api

  return {
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
        const response = await api.post(url, data, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        return response;
      } catch (error) {
        handleError(error);
      }
    },
    put: async (url, data) => {
      try {
        const response = await api.put(url, data, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        return response;
      } catch (error) {
        handleError(error);
      }
    },
    delete: async (url) => {
      try {
        const response = await api.delete(url, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        return response;
      } catch (error) {
        handleError(error);
      }
    }
  };
})();

export default productService;
