import axios from "axios";
import {getCookie} from '../../config/cookie'

export const addBansos = async (is_active, stock, location) => {
  try {
    const json = await axios({
      url: `https://anantara.hasura.app/api/rest/add/bansos`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("loginToken")}`,
      },
      data: {
        is_active: is_active,
        stock: stock,
        location_id: parseInt(location)
      },
    });
    return json.data.insert_bansos_one;
  } catch (e) {
    return e;
  }
};