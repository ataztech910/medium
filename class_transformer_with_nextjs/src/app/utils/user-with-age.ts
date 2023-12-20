import { Expose, Transform, Exclude } from 'class-transformer';
import { BaseUser } from "./base-user";

export class UserWithAge extends BaseUser {
    @Expose({ name: 'id' })
    customerId!: number;

    @Exclude()
    email!: string;

    @Transform(({ value }) => value.toUpperCase())
    firstName!: string;

    getAgePlusString() {
        return this.age + ' years';
    }
}