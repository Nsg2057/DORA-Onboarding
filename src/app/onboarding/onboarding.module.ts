import {NgModule} from '@angular/core';
import {CommonModule, NgFor} from '@angular/common';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatInputModule} from "@angular/material/input";
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule, MatSelectModule, NgFor, FormsModule, BrowserAnimationsModule, MatInputModule, MatNativeDateModule, MatDatepickerModule
  ]
})
export class OnboardingModule {
}
