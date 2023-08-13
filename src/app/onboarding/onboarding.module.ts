import { NgModule } from '@angular/core';
import {CommonModule, NgFor} from '@angular/common';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule, MatSelectModule, NgFor, FormsModule,BrowserAnimationsModule
  ]
})
export class OnboardingModule { }
