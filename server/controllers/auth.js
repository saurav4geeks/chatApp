//imports

import axios from "axios";

//functions
export const authenticate = async (req, res) => {
  try {
    const { username } = req.body;
    try {
      const response = await axios.put(
        "https://api.chatengine.io/users/",
        { username: username, secret: username, first_name: username },
        {
          headers: {
            "private-key": process.env.CHAT_ENGINE_PRIVATE_KEY,
          },
        }
      );
      return res.status(response.status).json(response.data);
    } catch (e) {
      console.log(e);
      return res.status(e.response.status).json(e.response.data);
    }
    res.json({ username: username, secret: "sha256..." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
