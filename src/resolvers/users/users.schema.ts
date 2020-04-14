import { ObjectType, Field, Arg } from "decapi";

@ObjectType()
export class User {
    @Field() id: String;
    @Field() name: String;
    @Field() email: String;
    @Field() age: Number;

    constructor(
        id: string,
        name: string,
        email: string,
        age: number
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.age = age;
    }
}