import { Mutation } from "../../../utils/mutation";
import { User } from "../users.schema";
import { InputObjectType, InputField } from "decapi";

@InputObjectType({ name: 'CreateUser', description: 'Create User' })
export class CreateUser extends Mutation<User> {
    @InputField() id!: string;
    @InputField() name!: string;
    @InputField() email!: string;
    @InputField() birth!: Date;
    
    async execute(): Promise<User> {
        const user = User.instance({
            id: this.id,
            name: this.name,
            email: this.email,
            birth: this.birth,
        });
        return await user.save();
    }
}