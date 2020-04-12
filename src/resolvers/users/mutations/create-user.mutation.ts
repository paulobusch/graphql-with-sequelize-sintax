import { Mutation } from "../../../utils/mutation";
import { User } from "../users.schema";
import { InputObjectType, InputField } from "decapi";

@InputObjectType({ name: 'CreateUser', description: 'Create User' })
export class CreateUser extends Mutation<User> {
    @InputField() id!: string;
    @InputField() name!: string;
    @InputField() email!: string;
    @InputField() age!: number;
    
    async execute(): Promise<User> {
        const user = new User(
            this.id,
            this.name,
            this.email,
            this.age
        );
        return user;
    }
}