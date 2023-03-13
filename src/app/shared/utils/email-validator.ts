import { FormControl } from '@angular/forms';

export function emailValidator(control: FormControl): { [key: string]: string } | null {
    const emailRegex = /\S+@\S+\.\S+/;

    if (!emailRegex.test(control.value)) {
        return { invalidEmail: 'Wrong email' };
    }

    return null;
}
