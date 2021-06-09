import axios from "axios";
import {getCookie} from '../../config/cookie'

export const listRecipients = async () => {
  try {
    const json = await axios({
      url: `https://anantara.hasura.app/api/rest/list/receipient`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("loginToken")}`,
      },
    });
    return json.data.receipients;
  } catch (e) {
    return e;
  }
};