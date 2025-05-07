import axios from "axios";
import { get } from "lodash";

axios.defaults.baseURL = "http://localhost:8000";

const HeaderData = async () => {
  const token = localStorage.getItem("jwt");

  if (token === null) {
    return {
      "Content-Type": "application/json",
      Authorization: "",
    };
  } else {
    return {
      "Content-Type": "application/json",
      Authorization: `Token 086542064ff23c2e4e4d220b212e3697350026f6`,
    };
  }
};

export default class Api {
  async registerUser(payload: any) {
    try {
      const res = await axios.post("/auth/register", payload);
      const data = get(res, "data");
      return data;
    } catch (e) {
      throw e;
    }
  }

  async loginUser(payload: any) {
    try {
      const res = await axios.post("/auth/login", payload);
      const data = get(res, "data");

      localStorage.setItem("jwt", data.jwt);
      return data;
    } catch (e) {
      throw e;
    }
  }

  async logoutUser() {
    try {
      const res = await axios.post("/auth/logout");
      const data = get(res, "data");
      return data;
    } catch (e) {
      throw e;
    }
  }

  async getSensorValues() {
    try {
      const res = await axios.get("/arduino/getSensorValue", {
        headers: await HeaderData(),
      });
      const data = get(res, "data");
      return data;
    } catch (e) {
      throw e;
    }
  }

  async setSensorValues(payload: any) {
    try {
      const res = await axios.post("/arduino/setSensorValue", payload, {
        headers: await HeaderData(),
      });
      const data = get(res, "data");
      return data;
    } catch (e) {
      throw e;
    }
  }

  async getSeedData(payload: any) {
    try {
      const res = await axios.post("/detect/detectsedling", payload, {
        headers: await HeaderData(),
      });
      const data = get(res, "data");
      return data;
    } catch (e) {
      throw e;
    }
  }
}
