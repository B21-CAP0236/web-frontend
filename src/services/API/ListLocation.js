import axios from "axios";
import {getCookie} from '../../config/cookie'

export const listLocation = async () => {
  try {
    const json = await axios({
      url: `https://anantara.hasura.app/api/rest/list/location`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("loginToken")}`,
      },
    });
    return json.data.locations;
  } catch (e) {
    return e;
  }
};