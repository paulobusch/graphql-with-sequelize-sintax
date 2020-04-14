import { Mutation } from "../../../utils/mutation";
import { InputObjectType, InputField } from "decapi";
<<<<<<< HEAD
import { User } from "../users.schema";
=======
>>>>>>> bbdfc99de7633614789b7b31cc9e26506cd48018

@InputObjectType({ name: 'RemoveUser', description: 'Remove User' })
export class RemoveUser extends Mutation<boolean> {
    @InputField() id!: string;
    
    async execute(): Promise<boolean> {
<<<<<<< HEAD
        const filter = { where: { id: this.id } };
        const user = await User.findOne(filter);
        user?.remove();

        const result = await user?.update(filter);
        return result ? true : false;
=======
        return true;
>>>>>>> bbdfc99de7633614789b7b31cc9e26506cd48018
    }
}