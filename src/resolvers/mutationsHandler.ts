import { Mutation } from "../utils/mutation";

export class MutationsHandler {
    static async execute<Type>(mutation: Mutation<Type>): Promise<Type> {
        const permitted = await mutation.permitted();
        // if (!permitted) throw new Error({ message: 'Is not permitted', status });
        const result = await mutation.execute();
        // const triggers = query.triggers();
        return result;
    }
}