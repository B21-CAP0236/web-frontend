import axios from "axios";
import {getCookie} from '../../config/cookie'

export const addLocation = async (nama, kota, kabupaten, provinsi, alamat) => {
  try {
    const json = await axios({
      url: `https://anantara.hasura.app/api/rest/add/location`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("loginToken")}`,
      },
      data: {
        nama: nama,
        kota: kota,
        kabupaten: kabupaten,
        provinsi: provinsi,
        alamat: alamat
      },
    });
    return json.data;
  } catch (e) {
    return e;
  }
};