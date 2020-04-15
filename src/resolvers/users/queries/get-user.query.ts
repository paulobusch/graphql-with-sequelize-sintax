import { Query } from "../../../utils/query";
import { User } from "../users.schema";
import { InputObjectType, InputField } from "decapi";

@InputObjectType({ name: 'GetUser', description: 'Get User By Id' })
export class GetUser extends Query<User> {
    @InputField() id!: string;

    async execute(): Promise<User> {
        const filter = { where: { id: this.id } };
        const user = await User.findOne(filter);
        if (user === null) throw new Error('User with id is not fount');
        return user;
    }
}