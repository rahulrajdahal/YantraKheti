import axios from "axios";
import { get } from "lodash";

axios.defaults.baseURL = "http://192.168.101.13:8000";

const HeaderData = async () => {
  const token = localStorage.getItem("jwt");
};

export default class Api {
  async registerUser(payload: any) {
    try {
      const res = axios.post("/auth/register", payload);
      console.log(`Register api response: ${res}`);
      const data = get(res, "data");
      return data;
    } catch (e) {
      console.log(`Register api error: ${e}`);
      throw e;
    }
  }

  async loginUser(payload: any) {
    try {
      const res = axios.post("/auth/login", payload);
      console.log(`Login api response: ${res}`);
      const data = get(res, "data");
      return data;
    } catch (e) {
      console.log(`Login api error: ${e}`);
      throw e;
    }
  }

  async logoutUser() {
    try {
      const res = axios.post("/auth/logout");
      console.log(`Login api response: ${res}`);
      const data = get(res, "data");
      return data;
    } catch (e) {
      console.log(`Login api error: ${e}`);
      throw e;
    }
  }

  async getSensorValues() {
    try {
      const res = await axios.get("/arduino/getSensorValue");
      console.log(`GetSensorValue api response: ${res}`);
      const data = get(res, "data");
      return data;
    } catch (e) {
      console.log(`GetSensorValue api error: ${e}`);
      throw e;
    }
  }

  async setSensorValues(payload: any) {
    try {
      const res = axios.post("/arduino/setSensorValue", payload);
      console.log(`SetSensorValue api response: ${res}`);
      const data = get(res, "data");
      return data;
    } catch (e) {
      console.log(`SetSensorValue api error: ${e}`);
      throw e;
    }
  }
}
