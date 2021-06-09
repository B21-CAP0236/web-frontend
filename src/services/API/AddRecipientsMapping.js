import axios from "axios";
import {getCookie} from '../../config/cookie'

export const addRecipientsMapping = async (bansos, recipient) => {
  try {
    const json = await axios({
      url: `https://anantara.hasura.app/api/rest/add/location`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("loginToken")}`,
      },
      data: {
        bansos_id: bansos,
        receipient_id: recipient
      },
    });
    return json.data;
  } catch (e) {
    return e;
  }
};