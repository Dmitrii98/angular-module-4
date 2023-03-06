import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RegistrationFormComponent } from "./registration-form.component";
import { ButtonModule } from "../button/button.module";
import { FieldValidatorDirective } from "../../directives/forbidden-filed.directive";
@NgModule({
  declarations: [RegistrationFormComponent, FieldValidatorDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule
  ],
  exports: [RegistrationFormComponent]
})
export class RegistrationFormModule {}
