import { Query } from "../../../utils/query";
import { User } from "../users.schema";
import { InputObjectType, InputField } from "decapi";
import { Paginated } from "../../../utils/paginated";

@InputObjectType({ name: 'ListUsers', description: 'List Users' })
export class ListUsers extends Query<Paginated<User>> {
    @InputField({ defaultValue: 1 }) page!: number;
    @InputField({ defaultValue: 100 }) limit!: number;

    async execute(): Promise<Paginated<User>> {
<<<<<<< HEAD
        const filter = { 
            offset: (this.page - 1) * this.limit, 
            limit: this.limit 
        };
        const users = await User.findAndCountAll(filter);
        return new Paginated(users.count, users.rows);
=======
        const user = new User(
            "asdfadf",
            "Paulo Ricardo Busch",
            "paulo202015@outlook.com.br",
            20
        );
        return new Paginated(1, [user]);
>>>>>>> bbdfc99de7633614789b7b31cc9e26506cd48018
    }
}