import 'reflect-metadata';
import { IsString } from 'class-validator';
import { BaseUser } from "./base-user";

export class UserWithStringId extends BaseUser {
    @IsString()
    id!: string;
}