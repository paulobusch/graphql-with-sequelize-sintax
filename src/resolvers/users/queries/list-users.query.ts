import { Query } from "../../../utils/query";
import { User } from "../users.schema";
import { InputObjectType, InputField } from "decapi";
import { Paginated } from "../../../utils/paginated";

@InputObjectType({ name: 'ListUsers', description: 'List Users' })
export class ListUsers extends Query<Paginated<User>> {
    @InputField({ defaultValue: 1 }) page!: number;
    @InputField({ defaultValue: 100 }) limit!: number;

    async execute(): Promise<Paginated<User>> {
        const filter = { 
            offset: (this.page - 1) * this.limit, 
            limit: this.limit 
        };
        const users = await User.findAndCountAll(filter);
        return new Paginated(users.count, users.rows);
    }
}