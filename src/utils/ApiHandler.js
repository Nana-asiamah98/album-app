import axios from "axios";

export const getResource = async (endpoint) => {
  const response = await axios.get(endpoint);

  if (response.status >= 400) throw Error("Not Found");

  return response.data;
};
