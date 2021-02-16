import axios from "axios";

const KEY = "0491fbae1f281e5701d43abde5b01d17";
const API_URL = "http://api.brewerydb.com/v2";

export const fetchBeers = async (page = 1) => {
  const endpoint = `${API_URL}/beers/?key=${KEY}&p=${page}`;
  try {
    const { data } = await axios.get(endpoint);

    return data;
  } catch (err) {
    console.error("#ERROR#", err);
  }
};
