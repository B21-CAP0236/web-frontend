import axios from "axios";

export const jwtParser = async (jwt) => {
  try {
    const json = await axios({
      url: `https://us-central1-anantara-dream-team-cap0236.cloudfunctions.net/userparser`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        jwt_token: jwt
      },
    });
    return json.data;
  } catch (e) {
    return e;
  }
};