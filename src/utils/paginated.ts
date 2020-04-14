import { ObjectType, Field, ArrayField } from "decapi";
import { User } from "../resolvers/users/users.schema";

@ObjectType()
export class Paginated<Type> {
    @Field() totalRows: Number;
    @ArrayField({ itemType: User }) rows: User[];
    constructor(
        totalRows: number,
        rows: User[]
    ) { 
        this.totalRows = totalRows;
        this.rows = rows;
    }
}