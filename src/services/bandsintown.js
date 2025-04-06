import axios from "axios";

const ARTIST = "Coldplay"; 
const APP_ID = "couch-culture"; 

export const fetchBandsintownEvents = async () => {
  try {
    const res = await axios.get(
      `https://rest.bandsintown.com/artists/${ARTIST}/events?app_id=${
        95687877}`
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching Bandsintown events", error);
    return [];
  }
};
