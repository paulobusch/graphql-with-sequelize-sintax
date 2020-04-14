import { Query } from "../../../utils/query";
import { User } from "../users.schema";
import { InputObjectType, InputField } from "decapi";
import { Paginated } from "../../../utils/paginated";

@InputObjectType({ name: 'ListUsers', description: 'List Users' })
export class ListUsers extends Query<Paginated<User>> {
    @InputField({ defaultValue: 1 }) page!: number;
    @InputField({ defaultValue: 100 }) limit!: number;

    async execute(): Promise<Paginated<User>> {
        const user = new User(
            "asdfadf",
            "Paulo Ricardo Busch",
            "paulo202015@outlook.com.br",
            20
        );
        return new Paginated(1, [user]);
    }
}