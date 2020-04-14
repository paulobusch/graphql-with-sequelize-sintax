<<<<<<< HEAD
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
=======
export class Paginated<Type> {
    constructor(
        public totalRows: Number,
        public rows: Type[]
    ) { }
>>>>>>> bbdfc99de7633614789b7b31cc9e26506cd48018
}