import { Component } from '@angular/core';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent {
  uuid: string | null = null;

constructor() {
this.generateUuid();
}
  generateUuid(): void {
    this.uuid = "DORA" + Date.now();
    console.log("generated UUID" , this.uuid);
  }





}
