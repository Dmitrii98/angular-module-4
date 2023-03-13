import { FormControl } from '@angular/forms';

export function requiredValidator(control: FormControl): { [key: string]: string } | null {

    if (!control.value.length) {
        return { invalidField: 'Field is required' };
    }

    return null;
}
