import { Query } from "../../../utils/query";
import { User } from "../users.schema";
import { InputObjectType, InputField } from "decapi";

@InputObjectType({ name: 'GetUser', description: 'Get User By Id' })
export class GetUser extends Query<User> {
    @InputField() id!: String;

    async execute(): Promise<User> {
        const user = new User(
            "asdfadf",
            "Paulo Ricardo Busch",
            "paulo202015@outlook.com.br",
            20
        );
        return user;
    }
}