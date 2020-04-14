import { Mutation } from "../../../utils/mutation";
import { User } from "../users.schema";
import { InputObjectType, InputField } from "decapi";

@InputObjectType({ name: 'CreateUser', description: 'Create User' })
export class CreateUser extends Mutation<User> {
    @InputField() id!: string;
    @InputField() name!: string;
    @InputField() email!: string;
<<<<<<< HEAD
    @InputField() birth!: Date;
    
    async execute(): Promise<User> {
        const user = User.instance({
            id: this.id,
            name: this.name,
            email: this.email,
            birth: this.birth,
        });
        return await user.save();
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