import { Query } from "../../../utils/query";
import { User } from "../users.schema";
import { InputObjectType, InputField } from "decapi";

@InputObjectType({ name: 'ListUsers', description: 'List Users' })
export class ListUsers extends Query<User[]> {
    @InputField({ defaultValue: 1 }) page!: number;
    @InputField({ defaultValue: 100 }) limit!: number;

    async execute(): Promise<User[]> {
        const filter = { 
            offset: (this.page - 1) * this.limit, 
            limit: this.limit 
        };
        return await User.findAll(filter);
    }
}