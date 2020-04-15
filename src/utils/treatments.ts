export enum TreatmentType {
    default = 0,
    writecast = 1
}

export class Treatment {
    constructor(
        public type: TreatmentType,
        public call: Function
    ){ }

    static default(defaultValue: any): Treatment {
        if (defaultValue === null || defaultValue === undefined)
            throw new Error('Require value on default value');
        return new Treatment(
            TreatmentType.default,
            function(value: any) {
                if (!value) return defaultValue;
                return value;
            }   
        );
    }
    
    static writecast(cast: Function): Treatment {
        if (!cast)
            throw new Error('Require cast function');
        return new Treatment(TreatmentType.writecast, cast);
    }
}