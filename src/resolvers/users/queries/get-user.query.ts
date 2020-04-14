import { Query } from "../../../utils/query";
import { User } from "../users.schema";
import { InputObjectType, InputField } from "decapi";

@InputObjectType({ name: 'GetUser', description: 'Get User By Id' })
export class GetUser extends Query<User> {
<<<<<<< HEAD
    @InputField() id!: string;

    async execute(): Promise<User> {
        const filter = { where: { id: this.id } };
        const user = await User.findOne(filter);
        if (user === null) throw new Error('User with id is not fount');
=======
    @InputField() id!: String;

    async execute(): Promise<User> {
        const user = new User(
            "asdfadf",
            "Paulo Ricardo Busch",
            "paulo202015@outlook.com.br",
            20
        );
>>>>>>> bbdfc99de7633614789b7b31cc9e26506cd48018
        return user;
    }
}