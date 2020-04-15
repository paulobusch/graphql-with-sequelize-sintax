import { Mutation } from "../../../utils/mutation";
import { User } from "../users.schema";
import { InputObjectType, InputField } from "decapi";

@InputObjectType({ name: 'UpdateUser', description: 'Update User' })
export class UpdateUser extends Mutation<User> {
    @InputField() id!: string;
    @InputField() name!: string;
    @InputField() email!: string;
    @InputField() birth!: Date;
    
    async execute(): Promise<User> {
        const filter = { where: { id: this.id } };
        const user = User.instance({
            id: this.id,
            name: this.name,
            email: this.email,
            birth: this.birth,
        });
        return await user.update(filter);
    }
}