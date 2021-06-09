import axios from "axios";
import {getCookie} from '../../config/cookie'

export const listBansos = async () => {
  try {
    const json = await axios({
      url: `https://anantara.hasura.app/api/rest/list/bansos`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("loginToken")}`,
      },
    });
    return json.data.bansos;
  } catch (e) {
    return e;
  }
};