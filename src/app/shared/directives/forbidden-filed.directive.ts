import { Directive } from '@angular/core';
import { NG_VALIDATORS, FormControl, Validator } from '@angular/forms';
import { requiredValidator } from "../utils/required-validator";

@Directive({
    selector: '[requiredValidator]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: FieldValidatorDirective,
            multi: true
        }
    ]
})
export class FieldValidatorDirective implements Validator {
    validate(control: FormControl): { [key: string]: string } | null {
        return requiredValidator(control);
    }
}
