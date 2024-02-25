import axios from "axios";

const generateQuote = async () => {
  const response = await axios.get("https://dummyjson.com/quotes/random");
  return response.data;
};

export default generateQuote;
