import { ObjectType, Field, Arg } from "decapi";
import {Table, Column, Model, HasMany} from 'sequelize-typescript';

@ObjectType()
@Table({ timestamps: false })
export class User extends Model<User> {
    @Field() id!: String;
    @Field() name!: String;
    @Field() email!: String;
    @Field() birth!: Date;

    static instance(user: {
        id: string,
        name: string,
        email: string,
        birth: Date
    }): User {
        return Object.assign(new User(), user);       
    }
}