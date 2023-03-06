import { Component, Input } from "@angular/core";
import { FormControl, Validators } from '@angular/forms';
import { emailValidator } from "../../utils/email-validator";
import { passwordValidator } from "../../utils/password-validator";
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})

export class LoginFormComponent {
  @Input() button_text: string = '';
  emailFormControl = new FormControl('', [Validators.required, Validators.email, emailValidator ]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.email, passwordValidator ]);
}
