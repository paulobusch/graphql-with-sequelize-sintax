interface IQuery<Type> {
    permitted(): boolean;
    execute(): Promise<Type>;
    triggers(): string[];
}

export abstract class Query<Type> implements IQuery<Type> {
    permitted() { return true; }
    execute(): Promise<Type> { throw new Error("Method execute not implemented on query."); }
    triggers(): string[] { return []; }    
}