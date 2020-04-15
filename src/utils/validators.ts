export enum ValidatorType {
    unique = 0,
    writeonly = 1,
    readonly = 2,
    required = 3,
    lenght = 4,
    regex = 5
}

export class Validator {

    constructor(
        public type: ValidatorType, 
        public call: Function    
    ) { }

    static get unique(): Validator {
        return new Validator(
            ValidatorType.unique, 
            function (value: string) { return !!value }
        ); 
    }

    static get writeonly(): Validator {
        return  new Validator(
            ValidatorType.writeonly,
            function (value: string) { return !!value }
        ); 
    }

    static get readonly(): Validator {
        return new Validator(
            ValidatorType.required,
            function (value: string) { return !!value }
        );
    }

    static get required(): Validator {
        return new Validator(
            ValidatorType.required,
            function (value: string) { return !!value; }
        );
    }

    static lenght(options: { len?: number, min?: number, max?: number }): Validator {
        if (!options || (!options.len && !options.min && !options.max)) 
            throw new Error('Require configure lenght options');
        return new Validator(
            ValidatorType.lenght,
            function (value: string) {
                if (!value) return false;
                
                if (options.len && value.length !== options.len) return false;
                if (options.min && value.length < options.min) return false;
                if (options.max && value.length > options.max) return false;
                return true;
            }
        );
    } 

    static regex(regex: string): Validator {
        if (!regex)
            throw new Error('Require regex for validator');
        return new Validator(
            ValidatorType.regex,
            function(value: string) {
                if (!value) return false;
                return new RegExp(regex).test(value);
            }
        );
    }
}