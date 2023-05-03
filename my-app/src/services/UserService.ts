import API from "../API/API";
import endPoints from "../API/endpoints";
import { AxiosResponse } from "axios";
interface User {
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  password: string;
  gender: string;
  checkbox: boolean;
}
class UserService {
  static createUser(user: User): Promise<AxiosResponse> {
    return API.post(endPoints.api.users.create, user);
  } //createUser
}
export default UserService;
