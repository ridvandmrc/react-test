import axios from "axios";

class UserService {
  getAll() {
    return axios.get("https://jsonplaceholder.typicode.com/users");
  }
}

export const userService = new UserService();
