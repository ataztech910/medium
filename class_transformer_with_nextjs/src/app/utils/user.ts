import { Exclude } from 'class-transformer';
import { BaseUser } from "./base-user";

export class User extends BaseUser {
    @Exclude()
    email!: string;

    getHisMajestyByName() {
        return 'His Majesty ' + this.getName();
    }
}