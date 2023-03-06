import { Input, NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginFormComponent } from "./login-form.component";
import { ButtonModule } from "../button/button.module";
import { EmailValidatorDirective } from "../../directives/forbidden-email.directive";
import { PasswordValidatorDirective } from "../../directives/forbidden-password.directive";
@NgModule({
  declarations: [LoginFormComponent, EmailValidatorDirective, PasswordValidatorDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
  ],
  exports: [LoginFormComponent]
})
export class LoginFormModule {
  @Input() button_text: string = '';
}
