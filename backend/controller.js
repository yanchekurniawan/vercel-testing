import axios from "axios";

export const getUser = async (req, res) => {
  try {
    const response = await axios.get("https://reqres.in/api/users");
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
};
