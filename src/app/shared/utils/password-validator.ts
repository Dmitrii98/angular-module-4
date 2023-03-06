import { FormControl } from '@angular/forms';

export function passwordValidator(control: FormControl): { [key: string]: string } | null {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

    if (!passwordRegex.test(control.value)) {
        return { 'invalidPassword': "Wrong password" };
    }

    return null;
}
