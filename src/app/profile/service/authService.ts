import { Injectable } from "@angular/core";
import { IUser } from "../models/user";

@Injectable()
export class AuthService {
  currentUser!: IUser;

  loginUser(payload: { username: string, password: string }) {

    this.currentUser = {
      id: 1,
      firstname: "firstname",
      lastname: "lastname",
      username: payload.username
    }
  }

  isAuthenticated() {
    return !!this.currentUser;
  }
}
