import axios from "axios";

export default class Services {
  constructor() {
    this.service = axios.create({
      baseURL: process.env.REACT_APP_URL,
      withCredentials: true
    });
  }

  all = () => {
    return this.service.get(`/phones`).then(data => data.data);
  };
}
