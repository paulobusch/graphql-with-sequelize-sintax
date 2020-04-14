export class Paginated<Type> {
    constructor(
        public totalRows: Number,
        public rows: Type[]
    ) { }
}