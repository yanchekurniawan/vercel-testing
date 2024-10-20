import axios from "axios";
import User from "./models/userModel.js";

export const getUser = async (req, res) => {
  try {
    const response = await axios.get("https://reqres.in/api/users");
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email === "") {
      console.log("Enter this Func");
      return res.status(400).json({
        error: "Sorry, we can't find your account",
      });
    }

    const findUser = await User.findOne({ email });
    const matchPassword = await bcrypt.compare(
      password,
      findUser?.password || ""
    );

    if (!findUser || !matchPassword) {
      return res.status(400).json({
        error: "Invalid username or password",
      });
    }

    return res.status(200).json({
      _id: findUser._id,
      fullname: findUser.fullname,
      email: findUser.email,
      username: findUser.username,
      profileImg: findUser.profileImg,
      coverImg: findUser.coverImg,
      bio: findUser.bio,
      link: findUser.link,
      followers: findUser.followers,
      following: findUser.following,
    });
  } catch (error) {}
};
