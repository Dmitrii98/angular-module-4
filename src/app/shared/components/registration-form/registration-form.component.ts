import { Component, Input } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { emailValidator } from "../../utils/email-validator";
import { passwordValidator } from "../../utils/password-validator";
import { requiredValidator } from "../../utils/required-validator";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent {
  @Input() button_text: string = '';

  emailFormControl = new FormControl('', [Validators.required, Validators.email, emailValidator ]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.email, passwordValidator ]);
  nameFormControl = new FormControl('', [Validators.required, requiredValidator]);
}
