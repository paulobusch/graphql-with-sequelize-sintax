import { Mutation } from "../../../utils/mutation";
import { User } from "../users.schema";
import { InputObjectType, InputField } from "decapi";

@InputObjectType({ name: 'UpdateUser', description: 'Update User' })
export class UpdateUser extends Mutation<User> {
    @InputField() id!: string;
    @InputField() name!: string;
    @InputField() email!: string;
<<<<<<< HEAD
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
=======
    @InputField() age!: number;
    
    async execute(): Promise<User> {
        const user = new User(
            this.id,
            this.name,
            this.email,
            this.age
        );
        return user;
>>>>>>> bbdfc99de7633614789b7b31cc9e26506cd48018
    }
}