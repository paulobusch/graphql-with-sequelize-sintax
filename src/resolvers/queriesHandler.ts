import { Query } from "../utils/query";

export class QueriesHandler {
    static async execute<Type>(query: Query<Type>): Promise<Type> {
        const permitted = await query.permitted();
        // if (!permitted) throw new Error({ message: 'Is not permitted', status });
        const result = await query.execute();
        // const triggers = query.triggers();
        return result;
    }
}