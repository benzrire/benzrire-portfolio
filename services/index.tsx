import axios from "axios";

axios.defaults.baseURL = process.env.API_BASE;

export default axios;

export const getExperiences = () => {
  try {
    const result = axios(`/works?populate=*&sort=id:asc`, {
      method: `get`,
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`
      }
    });

    return result;
  } catch (error) {}
};