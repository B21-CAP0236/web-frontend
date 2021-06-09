import axios from "axios";
import {getCookie} from '../../config/cookie'

export const addRecipients = async (nik, nama, pekerjaan, status, ttl, kewarganegaraan, gender, goldar, alamat, agama) => {
  try {
    const json = await axios({
      url: `https://anantara.hasura.app/api/rest/add/location`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("loginToken")}`,
      },
      data: {
        nik: nik,
        nama: nama,
        pekerjaan: pekerjaan,
        status_perkawinan: status,
        ttl: ttl,
        kewarganegaraan: kewarganegaraan,
        jenis_kelamin: gender,
        gol_darah: goldar,
        alamat: alamat,
        agama: agama
      },
    });
    return json.data;
  } catch (e) {
    return e;
  }
};