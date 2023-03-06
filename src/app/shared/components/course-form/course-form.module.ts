import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CourseFormComponent } from "./course-form.component";
import { ButtonModule } from "../button/button.module";
import { DurationPipe } from "../../pipes/duration.pipe";
@NgModule({
  declarations: [CourseFormComponent, DurationPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule
  ],
  exports: [CourseFormComponent]
})
export class CourseFormModule {}
