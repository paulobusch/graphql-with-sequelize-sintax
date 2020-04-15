import { Mutation } from "../../../utils/mutation";
import { InputObjectType, InputField } from "decapi";
import { User } from "../users.schema";

@InputObjectType({ name: 'RemoveUser', description: 'Remove User' })
export class RemoveUser extends Mutation<boolean> {
    @InputField() id!: string;
    
    async execute(): Promise<boolean> {
        const filter = { where: { id: this.id } };
        const user = await User.findOne(filter);
        user?.remove();

        const result = await user?.update(filter);
        return result ? true : false;
    }
}