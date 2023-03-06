import { Directive } from '@angular/core';
import { NG_VALIDATORS, FormControl, Validator } from '@angular/forms';
import { passwordValidator } from '../utils/password-validator';

@Directive({
    selector: '[passwordValidator]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: PasswordValidatorDirective,
            multi: true
        }
    ]
})
export class PasswordValidatorDirective implements Validator {
    validate(control: FormControl): { [key: string]: string } | null {
        return passwordValidator(control);
    }
}
