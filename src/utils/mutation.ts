interface IMutation<Type> {
    permitted(): boolean;
    execute(): Promise<Type>;
    triggers(): string[];
}

export abstract class Mutation<Type> implements IMutation<Type> {
    permitted() { return true; }
    execute(): Promise<Type> { throw new Error("Method execute not implemented on mutation."); }
    triggers(): string[] { return []; }    
}