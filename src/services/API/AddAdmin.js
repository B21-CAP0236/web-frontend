import axios from "axios";
import {getCookie} from '../../config/cookie'

export const addAdmin = async (nama, email, password, access) => {
  try {
    const json = await axios({
      url: `https://anantara.hasura.app/api/rest/add/admin`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("loginToken")}`,
      },
      data: {
        nama: nama,
        email: email,
        password: password,
        write_access: access
      },
    });
    return json.data.insert_bansos_one;
  } catch (e) {
    return e;
  }
};