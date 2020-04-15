import { Validators, Treatments } from "../../utils/decorators";
import { Treatment } from "../../utils/treatments";
import { Validator } from "../../utils/validators";

export class UserModel {
    @Validators([Validator.required, Validator.lenght({ max: 8 })])
    id?: string;

    @Validators([Validator.required, Validator.regex('[0-9]{11}'), Validator.lenght({ len: 11 })])
    cpf?: string;

    @Validators([Validator.required, Validator.unique, Validator.lenght({ max: 200 })])
    name?: string;
    
    @Validators([Validator.required, Validator.unique, Validator.lenght({ max: 200 })])
    email?: string;

    @Validators([Validator.required, Validator.unique, Validator.lenght({ min: 5, max: 50 })])
    login?: string;
    
    @Validators([Validator.required, Validator.unique])
    birth?: Date;

    @Treatments([Treatment.writecast((p: string) => 'hash')])
    @Validators([Validator.required, Validator.writeonly, Validator.lenght({ min: 5, max: 50 })])
    password?: string;
    
    @Treatments([Treatment.default(false)])
    removed?: boolean;

    static instance(user: {
        id?: string,
        cpf?: string,
        name?: string,
        email?: string,
        login?: string,
        birth?: Date,
        password?: string
    }): UserModel {
        return Object.assign(new UserModel(), user);
    }
}