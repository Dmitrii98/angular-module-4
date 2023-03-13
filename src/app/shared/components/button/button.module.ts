import { Input, NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ButtonComponent } from "./button.component";
@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [ButtonComponent]
})
export class ButtonModule {
  @Input() button_text: string = '';
}
