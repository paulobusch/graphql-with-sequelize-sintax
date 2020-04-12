import { Mutation } from "../../../utils/mutation";
import { InputObjectType, InputField } from "decapi";

@InputObjectType({ name: 'RemoveUser', description: 'Remove User' })
export class RemoveUser extends Mutation<boolean> {
    @InputField() id!: string;
    
    async execute(): Promise<boolean> {
        return true;
    }
}