import "reflect-metadata";

import { Treatment } from "./treatments";
import { Validator } from "./validators";

export function Validators(validators: Validator[]) {
    return Reflect.metadata('validators', validators);
}

export function Treatments(treatments: Treatment[]) {
    return Reflect.metadata('treatments', treatments);
}

export function getValidators(target: any, propertyKey: string): Validator[] {
    return Reflect.getMetadata('validators', target, propertyKey) || [];
}

export function getTreatments(target: any, propertyKey: string): Treatment[] {
    return Reflect.getMetadata('treatments', target, propertyKey) || [];
}
