import axios from "axios";

export const loginAPI = async (username, password) => {
  try {
    const json = await axios({
      url: `https://us-central1-anantara-dream-team-cap0236.cloudfunctions.net/userlogin`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        username: username,
        password: password
      },
    });
    return json.data;
  } catch (e) {
    return e;
  }
};