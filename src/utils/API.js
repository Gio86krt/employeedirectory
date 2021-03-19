import axios from "axios";

// const baseUrl = "https://randomuser.me/api/";
// const apiKey = "4G8Q-3Q3T-XME3-XFC6";

export default {
  getRandomData: async function () {
    return await axios.get("https://randomuser.me/api/?results=50&nat=us"); //${baseUrl}?key=${apiKey}&ref=hispcyw7
  },
};
