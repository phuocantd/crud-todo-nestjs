import { Injectable } from '@nestjs/common';
import * as objectid from 'objectid';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UserService {
  private users: any[] = [];

  getAllUsers() {
    return this.users;
  }

  getUserByName(username: String) {
    return this.users.find(i => i.username === username);
  }

  signUp(username: String, password: String) {
    const user = this.getUserByName(username);
    if (user) return;

    const newUser = {
      id: objectid(),
      username,
      password,
    };

    this.users.push(newUser);
    return newUser;
  }

  signIn(username: String, password: String) {
    const user = this.getUserByName(username);
    if (user) {
      if (user.password === password) {
        const token = jwt.sign({ username }, process.env.JWT, {
          expiresIn: 1 * 30,
        });
        return { token };
      }
    }
  }
}
