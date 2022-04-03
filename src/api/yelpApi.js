import axios from "axios";

const client = axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer nq8ECsX7OKUdM1RGm0B2pAqMuQlo30YY_XyVcHpb8TEA16lX6Aqh3xKixSL7wLjR0POeSrvu-JHrHw5upeWOVWG0--j2siEPWwNXBGDkwEqxfGl0_hK84Eanb8XXYHYx",
  },
});
const getBusinesses = async () => {
  try {
    const response = await client.get("/search", {
      params: {
        limit: 50,
        location: "Tuscaloosa",
        term: "bars",
      },
    });
    return response.data.businesses;
  } catch (error) {
    console.log("Error with yelp get business request:", error);
  }
};

export default {
  client,
  getBusinesses,
};
