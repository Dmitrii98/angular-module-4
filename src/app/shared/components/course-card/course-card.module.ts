import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CourseCardComponent } from "./course-card.component";
@NgModule({
  declarations: [CourseCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [CourseCardComponent]
})
export class CourseCardModule {}
